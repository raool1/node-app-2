const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>🏠 Home Page</h1><p>Welcome to our Node.js app!</p>');
});

module.exports = router;
