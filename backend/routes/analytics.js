const express = require('express');
const router = express.Router();
const Analytics = require('../models/analytics.model');


// Track Click API
router.post("/track-click", async (req, res) => {
    try {
        const { userId, linkId, itemType, itemTitle, userAgent } = req.body;
        const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress; // Get IP address

        if (!userId || !linkId || !itemType || !itemTitle || !userAgent || !ipAddress) {
            console.error("Missing required fields:", { userId, linkId, itemType, itemTitle, userAgent, ipAddress });
            return res.status(400).json({ message: "Missing required fields" });
        }

        console.log("Tracking click:", { userId, linkId, itemType, itemTitle, userAgent, ipAddress });

        await Analytics.create({
            userId,
            linkId,
            itemType,
            itemTitle,
            userAgent,
            ipAddress,
        });

        res.status(200).json({ message: "Click tracked successfully" });
    } catch (error) {
        console.error("Error tracking click:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// Retrieve analytics data
router.get('/get-analytics/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const analyticsData = await Analytics.find({ userId });
        res.status(200).json({ success: true, analytics: analyticsData });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
