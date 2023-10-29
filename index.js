//  add express
const express = require('express');

// intialize express
const app = express();

// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.');
});

// export the express API
module.exports = app;
