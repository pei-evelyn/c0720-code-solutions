import toArray from './to-array';

export default function createElement(tagName, attributes, children = []) {
  const parent = document.createElement(tagName);
  for (const name in attributes) {
    parent.setAttribute(name, attributes[name]);
  }
  toArray(children).forEach(child => {
    if (!(child instanceof HTMLElement)) {
      child = document.createTextNode(child);
    }
    parent.appendChild(child);
  });
  return parent;
}

/*
Line 1: We are importing 'toArray' object from the 'to-array' module.

Line 3: There is a function definition named 'createElement' with three parameters,
tagName, attributes, and an array literal assigned to children. And the opening
curly brace for the function definition code block.

line 4: We are calling the 'createElement' method of the document object and passing
in one argument, the value stored in tagName. The result of that expression is
being assigned to the constant variable named 'parent'.

Line 5: There is a for in loop, checking the condition of the constant variable
named 'name' in the attributes object. And the opening curly brace for the for in loop.

Line 6: The 'setAttribute' method of the 'parent' object is being called, passing in
two arguments, first the value stored in 'name' and second the value stored in
'attributes' at the value stored in 'name'.

Line 7: The closing curly brace for the for in loop.

Line 8: The 'forEach' method is being called passing in one argument an anonymous arrow
function with one parameter 'child' and the opening curly brace to the anonymous arrow
function.  The 'forEach' method is being called on the 'toArray' function call,
passing one argument, the value stored in 'children'

Line 9: There is an 'if' statement, checking for the condition that the value
stored in 'child' is an instance of an HTMLElement and if that condition is falsy.
And the opening curly brace for the if statment.

Line 10: The 'createTextNode' method of the document object is being called,
passing in one argument, the value stored in 'child'.  The result of that expression
is being reassigned to the variable named 'child'.

Line 11: Closing curly brace for the if statement.

Line 12: The 'appendChild' method of the parent object is being called, passing in
one argument, the value stored in 'child'.

Line 13: The closing curly brace to the anonymous arrow function and the closing
parentheses to the 'forEach' method argument list.

Line 14: There is a return statement, returning the value stored in 'parent'.

Line 15: The closing curly brace for the 'createElement' function definition.
*/
