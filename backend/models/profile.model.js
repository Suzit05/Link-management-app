const mongoose = require("mongoose")
const Schema = mongoose.Schema


const profileSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    profileImage: { type: String, default: '' },  // Profile Picture
    bannerColor: { type: String, default: '#000000' },  // Banner Image
    profileTitle: { type: String, default: "" },
    bio: { type: String, default: '' },  // Short user bio
    links: { type: Array, default: [] }, // Ensure links is always an array
    Shop: { type: Array, default: [] }, // Ensure Shop is always an array
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema)
