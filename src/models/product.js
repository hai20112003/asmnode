import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: Boolean
    },
    quality: {
        type: Number
    },
})


export default mongoose.model('Product', productSchema);