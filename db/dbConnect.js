const mongoose = require('mongoose');


const connectDB = async (db_url) => {

    try {
        await mongoose.connect(db_url);
        return console.log('database connected successfully ✔✔✔');
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB;
