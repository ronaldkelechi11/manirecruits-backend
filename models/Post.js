const mongoose = require('mongoose');


var postSchema = new mongoose.Schema({
    title: String,
    body: String,


    // Convert actual likes display to amount of likes and likes show everyone that liked
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("Post", postSchema)
