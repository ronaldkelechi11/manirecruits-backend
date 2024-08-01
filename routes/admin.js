const express = require('express')
const Post = require('../models/PostModel.js')
const User = require('../models/UserModel.js')
const router = express.Router()

// Return data for adminMain {userCount, postCount, activeClients}
router.get('/main', async (req, res) => {
    var data = {
        userCount: 0,
        postCount: 0,
        activeClients: 0
    }

    // Get User Count
    await User.find()
        .then((result) => {
            data.userCount = result.length
            result.forEach(users => {
                if (users.role == 'client') {
                    data.activeClients++
                }
            })
        }).catch((err) => {
            console.log("Can't get User count Lenght");
        });

    // Get Post Count
    await Post.find()
        .then((result) => {
            data.postCount = result.length
        }).catch((err) => {
            console.log("Can't get Post count Lenght");
        });

    // Return the data to API
    res.status(200).send(data)
})


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

// Delete a post
router.post('/deletepost', async (req, res) => {
    var { post_id } = req.body

    var postToDelete = await Post.findById({ _id: post_id })

    postToDelete.deleteOne()
        .then((result) => {

        }).catch((err) => {

        });
})

module.exports = router