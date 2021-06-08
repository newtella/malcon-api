//Packages
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//enviroment config file
require('dotenv/config');

app.use(express.json());

//Import routes
const articleRoutes = require('./routes/articles');

//routes
app.use('/articles', articleRoutes );

//database connection
mongoose.connect(process.env.DB_CONNECTION, 
{  useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => console.log("Mongo is connected...")).catch(err => console.log({message: err}));

app.listen(3000);