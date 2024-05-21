const Patient = require('../models/patient');

// List all patients
exports.listPatients = (req, res) => {
    Patient.getAllPatients((err, patients) => {
        if (err) return res.send('Error fetching patients');
        res.render('patients/list', { patients });
    });
};

// Render the form to add a new patient
exports.addPatient = (req, res) => {
    res.render('patients/add');
};

// Handle the submission of the form to add a new patient
exports.postAddPatient = (req, res) => {
    const { name, age, address } = req.body;
    Patient.createPatient(name, age, address, (err) => {
        if (err) return res.send('Error adding patient');
        res.redirect('/patients');
    });
};

// Render the form to edit an existing patient
exports.editPatient = (req, res) => {
    const id = req.params.id;
    Patient.getPatientById(id, (err, patient) => {
        if (err || !patient) return res.send('Patient not found');
        res.render('patients/edit', { patient });
    });
};

// Handle the submission of the form to edit an existing patient
exports.postEditPatient = (req, res) => {
    const { id, name, age, address } = req.body;
    Patient.updatePatient(id, name, age, address, (err) => {
        if (err) return res.send('Error updating patient');
        res.redirect('/patients');
    });
};

// Handle the request to delete a patient
exports.deletePatient = (req, res) => {
    const id = req.params.id;
    Patient.deletePatient(id, (err) => {
        if (err) return res.send('Error deleting patient');
        res.redirect('/patients');
    });
};
