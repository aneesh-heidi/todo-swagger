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
};


module.exports = Todo