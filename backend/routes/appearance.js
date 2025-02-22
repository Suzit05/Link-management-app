const express = require("express");
const appearanceModel = require("../models/appearance.model");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// Get appearance settings
router.get("/", authMiddleware, async (req, res, next) => {
    try {
        const appearance = await appearanceModel.findOne({ userId: req.user.id });
        res.status(200).json(appearance || {});
    } catch (err) {
        next(err);
    }
});

// Update appearance settings
router.post("/", authMiddleware, async (req, res, next) => {
    try {
        const { theme, buttonStyle, layout } = req.body;
        let appearance = await appearanceModel.findOne({ userId: req.user.id });

        if (appearance) {
            appearance.theme = theme;
            appearance.buttonStyle = buttonStyle;
            appearance.layout = layout;
        } else {
            appearance = new appearanceModel({ userId: req.user.id, theme, buttonStyle, layout });
        }

        await appearance.save();
        res.status(200).json(appearance);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
