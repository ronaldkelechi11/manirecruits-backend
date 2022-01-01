const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({

    // PERSONAL INFORMATION
    firstname: {
        type: String,
        lowercase: true
    },
    lastname: {
        type: String,
        lowercase: true
    },
    username: {
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
    profile_picture: String,
    date_of_birth: String,

    // AUTHENTICATION AND VERIFICATION
    password: {
        type: String,
        required: true,
        min: 8,
        max: 64,
        immutable: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },

    // FOLLOWING AND FOLLOWERS
    followers: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User"
        }
    ],

    // MEDIA
    posts: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Jobs"
        }
    ],

    // CONTACT INFORMATION
    phone_number: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: {
            type: Number,
        },
    },

    // PROFESSIONAL INFORMATION
    work_experience: [String],
    education_background: [String],
    skills: [String],
    industry_job_preferences: [String],

    // ADDITIONAL DETAILS
    linkedin_profile: String,
    facebook_profile: String,
    instagram_profile: String,
    personal_website: String,

    // PREFERENCES
    preferred_job_locations: [String],
    desired_salary_range: {
        type: String,
        default: "30,000"
    },

    // USED FOR FEED
    notification_preferences: [String],

    // INTERESTS AND ACTIVITIES
    hobbies: [String],
    professional_associations: [String],
    volunteer_work: [String]
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
