const mongoose = require('mongoose');

const AppearanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    layout: {
        type: { type: String, default: "stack" },
        className: { type: String, default: "stack" },
    },
    buttonStyles: {
        buttonColor: { type: String, default: "#000000" },
        fontColor: { type: String, default: "#FFFFFF" },
        className: { type: String, default: "rounded" },
    },
    fontStyles: {
        font: { type: String, default: "DM Sans" },
        color: { type: String, default: "#000000" },
    },
    themes: {
        selectedStyle: { type: String, default: "light" },
        styles: {
            type: Map,
            of: new mongoose.Schema({
                className: String,
                backgroundColor: String,
            }),
            default: {
                "air-snow": { className: "air-snow", backgroundColor: "#ffffff" },
                "air-grey": { className: "air-grey", backgroundColor: "#EBEEF1" },
                "air-smoke": { className: "air-smoke", backgroundColor: "#2A3235" },
                "air-black": { className: "air-black", backgroundColor: "black" },
                "mineral-blue": { className: "mineral-blue", backgroundColor: "#E0F6FF" },
                "mineral-green": { className: "mineral-green", backgroundColor: "#E0FAEE" },
                "mineral-orange": { className: "mineral-orange", backgroundColor: "#FFEAE2" },
                "mineral-yellow": { className: "mineral-yellow", backgroundColor: "#FFF8E0" },
            },
        },
        selectedThemeData: {
            className: { type: String, default: "light" },
            backgroundColor: { type: String, default: "#FFFFFF" },
        },
    },
});

module.exports = mongoose.model('Appearance', AppearanceSchema);