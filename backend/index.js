const express = require('express')
const app = express()
const cors = require('cors'); // Import the cors package
const dotenv = require("dotenv")
dotenv.config();
// Enable CORS for all routes
app.use(cors());

app.use(express.json()); // ✅ Enables JSON body parsing
app.use(express.urlencoded({ extended: true })); // ✅ Enables form data parsing

const mongoose = require("mongoose")

const errorHandler = require("./middleware/errorHandler")
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const profileRoutes = require("./routes/profile")
const linkRoutes = require("./routes/link")
const analyticsRoutes = require("./routes/analytics")
const appearanceRoutes = require("./routes/appearance")
const port = process.env.port || 3000;

app.use(errorHandler)
app.use("/api/auth", authRoutes)  //register and login - auth
app.use("/api/user", userRoutes)
app.use("/api/profile", profileRoutes)
app.use("/api/link", linkRoutes)
app.use("/api/analytics", analyticsRoutes)
app.use("/api/appearance", appearanceRoutes)



app.get("/", async (req, res, next) => {
    try {

        res.send("Hello to link tree demo brooo")
    }
    catch (err) {
        next(err)
    }
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected ✅");
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port} ⚡`);
        });
    })
    .catch(err => {
        console.error("MongoDB connection error ❌:", err);
        process.exit(1); // Stop the server if DB connection fails
    });