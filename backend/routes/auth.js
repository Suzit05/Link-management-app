
const express = require("express")
const router = express.Router()
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

router.post("/register", async (req, res, next) => { //for sign up
    try {
        const { firstName, lastName, email, password, username } = req.body
        const hashedPassword = bcrypt.hashSync(password, 10)

        const user = new userModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            username,
        })

        await user.save();
        res.json({ message: "User registered successfully" }).status(200)

    }
    catch (err) {
        next(err)
    }
})


router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password); //avi jo password dala usko stored hashed password se compare kr rha
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid Credentials" })
        }

        const payload = {
            id: user._id,
            email: user.email,
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY) //token ko sign kr rha
        res.json({ token, message: "Login successful" }).status(200) //token ko frontend pr bheja gya

    }
    catch (err) {
        next(err)
    }
})


module.exports = router;