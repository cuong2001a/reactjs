import mongoose from 'mongoose';
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    images: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model("Category", categorySchema);

// export default mongoose.model('Category', categorySchema)