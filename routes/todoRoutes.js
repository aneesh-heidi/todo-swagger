const express = require('express');
const { addTodo, getTodos, getTodo, updateTodo } = require('../controller/todoController')

const router = express.Router();

/**
 * @swagger
 * paths:
 *  /todo:
 *      post:
 *          summary: Creates a todo.
 *          description: API to create a TODO.
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Todo'
 *          responses:
 *              '201':
 *                  description: Returns the newly created todo object with status data
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoResult'
 *              '400':
 *                  description: User error
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoError'
 *              '500':
 *                  description: Internal server error
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoError'
 */
router.post('/', addTodo);


/**
 * @swagger
 * paths:
 *  /todo:
 *      get:
 *          summary: List all todos.
 *          description: API to list all TODOs.
 *          responses:
 *              '200':
 *                  description: Returns the all the todos in an array
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/MultipleTodoResult'
 *              '500':
 *                  description: Internal server error
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoError'
 */
router.get('/', getTodos);

/**
 * @swagger
 * paths:
 *  /todo/{id}:
 *      get:
 *          summary: Get todo by ID.
 *          description: API to get a todo by id.
 *          parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: string
 *              required: true
 *              description: The todo id
 *          responses:
 *              '200':
 *                  description: Returns the todo with the id
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoResult'
 *              '400':
 *                  description: Input error
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoError'
 * 
 *              '500':
 *                  description: Internal server error
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoError'
 */
router.get('/:id', getTodo);

/**
 * @swagger
 * paths:
 *  /todo/{id}:
 *      put:
 *          summary: Creates a todo.
 *          description: API to create a TODO.
 *          parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: string
 *              required: true
 *              description: The todo id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateTodo'
 *          responses:
 *              '200':
 *                  description: Returns the updated todo object with status data
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoResult'
 *              '400':
 *                  description: User error
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoError'
 *              '500':
 *                  description: Internal server error
 *                  content:
 *                      application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/TodoError'
 */
router.put('/:id', updateTodo);

module.exports = router;