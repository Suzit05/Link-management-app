const mongoose = require("mongoose")
const Schema = mongoose.Schema

const profileSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    profileImage: { type: String, default: '' },  // Profile Picture
    bannerImage: { type: String, default: '' },  // Banner Image
    bio: { type: String, default: '' },  // Short user bio
    socialLinks: [{ platform: String, url: String }],  // Instagram, Twitter, etc.
    links: [
        {
            title: String,
            url: String,
            clicks: { type: Number, default: 0 },
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema)
