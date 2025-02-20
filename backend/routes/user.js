const express = require("express")
const router = express.Router()


router.get("/", (req, res, next) => {  // /api/user
    try {
        res.send("hello route")
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;