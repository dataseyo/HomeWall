import express from 'express'
import mongoose from 'mongoose';

import connectDB from './config/db.js';

// initialize app
const app = express();

// connect to database
const CONNECTION_URL = "mongodb+srv://gaharaz:1890@cluster0.frnclpd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// routing
app.get('/', (req, res) => res.send('it works'))