const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config();
const mongoose = require("mongoose")
const errorHandler = require("./middleware/errorHandler")
const userRoutes = require("./routes/user")
const port = process.env.port || 3000;

app.use(errorHandler)
app.use("/api/user", userRoutes)



app.get("/", async (req, res, next) => {
    try {

        res.send("Hello to link tree demo brooo")
    }
    catch (err) {
        next(err)
    }
})

app.listen(port, () => {
    console.log(`listening on ${port}⚡`)
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("mongodb connected")
    }).catch((err) => {
        console.log(err)
    })
})