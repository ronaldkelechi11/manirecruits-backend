const express = require('express')
const User = require('../models/User');
const router = express.Router()

// ======== SIGNUP STEP 1 (email and password) =========
router.post('/', async (req, res) => {

    let email = req.body.email
    let password = req.body.password

    var user = new User({
        email_address: email,
        password: password
    });

    await user.save().then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
})


// ======= SIGNUP STEP 2 (username,firstname,lastname,date_of_birth)===========
router.post("/:email/2", async (req, res) => {

    var email = req.params.email
    var username = req.body.username
    var lastname = req.body.lastname
    var firstname = req.body.firstname

    const user = await User.findOne({ email_address: email })
        .then((result) => {
            console.log(user);
            res.status(200).send(result)
        }).catch((err) => {
            res.status(505).send(err);
        });
})


//  ======= SIGNUP STEP 3 (phone_number,address)===========
router.post("/:email/3", async (req, res) => {

    var email = req.param.email
    var phone_number = req.body.phone_number

    var street = req.body.street
    var city = req.body.city
    var state = req.body.state
    var zipCode = req.body.zipCode

})

module.exports = router