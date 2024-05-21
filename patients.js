const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/', patientController.listPatients);
router.get('/add', patientController.addPatient);
router.post('/add', patientController.postAddPatient);
router.get('/edit/:id', patientController.editPatient);
router.post('/edit', patientController.postEditPatient);
router.get('/delete/:id', patientController.deletePatient);

module.exports = router;
