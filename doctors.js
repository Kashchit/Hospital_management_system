const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.listDoctors);
router.get('/add', doctorController.addDoctor);
router.post('/add', doctorController.postAddDoctor);
router.get('/edit/:id', doctorController.editDoctor);
router.post('/edit', doctorController.postEditDoctor);
router.get('/delete/:id', doctorController.deleteDoctor);

module.exports = router;
