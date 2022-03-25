// Bring in Express router and our routes
const router = require('express').Router();
const apiRoutes = require('./api');

// Use our routes
router.use('/api', apiRoutes);

// Default route for requests not matching any other defined route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;