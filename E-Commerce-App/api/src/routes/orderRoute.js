const router = require("express").Router()
const { verifyToken, verifyTokenAndAuthorizatiion, verifyTokenAndAdmin } = require("../middleware/verifytoken")
const Order = require("../models/Order")



// create
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Product(req.body)

    try {
        const saveOrder = await newOrder.save()
        res.status(200).json(saveOrder)
    } catch (err) {
        res.status(500).json(err)
    }

})


// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedOrder = await Cart.findByIdAndUpdate(req.body.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})


// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        await Order.findByIdAndDelete(req.body.id)
        res.status(200).json("Product has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET product
router.get("/find/:userId", verifyTokenAndAuthorizatiion, async (req, res) => {

    try {
        const order = await Order.find({ userId: req.params.userId })
        res.status(200).json(order)

    } catch (err) {
        res.status(500).json(err)
    }
})


// GET all products
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
        const orders = await Order.find()
        res.status(200).json(orders)

    } catch (err) {
        res.status(500).json(err)
    }
})


//Get monthly income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {

    const date = new Date()
    const lastmonth = new Date(date.setMonth(data.getMonth() - 1))
    const previousmonth = new Date(date.setMonth(lastmonth.getMonth() - 1))

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousmonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "amount",
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "sales" }
                }
            }
        ])
        res.send(income)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router