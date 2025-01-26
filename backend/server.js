const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 6000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});