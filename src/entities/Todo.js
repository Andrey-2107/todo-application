import {v4 as uuidv4} from 'uuid';

export class Todo {
  constructor(description = "", isCompleted = false) {
    this.description = description;
    this.isCompleted = isCompleted;
    this.id = uuidv4()
  }

  toggle(isCompleted) {
    this.isCompleted = isCompleted;
  }
}
