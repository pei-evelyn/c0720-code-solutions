import { createElement, noop } from '../lib';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class TodoApp {
  constructor(container, nextId, todos, onUpdate = noop) {
    this.container = container;
    this.todos = todos;
    this.nextId = nextId;
    this.todoForm = null;
    this.todoList = null;
    this.isStarted = false;
    this.onUpdate = onUpdate;
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  start() {
    if (this.isStarted) return;
    this.todoForm = new TodoForm(this.addTodo);
    this.todoList = new TodoList(this.toggleCompleted);
    this.update();
    this.isStarted = true;
  }

  addTodo(task) {
    const id = this.nextId;
    const isCompleted = false;
    const newTodo = { id, task, isCompleted };
    this.todos = this.todos.concat(newTodo);
    this.nextId++;
    this.update();
  }

  toggleCompleted(todoId) {
    this.todos = this.todos.map(todo => {
      if (todo.id !== todoId) return todo;
      return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    });
    this.update();
  }

  update() {
    this.container.innerHTML = '';
    this.container.append(
      createElement('h1', { class: 'mb-4' }, 'JS Todo'),
      this.todoForm.render(),
      this.todoList.render(this.todos)
    );
    const { nextId, todos } = this;
    this.onUpdate({ nextId, todos });
  }
}

/*
Line 1: We are importing the createElement and noop named objects from the lib module.

Line 2: We are importing the todoList object from the 'todolist' module.

Line 3: We are importing the todoForm object from the todoform module.

Line 5: There is a class definition named TodoApp and the opening curly brace for the
class definition code block. This class definiion is being assigned to the default export
value of the module.

Line 6: There is a constructor method being defined with 4 parameters, container,
nextId, todos, and the assigment of noop to onUpdate. And the opening curly brace for
the constructor definition.

Line 7: The value stored in container is being assigned to the containter property of this object.

Line 8: The value stored in todos is being assigned to the todos property of this object.

Line 9: The value stored in nextid is being assigned to the the nextId property of this object.

Line 10: The value null is being assigned to the todoForm property of this object.

Line 11: The value null is being assigned to the todoList property of this object.

Line 12: The boolean false is being assigned to the isStarted property of this object.

Line 13: The onUpdate function is being assigned to the onUpdate property of this object.

Line 14: The bind method of the addtodo method of this object is being called with one argument
the value of this and the return is being assigned to the addtodo property of this object.

Line 15: The bind method of the toggleCompleted method of this object is being called
with one argument the value of this and the return is being assigned to the toggleCompleted
property of this object.

Line 16: Closing curly brace to the constructor definition.

Line 18: The start method is being defined with no parameters and the opening curly
brace for the method definition.

Line 19: There is an if statement checking the condition of the value of the isStarted property
of this object is truthy and returning if is.

Line 20: A new todoForm object is being instantiated with one argument the callback function
of addTodo method of this object.  The instance is being assigned to the todoForm property
of this object.

Line 21: A new todoList object is being instantiated with one argument the callback function
of togglecompleted method of this object.  The instance is being assigned to the todoList property
of this object.

Line 22: The update method of this object is being called with no arguments.

Line 23: The boolean true is being assigned to the isstarted property of this object.

Line 24: The closing curly brace for the start method definition.

Line 26: The addTodo method is being defined with one parameter and the opening
curly brace for the method definition.

Line 27: The nextid property of this object is being assigned to constant variable
named id.

Line 28: The boolean false is being assigned to the constant variable names isCompleted.

Line 29: ???

Line 30: The concat method of the todos property of this object is being called
passing in one argument the value stored in newTodo and the return value is being
assigned to the todos property of the this object.

Line 31: The nextId property of the this object is being incremented.

Line 32: The update method of this object is being called with no arguments.

Line 33: The closing curly brace to the addTodo method definition.

Line 35: The toggleCompleted method is being defined with one parameter, todoId and
the opening curly brace for the method definition.

Line 36:

Line 37:

Line 38:

Line 39:

Line 40: The update method of this object is being called with no arguments.

Line 41: Closing curly brace of the togglecompleted method definition.

Line 43: The update method is being defined with no parameters and the opening
curly brace of the method definition.

Line 44: An emtpy string is being assigned to the innerHTML property of the container
property of this object.

Line 45: The append method of the container object of this object is being called passing
in three arguments.

Line 46:

Line 47: The render method of the todoForm object of this object is being called
with no arguments.

Line 48: The render method of the todoList object of this object is being called
with one argument the value of todos property of this object.

Line 49:

Line 50:

Line 51:

Line 52: The closing curly brace to the toggleCompleted method definition.

Line 53: The closing curly brace to the class definition.
*/
