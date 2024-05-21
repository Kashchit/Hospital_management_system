const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Render the registration form
exports.register = (req, res) => {
    res.render('auth/register');
};

// Handle registration form submission
exports.postRegister = (req, res) => {
    const { username, password } = req.body;
    User.createUser(username, password, (err) => {
        if (err) return res.send('Error registering user');
        res.redirect('/auth/login');
    });
};

// Render the login form
exports.login = (req, res) => {
    res.render('auth/login');
};

// Handle login form submission
exports.postLogin = (req, res) => {
    const { username, password } = req.body;
    User.findUserByUsername(username, (err, user) => {
        if (err || !user || !bcrypt.compareSync(password, user.password)) {
            return res.send('Invalid username or password');
        }
        req.session.userId = user.id; // Save user ID in session
        res.redirect('/dashboard'); // Redirect to dashboard route after successful login
    });
};

// Handle logout action
exports.logout = (req, res) => {
    req.session.destroy(); // Destroy session on logout
    res.redirect('/auth/login'); // Redirect to login page
};
