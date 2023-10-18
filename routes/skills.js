var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

// All paths start with /skills 

// GET /skills  
router.get('/', skillsCtrl.index)

// GET /skills/new
router.get('/new', skillsCtrl.new) 

//GET /skills/:id
router.get('/:id', skillsCtrl.show);

// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit)

// POST /skills 
router.post('/', skillsCtrl.create)

// DELETE /:id 
router.delete('/:id', skillsCtrl.delete)

// PUT /:id 
router.put('/:id', skillsCtrl.update)

module.exports = router;
