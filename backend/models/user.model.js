const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },  // User's first name
    lastName: { type: String },   // User's last name
    email: { type: String, required: true, unique: true }, // User's email
    username: { type: String, unique: true, sparse: true }, // User's username (optional, unique)
    password: { type: String, required: true }, // User's password
    category: { type: String }, // User's selected category
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);