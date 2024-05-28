const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const {isLogged} = require('../middleware/authMiddleware');
const router = express.Router();

//router.post('/',isLogged, createTask); yh protect sb route mae likhna jis se user login rahega tb hi add kr payega task

router.post('/',isLogged, createTask);
router.get('/',isLogged, getTasks);
router.get('/:id',isLogged, getTaskById);
router.put('/:id',isLogged,  updateTask);
router.delete('/:id',isLogged, deleteTask);

module.exports = router;