const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Baju', 'Celana', 'Topi', 'Aksesoris', 'Jaket']
    }
})

const Product = mongoose.model('Product', ProductSchema)


module.exports = Product

