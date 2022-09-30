const express = require('express');
const router = express.Router();
const blogcontrollers = require('../controllers/blogcontrollers');

router.get("/create", blogcontrollers.blog_create_get);
router.get("/", blogcontrollers.blog_index );
router.get("/:id", blogcontrollers.blog_details);

//post requests
router.post("/", blogcontrollers.blog_create_post);

//delete request handler
router.delete("/:id", blogcontrollers.blog_delete);

//export the router
module.exports = router;