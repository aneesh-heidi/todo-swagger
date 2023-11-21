const todos = require('./todos.json')

function addTodo(todo) {
    todos[todo.id] = todo;
}

function getTodos() {
    return Object.values(todos);
}

function getTodo(id) {
    return todos[id];
}

function updateTodo(todo) {
    todos[todo.id] = todo;
}

function deleteTodo(id) {
    delete todos[id];
}

module.exports = {
    addTodo,
    getTodo,
    getTodos,
    updateTodo,
    deleteTodo,
}