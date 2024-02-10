const express = require('express');
const router = express.Router();
const { registerEmployee ,login} = require('../controllers/employeeController');

router.post("/employeeRegistration", registerEmployee);

router.post("/login",login)

module.exports = router;
