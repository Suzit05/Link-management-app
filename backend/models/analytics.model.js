const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    linkId: { type: String, required: true },
    itemType: { type: String, required: true },
    itemTitle: { type: String, required: true },
    userAgent: { type: String, required: true },
    ipAddress: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Analytics", analyticsSchema);
