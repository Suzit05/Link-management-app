const express = require("express");
const appearanceModel = require("../models/appearance.model");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// Get appearance settings
router.put('/', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const updatedAppearance = req.body;

        // Find and update the appearance data
        let appearance = await appearanceModel.findOne({ userId });

        if (!appearance) {
            appearance = new appearanceModel({ userId, ...updatedAppearance });
        } else {
            appearance.set(updatedAppearance);
        }

        await appearance.save();
        res.status(200).json(appearance);
    } catch (error) {
        console.error("Error saving appearance data:", error);
        res.status(500).json({ message: "Server error" });
    }
});




module.exports = router;
