const todos = require('./todos.json')

function addTodo(todo) {
    todos[todo.id] = todo;
}

function getTodos() {
    return todos;
}

function getTodo(id) {
    return todos[id];
}

function updateTodo(todo) {
    todos[todo.id] = todo;
}

module.exports = {
    addTodo,
    getTodo,
    getTodos,
    updateTodo,
}