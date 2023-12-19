const mongoose = require('mongoose')
const Product = require('./models/product')

// Databse connection
mongoose.connect('mongodb://localhost:27017/shopee').then((result) => {
    console.log("Connection to database successfully");
}).catch((err) => {
    console.log(`Error connection to database ${err}`);
});


const seedProducts = [
   {
        'title': 'Baju Koko',
        'description': 'Baju muslim kekinian yang bagus',
        'price': 20000,
        'brand': 'Nakoya',
        'category': 'Baju'
    }, 
    {
        'title': 'Kaos',
        'description': 'Kaos muslim kekinian yang bagus',
        'price': 30000,
        'brand': 'Boyolo',
        'category': 'Baju'
        
    },
    {
        'title': 'Celana',
        'description': 'Celana muslim kekinian yang bagus',
        'price': 40000,
        'brand': 'BRUds',
        'category': 'Celana'
    },  
]

Product.insertMany(seedProducts).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);    
})
