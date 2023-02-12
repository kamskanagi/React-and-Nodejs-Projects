const router = require("express").Router()
const { verifyToken, verifyTokenAndAuthorizatiion, verifyTokenAndAdmin } = require("../middleware/verifytoken")
const Cart = require("../models/Cart")



// create
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Product(req.body)

    try {
        const saveCart = await newCart.save()
        res.status(200).json(saveCart)
    } catch (err) {
        res.status(500).json(err)
    }

})


// UPDATE
router.put("/:id", verifyTokenAndAuthorizatiion, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.body.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})


// DELETE
router.delete("/:id", verifyTokenAndAuthorizatiion, async (req, res) => {

    try {
        await Cart.findByIdAndDelete(req.body.id)
        res.status(200).json("Product has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET product
router.get("/find/:userId", verifyTokenAndAuthorizatiion, async (req, res) => {

    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
        res.status(200).json(cart)

    } catch (err) {
        res.status(500).json(err)
    }
})


// GET all products
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
        const carts = await Cart.find()
        res.status(200).json(carts)

    } catch (err) {
        res.status(500).json(err)
    }
})


// //Get user stats
// // router.delete("/stats", verifyTokenAndAdmin, async (req, res) => {

// //     const date = new Date()
// //     const lastyear = new Date(date.setFullYear(data.getFullYear() - 1))

// //     try {
// //         const data = await User.aggregate([
// //             { $match: { createdAt: { $gte: lastyear } } },
// //             {
// //                 $project: {
// //                     month: { $month: "$createdAt" }
// //                 }
// //             },
// //             {
// //                 $group: {
// //                     _id: "$month",
// //                     total: { $sum }
// //                 }
// //             }
// //         ])
// //     } catch (err) {
// //         res.status(500).json(err)
// //     }
// // })

module.exports = router