const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const appearanceSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    theme: { type: String, default: 'light' },  // e.g., light, dark
    buttonStyle: {
        shape: { type: String, default: 'rounded' },  // Options: rounded, square
        color: { type: String, default: '#000000' },
    },
    layoutType: { type: String, default: 'default' },  // Default or custom layout
},
    { timestamps: true });




module.exports = mongoose.model("Appearance", appearanceSchema)