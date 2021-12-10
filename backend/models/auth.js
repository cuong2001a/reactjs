import mongoose from "mongoose";
import crypto from 'crypto';
const {ObjectId} = mongoose.Schema
import { v4 as uuidv4 } from 'uuid'
const User = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: false
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }
}, { timestamps: true })

// vitual field
User.virtual("password") // tao ra 1 virtual ao
    .set(function (password) {
        console.log(password);
        this.salt = uuidv4()
        this.hashed_password = this.encrytPassword(password);
    })
User.methods = {
    authenticate: function (plainText) {
        return this.encrytPassword(plainText) === this.hashed_password;
    },
    encrytPassword: function (password) {
        console.log('password', password)
        if (!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (error) {
            return '';
        }

    }

}
module.exports = mongoose.model("User", User)