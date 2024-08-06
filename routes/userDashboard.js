const express = require('express')
const Post = require('../models/PostModel.js')
const User = require('../models/UserModel.js')
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