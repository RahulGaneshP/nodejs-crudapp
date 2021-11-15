const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/emp.controller');

// Retrieve a single employee 
router.get('/:id', employeeController.findById);

router.get('/email/:email', employeeController.findByEmail);

router.get('/phno/:phno', employeeController.findByNo);

//create a employee
router.post('/', employeeController.create);

//create batch
//router.post('/addbatch', employeeController.createbatch);

// Update a employee with id
router.put('/:id', employeeController.update);

// Delete a employee with id
router.delete('/:id', employeeController.delete);

module.exports = router
