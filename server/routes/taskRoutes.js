const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

//router.post('/',protect, createTask); yh protect sb route mae likhna jis se user login rahega tb hi add kr payega task

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.put('/:id',  updateTask);
router.delete('/:id', deleteTask);

module.exports = router;