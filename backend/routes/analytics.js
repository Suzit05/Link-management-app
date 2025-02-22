const express = require("express");
const analyticsModel = require("../models/analytics.model");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// Track a link click
router.post("/track", async (req, res, next) => {
    try {
        const { userId, linkTitle, linkId } = req.body;

        if (!userId || !linkTitle || !linkId) {
            return res.status(400).json({ message: "userId, linkTitle, and linkId are required" });
        }

        const analytics = new analyticsModel({
            userId,
            linkTitle,
            linkId,
            ip: req.ip
        });
        await analytics.save();

        res.status(200).json({ message: "Click tracked" });
    } catch (err) {
        next(err);
    }
});

// Get analytics data for user
router.get("/", authMiddleware, async (req, res, next) => {
    try {
        const analytics = await analyticsModel.aggregate([
            { $match: { userId: req.user.id } },
            { $group: { _id: "$linkTitle", count: { $sum: 1 } } }
        ]);
        res.status(200).json(analytics);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
