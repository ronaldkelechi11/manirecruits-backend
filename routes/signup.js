const express = require('express')
const User = require('../models/User');
const router = express.Router()

// ======== SIGNUP =========
router.post('/', async (req, res) => {

    let email = req.body.email
    let password = req.body.password

    res.status(200).send(`${email} ${password}`);
})

module.exports = router