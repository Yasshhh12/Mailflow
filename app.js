const express = require('express');
const mongoose = require('mongoose');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
app.use(express.json());

app.use('/api/emails', emailRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/emailservice').then(e=>console.log('MongoDB connected'));

module.exports = app;