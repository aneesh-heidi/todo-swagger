const repository = require('../repository/todoOps')

function getRandomInt() {
    const min = 1000;
    const max = 9999;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const addTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const newID = getRandomInt();
        const newTodo = new Todo(newID, title, description, completed);

        repository.addTodo(newTodo);
        res.status(201).json({ success: true, data: newTodo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: e, message: 'Internal Server Error' });
    }
}

module.exports = {
    addTodo
}