import { createElement } from '../lib/index';

export default class TodoForm {
  constructor(onSubmit) {
    this.newTask = '';
    this.element = null;
    this.onSubmit = onSubmit;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.newTask = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit(this.newTask);
    this.newTask = '';
    event.target.reset();
    event.target.querySelector('input').focus();
  }

  render() {
    if (this.element) return this.element;
    this.element = (
      createElement('form', { class: 'shadow-sm mb-4' }, [
        createElement('div', { class: 'input-group' }, [
          createElement('input', {
            type: 'text',
            required: true,
            class: 'form-control',
            placeholder: 'What to do?'
          }),
          createElement('div', { class: 'input-group-append' }, [
            createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Add Todo')
          ])
        ])
      ])
    );
    this.element.addEventListener('change', this.handleChange);
    this.element.addEventListener('submit', this.handleSubmit);
    return this.element;
  }
}

/*
Line 1: We are importing the createElement named object from the 'lib/index' module.

Line 3: There is a class definition named TodoForm and the opening curly brace to the
method definition.  The class definition is being assigned to the default export of
the module.

Line 4: The constructor method is being defined with one parameter, onSubmit and the opening
curly brace to the constructor definition.

Line 5: An empty string is being assigned to the newtask property of the this object.

Line 6: The value null is being assigned to the element property of the this object.

Line 7: The onSubmit method is being assigned to the onSubmit property of the this object.

Line 8: The bind method of the handlechange method of the this object is being called with one
argument, the value stored in this and that return is being assigned to the handlechange
property of the this object.

Line 9: The bind method of the handlesubmit method of the this object is being called with one
argument, the value stored in this and that return is being assigned to the handlesubmit
property of the this object.

Line 10: Closing curly brace to the constructor method definition.

Line 12: The handleChange method is being defined with one parameter, event, the opening
curly brace for the method definition.

Line 13: The value property of the target property of the event object is being assigned
to the newTask property of the this object.

Line 14: The closing curly brace of the handlechange method definition.

Line 16: The handlesubmit method is being defined with one parameter, event and the
opening curly brace of the method definition.

Line 17: The preventDefault method of the event object is being called with no arguments.

Line 18: The onsubmit method of the this object is being called passing in one
argument the value stored in the newTask property of the this object.

Line 19: An empty string is being assigned to the newtask property of the this object

Line 20: The reset method of the target property of the event object is being called
with no arguments.

Line 21: The focus method is being called and chained to the querySelector method call
with one argument string input, on the target property of the event object.

Line 22: Closing parentheses of the method definition.

Line 24: The render method is being defined with no parameters and the opening
curly brace for the method definition.

Line 25: There is an if statement evaluating the condition of the value stored in
the element property of this object is truthy then returning the value stored in
the element property of the this object.

Line 26: The return of the createElement method call is being assigned to the element
property of this object.

Line 27: The createelement method is being called passing in 3 arguments. 1st the string
'form', 2nd an object literal with property value 'shadow-sm mb-4' assigned to property
name class, 3rd opening bracket to array literal.

Line 28: The createelement method is being called passing in 3 arguments. 1st the string
'div', 2nd an object literal with property value 'input-group' assigned to property
name class, 3rd opening bracket to array literal.

Line 29: The createelement method is being called passing in 2 arguments. 1st the string
'input', 2nd an opening curly brace to an object literal

Line 30-33:
property value string 'text assigned to propertyname type,
property value boolean true assigned to required property name,
property value string 'form control' assigned to property name class.
property value string 'What to do?' assigned to property name placeholder.

Line 34: The closing curly brace to the object literal. Closing parantheses to
the argument list of line 29 createElement.

Line 35: The createelement method is being called passing in 3 arguments. 1st the string
'div', 2nd an object literal with property value 'input-group-append' assigned to property
name class, 3rd opening bracket to array literal.

Line 36: The createelement method is being called passing in 3 arguments. 1st the string
'button', 2nd an object literal with:
property value 'submit' assigned to property name type,
property value string 'btn btn-primary' assigned to property name class,
3rd string addtodo.

Line 37: Closing bracket to the array literal on line 35 and argument list of line 35.

Line 38: Closing bracket to the array literal on line 28 and argument list of line 28.

Line 39: Closing bracket to the array literal on line 27 and argument list of line 27.

Line 40: Closing parantheses to the assigment on 26.

Line 41: The addeventlistener method of the element property of the this object is being
called passing in two arguments, the string change and the return value of the handlechange
method call of the this object.

Line 42: The addeventlistener method of the element property of the this object is being
called passing in two arguments, the string submit and the return value of the handlesubmit
method call of the this object.

Line 43: The element property of the this object is being returned

Line 44: The closing curly brace to the render method definition.

Line 45: The closing curly brace to the class definition.
*/
