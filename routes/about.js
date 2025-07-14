const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>ℹ️ About Page</h1><p>This app was deployed using Azure DevOps.</p>');
});

module.exports = router;
