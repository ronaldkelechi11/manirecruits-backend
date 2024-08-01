const express = require('express')
const Post = require('../models/PostModel.js')
const User = require('../models/UserModel.js')
const router = express.Router()


// Get user details
router.get('/settings/:email', async (req, res) => {
    const { email } = req.params

    await User.find({ email_address: email })
        .then((result) => {
            result.password = ""
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
            res.status(500).send()
        });
})


module.exports = router