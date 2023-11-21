const express = require('express');
const { addTodo } = require('../controller/todoController')

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

module.exports = router;