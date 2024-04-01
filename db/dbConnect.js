const mongoose = require('mongoose');

// Pass the value of the dburl
const connectDB = async (db_url) => {

    try {
        await mongoose.connect(db_url);
        return console.log('Database connected successfully ✔✔✔');
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB;
