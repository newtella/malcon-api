const express = require('express');

const router = express.Router(); 
const Article = require('../models/Article');

//Get all articles
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.json({message: error});
    }
});

//Create an article 
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });

    try {
        const submitedArticle = await article.save();
        res.json(submitedArticle);    
    } catch (error) {
        res.json({message: error});
    }
});

router.get('/article/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.json(article);
    } catch (error) {
        res.json({message: error.message});
    }
});

module.exports = router;