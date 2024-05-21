const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/', appointmentController.listAppointments);
router.get('/add', appointmentController.addAppointment);
router.post('/add', appointmentController.postAddAppointment);
router.get('/delete/:id', appointmentController.deleteAppointment);

module.exports = router;
