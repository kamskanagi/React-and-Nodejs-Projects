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


// GET all users
router.delete("/getusers", verifyTokenAndAdmin, async (req, res) => {
    const query = req.body.new
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(1) : await User.find(req.body.id)
        // const { password, ...others } = user._doc
        res.status(200).json(users)

    } catch (err) {
        res.status(500).json(err)
    }
})


//Get user stats
router.delete("/stats", verifyTokenAndAdmin, async (req, res) => {

    const date = new Date()
    const lastyear = new Date(date.setFullYear(data.getFullYear() - 1))

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastyear } } },
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum }
                }
            }
        ])
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router