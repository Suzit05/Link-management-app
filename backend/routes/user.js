const express = require("express");
const User = require("../models/user.model");
const authMiddleware = require("../middleware/auth");
const bcrypt = require("bcrypt");
const router = express.Router();


router.get("/", authMiddleware, async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (err) {
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
