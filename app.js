const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./db/dbConnect.js')
const app = express();

// ======CORS=========
const whitelist = ["http://localhost:3000", "http://127.0.0.1:5173"];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not Allowed By CORS: Please try again"));
        }
    },
    credentials: true,
}

// =========== Middlewares =================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

// ======== SERVER LISTENING FUNCTION ============  
app.listen(process.env.PORT, async () => {
    await connectDB(process.env.MONGO_URL);
    console.log(`Server is Listening on port ${process.env.PORT}`)
})