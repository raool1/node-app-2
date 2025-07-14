const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import route modules
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const apiRoute = require('./routes/api');

// Use routes
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/api', apiRoute);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
