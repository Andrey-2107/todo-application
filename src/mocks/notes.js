import {Todo} from "../entities/Todo";
import {Note} from "../entities/Note";

const note = new Note('Learn different programing language', Date.now());
note.addTodo(new Todo('Learn Vue'));
note.addTodo(new Todo('Learn React', true));
note.addTodo(new Todo('Learn Angular', true));
note.addTodo(new Todo('Cook eat'));

const note1 = new Note('Buy product', Date.now());
note1.addTodo(new Todo('Cream', true));
note1.addTodo(new Todo('Mushrooms'));
note1.addTodo(new Todo('Sausages'));

const note2 = new Note('My home task', Date.now());
note2.addTodo(new Todo('Water the cactus', true));
note2.addTodo(new Todo('Cook food'));
note2.addTodo(new Todo('Feed the duck', true));

const note3 = new Note('Improve my hobie skill', Date.now());
note3.addTodo(new Todo('Play guitar', true));
note3.addTodo(new Todo('Paint'));


export const notes = [note, note1, note2, note3];
