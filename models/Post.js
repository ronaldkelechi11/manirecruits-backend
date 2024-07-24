const mongoose = require('mongoose');


var postSchema = new mongoose.Schema({
    title: String,
    summary: String,
    minimumQualification: String,
    experienceLevel: String,
    experienceLength: String,
    skills: String,
    applications: String,
    location: String,
    organisationLogo: String,
    organisationName: String,
    organisationIndustry: String,
    jobIndustry: String,
    jobUploadDate: String,
    salaryRange: String,
    prefferedGender: String,
    plusCommision: String,
    workingDays: [String]
})

module.exports = mongoose.model("Post", postSchema)
