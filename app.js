//Packages
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//enviroment config file
require('dotenv/config');

//Import routes
const articleRoutes = require('./routes/articles');

//routes
app.use('/articles', articleRoutes );


app.listen(3000);