const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>📞 Contact Page</h1><p>Contact us at: contact@example.com</p>');
});

module.exports = router;
