const router = require("express").Router()
const { verifyTokens, verifyTokenAndAuthorizatiion, verifyTokenAndAdmin } = require("../middleware/verifytoken")
const User = require("../models/User")


router.get("/userget")

router.post("/userpost")


// UPDATE
router.put("/:id", verifyTokenAndAuthorizatiion, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET).toString(CryptoJS.enc.Utf8)
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.body.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})


// DELETE
router.delete("/:id", verifyTokenAndAuthorizatiion, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.body.id)
        res.status(200).json("user has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET
router.delete("/find/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const user = await User.findById(req.body.id)
        const { password, ...others } = user._doc
        res.status(200).json(others)

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router