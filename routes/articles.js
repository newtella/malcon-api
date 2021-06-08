const express = require('express');

const router = express.Router(); 
const Article = require('../models/Article');

//Get all articles
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json({results: articles});
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

//Read an Article by ID
router.get('/article/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.json(article);
    } catch (error) {
        res.json({message: error.message});
    }
});

//Update an Article by ID
router.patch('/article/:id', async (req, res) => {
    const article = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        date: Date.now()
    };

    try {
        const updatedArticle = await Article.updateOne(
            { _id: req.params.id}, 
            { $set: article}
        );
        res.json(updatedArticle);
    } catch (error) {
        res.json(error.message);
    }
});

//Delete an article by ID
router.delete('/article/:id', async(req, res) => {
    try {
        const article = await Article.deleteOne({_id: req.params.id});
        res.json({message: "El articulo ha sido eliminado correctamente"});
    } catch (error) {
        res.json(error.message);
    }
});

module.exports = router;