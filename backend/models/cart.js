
import mongoose from 'mongoose';
const Cart = new mongoose.Schema({
    email:{
        type: String,
        trim: true,
        required: true
    },
    name:{
        type: String,
        require: true,
        trim: true
    },
    address:{
        type:String,
        require: true,
        trim: true
    },
    telephone:{
        type: String,
        require: true,
        maxLength: 13
    },
    product:{
        type: Array,
    },
    totalMoney:{
        type: Number,
        require: true,
        trim: true
    },
    shipping:{
        type: String,
        require: true
    },
    status:{
        type: Boolean,
        default: false
    }
},{timestamps: true})
module.exports = mongoose.model("Cart", Cart)