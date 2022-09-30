//should be placed in models folder
//import mongoose
const mongoose = require('mongoose');

//Schema is a constructor function of the object schema of the mongoose object
const Schema = mongoose.Schema;

//create an instance of the schema object
const blogSchema = new Schema({
    title: 
    {
        type: String,
        required: true
    },
    snippet: 
    {
        type: String,
        required: true
    }
    , body: {
        type: String,
        required: true
    }
}, {timestamps: true});

//create a model
//provides an interface to communicate with the db
//wrpas aorund schema
//usually capital letter, and the name we give tot he model is important becuase it will search for the plural version of what we type in 
const BlogModel = mongoose.model("blog", blogSchema);

//we gotta export the model so that we can use it in app3
module.exports = BlogModel;
