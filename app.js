const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); //setting template engine as ejs

// Sessions
app.use(session({
    secret: 'e4ed67ded711b13a2791e581c176fd621de93509534f607a8dfd447b01e25656', 
    resave: false,
    saveUninitialized: true,
}));

// Routes
const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patients');
const doctorRoutes = require('./routes/doctors');
const appointmentRoutes = require('./routes/appointments');
const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const contactRoutes = require('./routes/contactRoutes');

app.use('/auth', authRoutes);
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use(contactRoutes);

// Home route
app.get('/', (req, res) => {
    res.redirect('/auth/login');
});

//starting server at 8848
const PORT = 8848;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
