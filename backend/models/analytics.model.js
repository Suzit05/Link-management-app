const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const analyticSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    linkTitle: { type: String, required: true },
    linkId: { type: mongoose.Schema.Types.ObjectId, ref: "Link", required: true },
    uniqueViews: { type: Number, default: 0 },
    totalClicks: { type: Number, default: 0 },
    deviceType: {
        mobile: { type: Number, default: 0 },
        desktop: { type: Number, default: 0 },
        tablet: { type: Number, default: 0 },
    },
    location: {
        country: String,
        city: String,
    },
    referrer: String,  // Tracks referrer source like social media, direct
}, { timestamps: true });




module.exports = mongoose.model("Analytics", analyticSchema)