const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const connectDB = require('./config/db');

const authRouter = require('./controllers/authController'); // Make sure this points to the correct file
const app = express();


// Use middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

mongoose.set('strictQuery', false);

connectDB();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/auth', authRouter); // Ensure this correctly routes to the AuthRouter !

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});
