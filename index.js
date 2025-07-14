const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.use('/', require('./routes/home'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
