const express = require("express")
const profileModel = require("../models/profile.model")
const authMiddleware = require("../middleware/auth")
const router = express.Router()

// Get all links from profile
router.get("/", authMiddleware, async (req, res, next) => {
    try {
        const profile = await profileModel.findOne({ userId: req.user.id });
        if (!profile) return res.status(404).json({ message: "Profile not found" });

        res.status(200).json(profile.links || []);
    } catch (err) {
        next(err);
    }
});

// Add a new link to profile
router.post("/", authMiddleware, async (req, res, next) => {
    try {
        const { title, url } = req.body;
        const profile = await profileModel.findOne({ userId: req.user.id });
        if (!profile) return res.status(404).json({ message: "Profile not found" });

        profile.links.push({ title, url });
        await profile.save();

        res.status(201).json(profile.links);
    } catch (err) {
        next(err);
    }
});

// Update a specific link
router.put("/:index", authMiddleware, async (req, res, next) => {
    try {
        const { title, url } = req.body;
        const profile = await profileModel.findOne({ userId: req.user.id });
        if (!profile) return res.status(404).json({ message: "Profile not found" });

        if (!profile.links[req.params.index]) return res.status(404).json({ message: "Link not found" });

        profile.links[req.params.index] = { title, url };
        await profile.save();

        res.status(200).json(profile.links);
    } catch (err) {
        next(err);
    }
});

// Delete a link from profile
router.delete("/:index", authMiddleware, async (req, res, next) => {
    try {
        const profile = await profileModel.findOne({ userId: req.user.id });
        if (!profile) return res.status(404).json({ message: "Profile not found" });

        if (!profile.links[req.params.index]) return res.status(404).json({ message: "Link not found" });

        profile.links.splice(req.params.index, 1);
        await profile.save();

        res.status(200).json({ message: "Link deleted", links: profile.links });
    } catch (err) {
        next(err);
    }
});

module.exports = router;