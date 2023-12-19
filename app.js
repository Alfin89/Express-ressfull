require('dotenv').config()
const  path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const app = express()
const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL


// Impor Model
const Product = require('./models/product')

// Databse connection
mongoose.connect(DB_URL,).then((result) => {
    console.log("Connection to database successfully");
}).catch((err) => {
    console.log(`Error connection to database ${err}`);
});

// tempalate Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Url Encode
app.use(express.urlencoded({ extended: true }))

// Method Overaid
app.use(methodOverride('_method'))
// API
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
            
// Url
app.get('/', async (req, res) => {
    const products = await Product.find({})
    res.render('index', {products})
})

app.get('/product/create', async (req, res) => {
    res.render('create')
})

app.post('/', async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.redirect(`/product/${product.id}`)
})

app.get('/product/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('view', {product})
})

app.get('/product/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('edit', {product})
})

app.put('/product/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true })
    res.redirect(`/product/${product.id}`)
})

app.listen(PORT, () => {
    console.log(`Server is running http://127.0.0.1:${PORT}`);
})