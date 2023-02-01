const mongoose = require("mongoose")

const orderSchema =  new mongoose.Schema(
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
        ],
        amount:{type: Number, required:true},
        address:{ type: Object, reuired: true},
        status:{ type: String, default:"pending"}
    },  
    {timestamps:true}
)

module.exports =  mongoose.model('Order', orderSchema)