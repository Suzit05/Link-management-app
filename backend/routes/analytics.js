const express = require("express");
const router = express.Router();
const Analytics = require("../models/analytics.model");

// Track a click
router.post("/track-click", async (req, res) => {
    try {
        const { userId, type, itemId } = req.body;

        let analytics = await Analytics.findOne({ userId, type, itemId });

        if (!analytics) {
            analytics = new Analytics({ userId, type, itemId, count: 1 });
        } else {
            analytics.count += 1;
        }

        await analytics.save();
        res.status(200).json({ success: true, message: "Click tracked successfully" });
    } catch (error) {
        console.error("Error tracking click:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
});

// Get analytics data for a user
router.get("/get-analytics/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const analyticsData = await Analytics.find({ userId });

        res.status(200).json({ success: true, analytics: analyticsData });
    } catch (error) {
        console.error("Error fetching analytics:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
