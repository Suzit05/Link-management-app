const express = require("express");
const User = require("../models/user.model");
const authMiddleware = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken")

router.get("/register", (req, res) => {
    res.send("register page")
})

// User Registration Route
router.post("/register", async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        next(err);
    }
});

router.get("/", authMiddleware, async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

//update for username and category
router.post('/update', async (req, res, next) => {
    try {
        const { username, category } = req.body;

        // Get the user ID from the JWT token
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decoded.id;

        // Update the user's profile
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { username, category },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (err) {
        console.error("Error updating profile:", err);
        next(err);
    }
});

// Update user details
router.put("/", authMiddleware, async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        let user = await User.findById(req.user.id);

        if (!user) return res.status(404).json({ message: "User not found" });

        user.username = username;
        user.email = email;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();
        res.status(200).json({ message: "User updated" });
    } catch (err) {
        next(err);
    }
});

// Delete user account
router.delete("/", authMiddleware, async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.status(200).json({ message: "Account deleted" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
