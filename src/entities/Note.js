import {v4 as uuidv4} from 'uuid';

export class Note {
  constructor(title, createdDate) {
    this.title = title;
    this.createdDate = createdDate;
    this.updateDate = null;
    this.todos = [];
    this.id = uuidv4();
  }

  getTodoByIndex(index) {
    return this.todos[index] || null;
  }

  addTodo(todo) {
    this.todos.push(todo)
  }
}
