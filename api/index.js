import express from 'express'
import mongoose from 'mongoose';

import connectDB from './config/db.js';

// initialize app
const app = express();

// connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// routing
app.get('/', (req, res) => res.send('it works'))