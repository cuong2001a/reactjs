import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32
    },
    images: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: false
    },
    quantity: {
        type: Number,
        default:1
    }
    // sold:{
    //     type: Number,
    //     default: 0
    // }
}, { timestamps: true })
module.exports = mongoose.model("Product", productSchema)