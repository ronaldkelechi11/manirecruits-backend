const express = require('express')
const User = require('../models/User.js');
const router = express.Router()

// ======== SIGNUP STEP 1 (email and password) =========
router.post('/', async (req, res) => {

    let { email, password } = req.body

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


// ======= SIGNUP STEP 2 (firstname,lastname,date_of_birth)===========
router.post("/:email/2", async (req, res) => {

    var email = req.params.email

    var { firstname, lastname, date_of_birth } = req.body

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



//  ======= SIGNUP STEP 3 (address) ===========
router.post("/:email/3", async (req, res) => {

    var email = req.params.email

    // Create a new Date object
    const today = new Date();

    // Get the day, month, and year components from the Date object
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
    const year = today.getFullYear();

    // Concatenate the day, month, and year with '-' to form the date in dd-mm-yyyy format
    const formattedDate = `${day}-${month}-${year}`;

    var {
        phone_number,
        street,
        city,
        state,
        zipCode
    } = req.body

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
                phone_number: phone_number,
                date_account_created: formattedDate
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