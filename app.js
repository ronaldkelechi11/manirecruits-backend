const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./db/dbConnect.js')
const app = express();


// ======CORS=========
// TODO: Remove before launch and add Company domain
const whitelist = ["http://localhost:5173", "*", "https://manirecruits.vercel.app"];

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


// =========== MIDDLEWARES ========================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));


// =========== FETCHING ROUTES =====================
const loginRoute = require('routes/signin')
const signupRoute = require('routes/signup.js')
const userProfileEditRoute = require('routes/userProfileEdit.js')
const adminRoute = require('routes/admin.js')
const userDashboardRoute = require('routes/userDashboard.js')



app.get("/", (req, res) => {
    res.status(200).send("Invalid Route Access Only to /api")
})

// =========== ASSIGNING ROUTES ====================
app.use('/api/signup', signupRoute)
app.use('/api/login', loginRoute)
app.use('/api/admin', adminRoute)
app.use('/api/dashboard', userDashboardRoute)
app.use('/api/dashboard/edit', userProfileEditRoute)


// ======== SERVER LISTENING FUNCTION ============  
app.listen(process.env.PORT, async () => {
    await connectDB(process.env.MONGO_LIVE_URL);
    console.log(`Server is Listening on port ${process.env.PORT}`)
})