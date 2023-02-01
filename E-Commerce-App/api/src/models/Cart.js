const mongoose = require("mongoose")

const cartSchema =  new mongoose.Schema(
    {
        userId:{type: String, unique: true},
        product:[
            {
                productId:{
                    type: String,
                },
                quantity:{
                    type: Number,
                    default:1,
                }
            }
        ]
    },
    {timestamps:true}
)

module.exports =  mongoose.model('Cart', cartSchema)