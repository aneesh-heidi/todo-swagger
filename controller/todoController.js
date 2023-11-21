const repository = require('../repository/todoOps')
const Todo = require('../models/todo')

function getRandomInt() {
    const min = 1000;
    const max = 9999;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @swagger
 * components:
 *   schemas:
 *     TodoResult:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: The success status. Returns true if the request is successful; otherwise, returns false.
 *         data:
 *           type: object
 *           description: The todo object
 *           $ref: '#/components/schemas/Todo'
 *     TodoError:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: The success status. Returns true if the request is successful; otherwise, returns false.
 *         error:
 *           type: string
 *           description: actual error code/message
 *         message:
 *           type: string
 *           description: Error message
 */


const addTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        if (title == '') {
            throw 'Invalid title';
        }

        const newID = getRandomInt();
        const newTodo = new Todo(newID, title, description, completed);

        repository.addTodo(newTodo);
        res.status(201).json({ success: true, data: newTodo });
    } catch (error) {
        console.error(error);
        if (error == 'Invalid title') {
            res.status(400).json({ success: false, error: error, message: 'Invalid payload' });
        }
        res.status(500).json({ success: false, error: error, message: 'Internal Server Error' });
    }
}

module.exports = {
    addTodo
}