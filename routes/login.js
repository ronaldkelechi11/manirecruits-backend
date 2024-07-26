const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const adminAuth = require('../middlewares/adminAuth.js');
const userAuth = require('../middlewares/userAuth.js');


// ======= LOGIN ==========
// Admin 202, user correct 200, password incorrect 404, user no exist 500
router.post('/', async (req, res) => {

    let { email, password } = req.body

    if (adminAuth.isAdminLogins(email, password)) {
        res.status(202).send()
    }
    else {
        await User.findOne({ email_address: email })
            .then((result) => {
                userAuth.decryptPassword(password, result.password)
                    .then((result) => {
                        // Correct password
                        if (result) {
                            res.status(200).send()
                        }
                        // Incorrect password
                        else {
                            res.status(204).send()
                        }
                    }).catch((err) => {
                        console.log(err);
                    });

            }).catch((err) => {
                res.status(500).send("No Such User")
            });
    }

})

module.exports = router