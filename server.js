const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const path = require('path');

// Route imports

// Initialize Express
const app = express();

// Init Middlewares
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Connect to database
connectDB();
const PORT = process.env.PORT || 5000;

// Listen to port
app.listen(PORT, () =>
  console.log(`SERVER RUNNING ON PORT ${PORT}`.green.inverse)
);
