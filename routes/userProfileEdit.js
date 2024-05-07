const express = require('express')
const User = require('../models/User');
const router = express.Router()

// Change user Role to either User or Recruiter
router.post("/role/:email", async (req, res) => {
    let email = req.params.email
    let { newRole } = req.body

    const user = await User.findOne({ email_address: email })
    try {
        if (user) {
            user.updateOne({ role: newRole })
                .then((result) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(404).send()
                });
        }
        else {
            res.status(500).send("No user")
        }
    } catch (error) {
        console.log(error);
    }
})

// links

// Add skills
router.post("/skills/:email", async (req, res) => {
    let email = req.params.email
    let skills = req.body.skills

    const user = await User.findOne({ email_address: email })
    try {
        if (user) {
            user.updateOne({ skills: skills })
                .then((result) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(404).send()
                });
        }
        else {
            res.status(500).send("No user")
        }
    } catch (error) {
        console.log(error);
    }
})


// Add salary min and max
router.post("/salary/:email", async (req, res) => {
    let email = req.params.email
    let { min, max } = req.body

    const user = await User.findOne({ email_address: email })
    try {
        if (user) {
            user.updateOne(
                {
                    // TODO: COMPLETE
                }
            )
                .then((result) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(404).send()
                });
        }
        else {
            res.status(500).send("No user")
        }
    } catch (error) {
        console.log(error);
    }
})

// Set Preffered Job Locations

// Hobbies
router.post("/hobbies/:email", async (req, res) => {
    let email = req.params.email
    let { hobbies } = req.body

    const user = await User.findOne({ email_address: email })
    try {
        if (user) {
            user.updateOne({ hobbies: hobbies })
                .then((result) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(404).send()
                });
        }
        else {
            res.status(500).send("No user")
        }
    } catch (error) {
        console.log(error);
    }
})

// volunteer work
router.post("/volunteer/:email", async (req, res) => {
    let email = req.params.email
    let { volunteer } = req.body

    const user = await User.findOne({ email_address: email })
    try {
        if (user) {
            user.updateOne({ volunteer_work: volunteer })
                .then((result) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(404).send()
                });
        }
        else {
            res.status(500).send("No user")
        }
    } catch (error) {
        console.log(error);
    }
})

// Proffessional Associations
router.post("/associations/:email", async (req, res) => {
    let email = req.params.email
    let { associations } = req.body

    const user = await User.findOne({ email_address: email })
    try {
        if (user) {
            user.updateOne({ professional_associations: associations })
                .then((result) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(404).send()
                });
        }
        else {
            res.status(500).send("No user")
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
