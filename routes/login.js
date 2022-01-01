const express = require('express')
const User = require('../models/User');
const router = express.Router()

// ======= LOGIN ==========
router.post('/', async (req, res) => {

    var email = req.body.email
    var password = req.body.password

    res.status(200).send("Logged in")
})

module.exports = router