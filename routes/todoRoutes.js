const express = require('express');
const {addTodo} = require('../controller/todoController')

const router = express.Router();

// Example route to create a new todo
router.post('/todos', addTodo);

module.exports = router;