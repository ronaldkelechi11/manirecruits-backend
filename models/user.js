const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    personal_information: {
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
        date_of_birth: String
    },

    authentication: {
        password: {
            type: String,
            required: true,
            min: 8,
            max: 64,
            immutable: true
        }
    },

    posts: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Jobs"
        }
    ],

    contact_information: {
        phone_number: String,
        address: {
            street: String,
            city: String,
            state: String,
            zipCode: Number,
        }
    },

    professional_information: {
        work_experience: [],
        education_background: [],
        skills: [],
        industry_job_preferences: []
    },

    additional_details: {
        linkedin_profile: String,
        facebook_profile: String,
        instagram_profile: String,
        personal_website: String
    },

    preferences: {
        preferred_job_locations: [],
        desired_salary_range: String,
        notification_preferences: []
    },

    interests_and_activities: {
        hobbies: [String],
        professional_associations: [String],
        volunteer_work: [String]
    }
})



// ======== PASSWORD HASHING SYSTEM ===============
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})


module.exports = mongoose.model("User", userSchema)
