const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appearanceSchema = new Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
        layout: {
            type: { type: String, default: "stack" }, // Options: stack, grid, carousel
            className: { type: String, default: "stack" }, // Class name for layout
        },
        buttonStyles: {

            buttonColor: { type: String, default: "#000000" }, // Button background color
            fontColor: { type: String, default: "#FFFFFF" }, // Button font color
            className: { type: String, default: "rounded" }, // Class name for button style
        },
        fontStyles: {
            font: { type: String, default: "DM Sans" }, // Font family
            color: { type: String, default: "#000000" }, // Font color

        },
        themes: {
            name: { type: String, default: "light" }, // Theme name
            backgroundColor: { type: String, default: "#FFFFFF" }, // Background color
            className: { type: String, default: "light" }, // Class name for theme
            insideColor: { type: String, default: "#FFFFFF" }, // inside link/shop title color
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Appearance", appearanceSchema);