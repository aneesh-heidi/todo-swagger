
/**
 * @swagger
 * components:
 *  schemas:
 *      Todo:
 *          type: object
 *          required:
 *              - title
 *          properties:
 *             id:
 *                 type: string
 *                 description: The auto-generated id of the Todo item.
 *             title:
 *                 type: string
 *                 description: The title of the Todo item.
 *             description:
 *                 type: string
 *                 description: The description of the Todo item.
 *             completed:
 *                 type: boolean
 *                 description: The completion status of the Todo item.
 *      UpdateTodo:
 *          type: object
 *          properties:
 *             id:
 *                  type: string
 *                  description: The auto-generated id of the Todo item.
 *             title:
 *                  type: string
 *                  description: The title of the Todo item.
 *                  oneOf:
 *                      - type: string
 *                        minLength: 1
 *                      - type: null  
 *             description:
 *                  type: string
 *                  description: The description of the Todo item.
 *             completed:
 *                  type: boolean
 *                  description: The completion status of the Todo item.
 */

class Todo {
    /**
    * @constructor
    * @param {string} id - The unique identifier for the Todo item.
    * @param {string} title - The title of the Todo item.
    * @param {string} description - The description of the Todo item.
    * @param {boolean} [completed=false] - The completion status of the Todo item (default is false).
    */

    constructor(id, title, desc, completed = false) {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.completed = completed;
    }

    setTitle = (title)=>{
        this.title = title;
    }
    setDesc = (desc)=>{
        this.description = desc;
    }
    setStatus = (status)=>{
        this.completed = status;
    }
};


module.exports = Todo