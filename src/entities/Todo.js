export class Todo {
  constructor(description = "", isCompleted = false) {
    this.description = description;
    this.isCompleted = isCompleted;
  }

  toggle(isCompleted) {
    this.isCompleted = isCompleted;
  }
}
