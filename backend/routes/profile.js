const express = require("express")
const profileModel = require("../models/profile.model")
const authMiddleware = require("../middleware/auth")
const router = express.Router()
const User = require("../models/user.model");
const jwt = require("jsonwebtoken")

router.get('/me', async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Fetch user data
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Fetch profile data
        const profile = await profileModel.findOne({ userId: decoded.id });
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        // Combine user and profile data
        const response = {
            ...user.toObject(), // Convert Mongoose document to plain object
            profileImage: profile.profileImage,
            profileTitle: profile.profileTitle,
            bio: profile.bio,
            bannerColor: profile.bannerColor,
            links: profile.links || [],
            Shop: profile.Shop || [],
        };

        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});



// GET /api/profile/:userId - Fetch user profile
router.get("/:userId", authMiddleware, async (req, res, next) => {
    try {
        const profile = await profileModel.findOne({ userId: req.params.userId });
        if (!profile) return res.status(404).json({ message: "Profile not found" });
        res.json(profile);
    } catch (err) {
        next(err);
    }
});


// PUT /api/profile - Create or update user profile
router.put("/", authMiddleware, async (req, res, next) => {
    const { profileImage, profileTitle, bio, bannerColor, links = [], Shop = [] } = req.body;
    const userId = req.user.id; // Get user ID from the authenticated request

    try {
        // Find or create the profile
        let profile = await profileModel.findOne({ userId });
        if (profile) {
            // Update existing profile
            profile.profileImage = profileImage || profile.profileImage;
            profile.profileTitle = profileTitle || profile.profileTitle;
            profile.bio = bio || profile.bio;
            profile.bannerColor = bannerColor || profile.bannerColor;
            profile.links = links; // Always use the provided links (default to empty array)
            profile.Shop = Shop; // Always use the provided Shop (default to empty array)
        } else {
            // Create new profile
            profile = new profileModel({
                userId,
                profileImage,
                profileTitle,
                bio,
                bannerColor,
                links,
                Shop,
            });
        }

        // Save the profile
        await profile.save();

        res.status(200).json({ message: "Profile updated successfully", profile });
    } catch (err) {
        console.error("Error updating profile:", err);
        next(err);
    }
});

module.exports = router;