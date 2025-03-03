const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    type: { type: String, enum: ["link", "shop", "cta"], required: true },
    itemId: { type: String, required: true }, // Unique ID of link/shop/cta
    count: { type: Number, default: 0 }
}, { timestamps: true });

const Analytics = mongoose.model("Analytics", analyticsSchema);
module.exports = Analytics;
