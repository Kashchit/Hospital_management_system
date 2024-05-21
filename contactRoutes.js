// contactRoutes.js

const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.render('contact'); // Renders the contact.ejs view
});

module.exports = router;
    