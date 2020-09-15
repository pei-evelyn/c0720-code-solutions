import TodoApp from './components/todo-app';

const container = document.querySelector('#app');

const nextId = 4;

const todos = [
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

const app = new TodoApp(container, nextId, todos, newState => {
  /* eslint-disable no-console */
  console.log(newState);
});

app.start();
/*
Line 1: We are importing the TodoApp object from the components/todoApp module.

Line 3 The querySelector method of the document object is being called passing in
one argument string 'app' and the return is being assigned to the constant variable
names container.

Line 5: The number 4 is being assigned to the constant variable  named nextId.

Line 7-23: An array literal with three objects, each with property names id, task,
and iscompleted, is being assigned to the constant variable named todos.

Line 25: A new todoApp object is being instantiated passing in 4 arguments, container,
nextId, todos, and an anonymous arrow function with one parameter newState.  The instance is being assigned to
the constant variable named app.

Line 27: The log method of the console object is being called passing in one argument
the value stored in newState.

Line 28: The closing curly brace for the anonymous arrow function. The closing
parantheses to the instance argument list.

Line 30: The start method of the app object is being called with no arguments.
*/
