import { createElement } from '../lib/index';

export default class TodoList {
  constructor(onToggle) {
    this.onToggle = onToggle;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const todoItem = event.target.closest('[data-todo-id]');
    if (!todoItem) return;
    const todoId = parseInt(todoItem.getAttribute('data-todo-id'), 10);
    this.onToggle(todoId);
  }

  renderCheckbox(todo) {
    const checkbox = createElement('input', {
      type: 'checkbox',
      id: `task${todo.id}`,
      class: 'form-check-input'
    });
    checkbox.checked = todo.isCompleted;
    return checkbox;
  }

  renderTodoItem(todo) {
    const labelStyle = todo.isCompleted
      ? 'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
      : 'cursor: pointer; text-decoration: inherit;';
    const todoItem = (
      createElement('li', { class: 'list-group-item', 'data-todo-id': todo.id }, [
        createElement('div', { class: 'form-check d-flex' }, [
          this.renderCheckbox(todo),
          createElement('label', { style: labelStyle, class: 'form-check-label flex-grow-1', for: `task${todo.id}` }, todo.task)
        ])
      ])
    );
    return todoItem;
  }

  render(todos) {
    const todoList = (
      createElement('ul', { class: 'list-group shadow-sm mb-4' }, todos.map(todo => {
        return this.renderTodoItem(todo);
      }))
    );
    todoList.addEventListener('change', this.handleChange);
    return todoList;
  }
}

/*
Line 1: We are importing the 'createElement' named object from the 'lib/index' module.

Line 3: There is a class definition named 'TodoList' and the opening curly brace for
the class definition.  This class definition is being assigned to the default export of
the module.

Line 4: There is a constructor method being defined with one parameter, onToggle, and
the opening curly brace for the constructor method definition.

Line 5: The value stored in 'onToggle' is being assigned to the 'onToggle' property
of the this object.

Line 6: The bind method of the 'handleChange' method of the this object is being
called passing in one argument, the value of 'this'.  The result of that expression
is being assigned to the 'handleChange' property of the 'this' object.

Line 7: The closing curly brace of the constructor method defintion.

Line 9: The handleChange method is being defined, passing in one parameter, the
value stored in event. And the opening curly brace for the method code block.

Line 10: The 'closest' method of the target property of the event object is being
called, passing in one argument, the string '[data-todo-id]'. The result of that
method call is being assigned to the constant varible named 'todoItem'.

Line 11: There is an if statement, checking the condition that the value stored in
'todoItem' is falsy.  If so, we are returning from the if statement.

Line 12: The parseInt function is being called, passing in two arguments. First,
the value returned from the 'getAttribute' method of the 'todoItem' object being
called with one argument string 'data-todo-id'.  Second the number 10.

Line 13: The 'onToggle' method of the this object is being called, passing in one
argument the value stored in 'todoId'.

Line 14: The closing curly brace to the 'handleChange' method definition.

Line 16: The 'renderCheckbox' method is being defined with one parameter, todo.
And the opening curly brace for the method definition.

Line 17: The 'createElement' method is being called passing in two arguments. 1st
the string 'input', 2nd an object literal.  The result of that method call is being
assigned the the constant variable named checkbox.

Line 18: The property value of string 'checkbox' is assigned to the property name 'type'.

Line 19: The property value of string literal `task` with a JavaScript expression of
the id property of the todo object is assigned to the id property name.

Line 20: The property value of string 'form-check-input' is assigned to the class
property name.

Line 21: The closing curly brace for the object literal, the closing parentheses
for the 'createElement' method argument list.

Line 22: The isCompleted property of the todo object is being assigned to the checked
property of the checkbox object.

Line 23:  The value stored in checkbox is being returned.

Line 24: The closing curly brace for the renderCheckbox method definition.

Line 26: The renderTodoItem method is being defined with one parameter, todo.  And
the opening curly brace for the method defintion.

Line 27-29: The result of the ternary operator is being assigned to the constant variable
named labelStyle. We are checking if the condition, the isCompleted
property of the todo object, is truthy.  If truthy, assign string
'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
to the variable.  Else, assign 'cursor: pointer; text-decoration: inherit;' to the variable.

Line 30: The createElement method is being called and the result of that method call
is being assigned to the constant variable named todoItem.

Line 31: The createElement method called is being passed three arguments. 1st the
string 'li'. 2nd an object literal with property value string 'list-group-item' assigned to property
name 'class', the property value of the value stored in the id property of the todo
object assigned to the property name 'data-todo-id'.  3rd the opening bracket of
an array literal.

Line 32: The createElement method is being called, passing in three arguments. 1st the
string 'div'. 2nd an object literal with property value string 'form-check d-flex' assigned to property
name 'class'.  3rd an array literal.

Line 33: The renderCheckbox method of the this object is being called passing in one
argument, the value stored in todo.

Line 34: The createElement method is being called passing three arguments. 1st the
string 'label'. 2nd an object literal with the property value of the value stored in
labelStyle is assigned to the property name style, the property value string 'form-
check-label flex-grow-1' is assigned to property named class, the property value of
the template string `task with the javaScript expression of the value stored in the id
property of the todo object is assigned to the for property name. 3rd argument is
the value of the task property of the todo object.

Line 35: The closing bracket of the array literal and the closing parenthese of the
createElement method call of line 32.

Line 36: The closing bracket of the array literal and the closing parentheses of
the createElement method call of line 31.

Line 37: The closing parentheses to the constant variable 'todoItem' assignment.

Line 38: The value stored in todoItem is being returned.

Line 39: The closing curly brace to the renderTodoItem method definition.

Line 41: The render method is being defined passing in one parameter, todos and the
opening curley brace of the method definition.

Line 42: The createElement method is being called and the result of that method call
is being assigned to the constant variable named todoList.

Line 43: The createElement method is being called, passing in three arguments.
1st the string 'ul'. 2nd an object literal with property value string 'list-group...'
assigned to property name class. 3rd the return of the map method call of the todos object.
The map method call is being passed one argument, an anonymous arrow function with one
parameter todo and the opening curly brace of the  arrow function.

Line 44: The renderTodoItem method of the this object is being called passing in one
argument, the value stored in todo.  The return value of that method call is being returned.

Line 45: The closing curly brace of the anonymous arrow function, the closing parentheses
of the map method argument list, the closing paratheses of the createElement argument list.

Line 46: The closing parentheses of the const variable todoList assignment

Line 47: The addEventListener method of the todoList object is being called, passing in
two arguments, the string 'change' and the second the return value of the handleChange
method of the this object.

Line 48: The value stored in todoList is being returned.

Line 49: The closing curly brace of the render method definition.

Line 50: The closing curly brace for the class definition.
*/
