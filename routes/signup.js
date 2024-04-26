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
        res.status(200).send()
    }).catch((err) => {
        res.status(500).send(err)
    });
})


// ======= SIGNUP STEP 2 (username,firstname,lastname,date_of_birth)===========
router.post("/:email/2", async (req, res) => {

    var email = req.params.email
    var lastname = req.body.lastname
    var firstname = req.body.firstname
    var date_of_birth = req.body.date_of_birth

    const user = await User.findOne({ email_address: email })
    if (user) {
        user.updateOne(
            {
                firstname: firstname,
                lastname: lastname,
                date_of_birth: date_of_birth
            }).then((result) => {
                res.status(200).send()
            }).catch((err) => {
                res.status(404).send()
            });
    }
    else {
        res.status(500).send("No user")
    }
})


//  ======= SIGNUP STEP 3 (phone_number,address) ===========
router.post("/:email/3", async (req, res) => {

    var email = req.params.email
    var phone_number = req.body.phone_number

    var street = req.body.street
    var city = req.body.city
    var state = req.body.state
    var zipCode = req.body.zipCode
    var address = {
        street: street,
        city: city,
        state: state,
        zipCode: zipCode
    }

    const user = await User.findOne({ email_address: email })
    if (user) {
        user.updateOne(
            {
                address: address,
                phone_number: phone_number
            }).then((result) => {
                res.status(200).send()
            }).catch((err) => {
                res.status(404).send()
            });
    }
    else {
        res.status(500).send("No user")
    }
})

module.exports = router