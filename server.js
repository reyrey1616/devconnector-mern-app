const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const app = express();

// Connect to database
connectDB();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API RUNNING');
});
app.listen(PORT, () =>
  console.log(`SERVER RUNNING ON PORT ${PORT}`.green.inverse)
);
