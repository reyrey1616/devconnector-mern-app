const express = require('express');
const colors = require('colors');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API RUNNING');
});
app.listen(PORT, () =>
  console.log(`SERVER RUNNING ON PORT ${PORT}`.green.inverse)
);
