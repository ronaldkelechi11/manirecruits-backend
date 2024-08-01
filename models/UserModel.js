const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        lowercase: true
    },
    lastname: {
        type: String,
        lowercase: true
    },
    email_address: {
        type: String,
        lowercase: true,
        min: 3,
        max: 64,
        required: true
    },
    title: {
        type: String,
        default: 'None'
    },
    profile_picture: String,
    date_of_birth: String,
    date_account_created: String,
    religeon: String,
    state_of_origin: String,
    password: {
        type: String,
        required: true,
        immutable: true
    },
    role: {
        type: String,
        enum: ['user', 'client', 'admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    posts: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Jobs"
        }
    ],
    phone_number: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String
    },
    work_experience: [String],
    education_background: [String],
    skills: String,
    industry_job_preferences: [String],
    preferred_job_locations: [String],
    desired_salary_range: {
        min: {
            type: String,
            default: "NGN 30,000"
        },
        max: {
            type: String,
            default: "NGN 50,000"
        }
    },
    hobbies: {
        type: [{ type: String }]
    },
    professional_associations: {
        type: [{ type: String }]
    },
    volunteer_work: {
        type: [{ type: String }]
    }
})



// ======== PASSWORD HASHING SYSTEM ===============
userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt)
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
    next();
})


module.exports = mongoose.model("User", userSchema)
