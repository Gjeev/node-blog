//import express,mongoose, third party middleware and also the blog model
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const BlogModel = require("./models/blog");
const { result } = require('lodash');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogroutes');

// call the top level function
const app = express();

//connect to mongodb
const username = "";
const pwd = "";
const dbURI = `mongodb+srv://${username}:${pwd}@cluster0.mzutltd.mongodb.net/blog-post?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(3000))
    .catch((err) => console.log(err));

//set the view engine to look for ejs files
app.set('view engine', 'ejs');

//(we use app.use() for middleware functions)
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//now instead of sending the result, how about we add them to our views

//render views
app.get('/', (req, res) =>
{
    res.redirect("/blogs");
});
//rendering views with path /blogs/...
app.use("/blogs", blogRoutes);

//if page not found
app.use((req, res) => {
    res.render("404");
})
