const express = require('express')
const Post = require('../models/Post')
const router = express.Router()



// Add New Post
router.post('/addpost', async (req, res) => {
    var { post } = req.body

    var newPost = new Post(post);

    newPost.save().then((result) => {
        // Succesful Upload
        res.status(200).send()
    }).catch((err) => {
        // Internal Server Error
        res.status(500).send()
    });
})

module.exports = router