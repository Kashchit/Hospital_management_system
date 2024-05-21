const Appointment = require('../models/appointment');
const Patient = require('../models/patient');
const Doctor = require('../models/doctor');

// List all appointments
exports.listAppointments = (req, res) => {
    Appointment.getAllAppointments((err, appointments) => {
        if (err) return res.send('Error fetching appointments');
        res.render('appointments/list', { appointments });
    });
};

// Render form to add a new appointment
exports.addAppointment = (req, res) => {
    Patient.getAllPatients((err, patients) => {
        if (err) return res.send('Error fetching patients');
        Doctor.getAllDoctors((err, doctors) => {
            if (err) return res.send('Error fetching doctors');
            res.render('appointments/add', { patients, doctors });
        });
    });
};

// Handle form submission to add a new appointment
exports.postAddAppointment = (req, res) => {
    const { patient_id, doctor_id, date, time } = req.body;
    Appointment.createAppointment(patient_id, doctor_id, date, time, (err) => {
        if (err) return res.send('Error adding appointment');
        res.redirect('/appointments');
    });
};

// Delete an appointment by ID
exports.deleteAppointment = (req, res) => {
    const id = req.params.id;
    Appointment.deleteAppointment(id, (err) => {
        if (err) return res.send('Error deleting appointment');
        res.redirect('/appointments');
    });
};
