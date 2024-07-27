const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./src/db/db');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());  // Replacing bodyParser.json() with express.json()
app.use(cors());

// Database connection
connectDB();

// Routes
app.use('/api', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Server running on port 5000',
        status: 200
    });
});

// Server setup
const PORT = 5000;  // Use environment variable for port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
