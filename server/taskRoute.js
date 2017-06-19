var express = require('express');
var router = express.Router();
var taskCtrl = require('./taskCtrl');


router.get('/', taskCtrl.getAllTask);

router.get('/:id', taskCtrl.getSingleTask);

router.put('/:id', taskCtrl.editTask);

router.post('/', taskCtrl.insertTask);

router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;