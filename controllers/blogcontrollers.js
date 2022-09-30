//blog routes aint controlling stuff now
const BlogModel = require('../models/blog');

//blog_index, blog_details, blog_create_get , blog_create_post , blog_delete
const blog_index = (req,res) => {
    BlogModel.find().sort({createdAt: -1})// add additional method sort() and pass in createdAt with value as -1 (descending order)
    .then((result) => {
        res.render("index", {title: "all blogs", blogs: result});
    })
    .catch((err) => console.log(err));
}

const blog_details = (req,res) => {
    const id = req.params.id;
    BlogModel.findById(id)
    .then((result) => {
        res.render("details", {blog: result, title: "blog details"});
    })
    .catch((err) => res.render("404", {title: "not found"}));
}

const blog_create_get = (req, res) => {
    res.render("create", {title: "create-new-blog"});
}
const blog_create_post = (req,res) => {
    const blog = new BlogModel(req.body);
    blog.save()
    .then((result) => {
        res.redirect("/blogs")
    })
    .catch((err) => console.log(err));
}
const blog_delete = (req,res) => {
    const id = req.params.id;
    BlogModel.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: "/blogs"});
    })
    .catch((err) => console.log(err));
}
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}
