const express = require('express')
const User = require('../models/User');
const router = express.Router()

// ======= LOGIN ==========
router.post('/', async (req, res) => {

    var email = req.body.email
    var password = req.body.password

    // Admin Login details
    // if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
    //     res.status(202).send()
    // }

    // Normal user
    // else {
    //     const user = User.findOne({ email_address: email })
    //     if (user) {

    //     }
    // }

})

module.exports = router