const express = require('express')
const Post = require('../models/PostModel.js')
const User = require('../models/UserModel.js')
const { myError } = require('../middlewares/errorHandler.js')
const router = express.Router()


// Get all user details
router.get('/settings/:email', async (req, res) => {
    const { email } = req.params

    await User.find({ email_address: email })
        .then((result) => {

            // User not found
            if (result == '') {
                res.status(404).send('Resource not found')
            }


            // User Found
            else {
                result[0].password = '';
                res.status(200).send(result);
            }

        }).catch((err) => {
            console.log(err);
            res.status(500).send()
        });
})

// search for a post
router.get('/search/:_id', async (req, res) => {
    var { _id } = req.params

    await Post.findOne({ _id: _id })
        .then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            res.status(500).send()
        });
})

// Fetch 20 posts at a time
router.get('/home', async (req, res) => {

    await Post.find({})
        .then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            myError('Error from UserDashbooard', err);
            res.status(500).send()
        });
})

// Apply for a post
router.put('/apply/:_id', async (req, res) => {
    // Post Id
    let post_id = req.params._id

    // User Email
    let { userEmail } = req.body
    let userId = ""

    // Search for email then return User ID then add to applications on Post
    const user = await User.findOne({ email_address: userEmail })
    try {
        // User found
        if (user) {
            console.log(user?._id);
            userId = user._id


            Post.findOneAndUpdate({ _id: post_id }, { $push: { applications: userId.toString() } })

                // Succesfully Applied for the post
                .then((result) => {
                    res.status(200).send()
                })

                // Error Applying for Post
                .catch((err) => {
                    myError("Error in Application of a post", err)
                    res.status(500).send()
                });
        }

        // User not Found
        else {
            res.status(500).send("No user")
        }
    } catch (error) {
        res.status(500).send()
    }


})


module.exports = router