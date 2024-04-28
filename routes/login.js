const express = require('express')
const User = require('../models/User');
const router = express.Router()
const adminAuth = require('../middlewares/adminAuth');
const userAuth = require('../middlewares/userAuth');


// ======= LOGIN ==========
// Admin 202, user correct 200, password incorrect 404, user no exist 500

router.post('/', async (req, res) => {

    let email = req.body.email
    let password = req.body.password

    if (adminAuth.isAdminLogins(email, password)) {
        res.status(202).send()
    }
    else {
        User.findOne({ email_address: email })
            .then((result) => {
                if (userAuth.decryptPassword(password, result.password)) {
                    res.status(200).send()
                }
                else {
                    res.status(404).send()
                }
            }).catch((err) => {
                res.status(500).send("No user")
            });
    }

})

module.exports = router