const Doctor = require('../models/doctor');

// List all doctors
exports.listDoctors = (req, res) => {
    Doctor.getAllDoctors((err, doctors) => {
        if (err) return res.send('Error fetching doctors');
        res.render('doctors/list', { doctors });
    });
};

// Render the form to add a new doctor
exports.addDoctor = (req, res) => {
    res.render('doctors/add');
};

// Handle the submission of the form to add a new doctor
exports.postAddDoctor = (req, res) => {
    const { name, specialization } = req.body;
    Doctor.createDoctor(name, specialization, (err) => {
        if (err) return res.send('Error adding doctor');
        res.redirect('/doctors');
    });
};

// Render the form to edit an existing doctor
exports.editDoctor = (req, res) => {
    const id = req.params.id;
    Doctor.getDoctorById(id, (err, doctor) => {
        if (err || !doctor) return res.send('Doctor not found');
        res.render('doctors/edit', { doctor });
    });
};

// Handle the submission of the form to edit an existing doctor
exports.postEditDoctor = (req, res) => {
    const { id, name, specialization } = req.body;
    Doctor.updateDoctor(id, name, specialization, (err) => {
        if (err) return res.send('Error updating doctor');
        res.redirect('/doctors');
    });
};

// Handle the request to delete a doctor
exports.deleteDoctor = (req, res) => {
    const id = req.params.id;
    Doctor.deleteDoctor(id, (err) => {
        if (err) return res.send('Error deleting doctor');
        res.redirect('/doctors');
    });
};
