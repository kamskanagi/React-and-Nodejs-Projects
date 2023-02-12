const router = require("express").Router()
const { verifyTokens, verifyTokenAndAuthorizatiion, verifyTokenAndAdmin } = require("../middleware/verifytoken")
const Product = require("../models/Product")



// create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    } catch (err) {
        res.status(500).json(err)
    }

})


// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.body.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})


// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        await Product.findByIdAndDelete(req.body.id)
        res.status(200).json("Product has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET product
router.delete("/find/:id", async (req, res) => {

    try {
        const product = await Product.findById(req.body.id)
        res.status(200).json(product)

    } catch (err) {
        res.status(500).json(err)
    }
})


// GET all products
router.get("/", async (req, res) => {
    const qNew = req.body.new
    const qCategory = req.body.category
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(1) : await User.find(req.body.id)
        // const { password, ...others } = user._doc
        res.status(200).json(users)

    } catch (err) {
        res.status(500).json(err)
    }
})


//Get user stats
// router.delete("/stats", verifyTokenAndAdmin, async (req, res) => {

//     const date = new Date()
//     const lastyear = new Date(date.setFullYear(data.getFullYear() - 1))

//     try {
//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastyear } } },
//             {
//                 $project: {
//                     month: { $month: "$createdAt" }
//                 }
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum }
//                 }
//             }
//         ])
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

module.exports = router