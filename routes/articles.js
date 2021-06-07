const express = require('express');

const router = express.Router(); 

router.get('/', (req, res) => {
    res.json({id: 1, title: "Cool v neck tee", 
    description: "Cool light blue vneck tee for use everywhere you",
    image: "https://cdn.shopify.com/s/files/1/0312/6537/products/N3200_Lt-Blue_F_1024x1024.jpg?v=1571269062"})
});

module.exports = router;