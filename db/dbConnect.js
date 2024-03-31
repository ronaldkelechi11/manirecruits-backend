const mongoose = require('mongoose');


const connectDB = async () => {
    const db_url = "" || process.env.MONG0_STRING;

    try {
        await mongoose.connect(db_url);
        return console.log('database connected successfully ✔✔✔');
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB;
