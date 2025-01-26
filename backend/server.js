const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/db';

app.use(cors({
  origin: 'http://localhost:3000',
}));

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

app.get('/health', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});