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

module.exports = {
    addTodo,
    getTodo,
    getTodos,
}