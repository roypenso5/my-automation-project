require('dotenv').config(); // Loaded at the very top
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');

const LoggeeMiddleware = require('./middlewares/logger');
const userRoutes = require('./src/user/userRoutes');

const app = express();

// --- DATABASE CONNECTION ---
// This uses the LOCAL URI from your .env file
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB is live and connected locally!");
    })
    .catch((err) => {
        console.log("DB connection trouble: " + err);
    });

// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json()); 
app.use(express.static("client"));
app.use(LoggeeMiddleware);

// --- ROUTES ---
app.use('/users', userRoutes);

// --- SERVER START ---
// We use the PORT from .env (4000) or default to 4000
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is on: http://localhost:${PORT}`);
});