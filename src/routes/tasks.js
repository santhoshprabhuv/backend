const express = require('express');

const Task = require('../models/task');

const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {
  Task.find({})
    .then(tasks => res.json(tasks))
    .catch(err => res.status(500).json({ error: err }));
});

// Add a new task
router.post('/', (req, res) => {
  const { title } = req.body;
  const newTask = new Task({ title });

  newTask.save()
    .then(task => res.status(200).json(task))
    .catch(err => res.json(500, err));
});

// Delete a task by its id
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Task.findByIdAndDelete(id)
    .then(task => res.json({ message: 'Task deleted successfully!' }))
    .catch(err => res.json(500, err));
});

// Update a task as done
router.put('/:id', (req, res) => {
  const { done } = req.body;
  Task.findByIdAndUpdate(req.params.id, { done })
    .then(task => res.json(task))
    .catch(err => res.json(500, err));
});

module.exports = router;