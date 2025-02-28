const express = require("express")
const profileModel = require("../models/profile.model")
const authMiddleware = require("../middleware/auth")
const router = express.Router()
const User = require("../models/user.model");
const jwt = require("jsonwebtoken")

//get user detail
router.get('/me', async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded.id).select('-password'); // Exclude password
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
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
    const { profileImage, bannerImage, socialLinks } = req.body;
    const userId = req.user.id;

    try {
        let profile = await profileModel.findOne({ userId });
        if (profile) {
            profile.profileImage = profileImage;
            profile.bannerImage = bannerImage;
            profile.socialLinks = socialLinks;
        } else {
            profile = new profileModel({ userId, profileImage, bannerImage, socialLinks });
        }
        await profile.save();
        res.json(profile);
    } catch (err) {
        next(err);
    }
});

module.exports = router;