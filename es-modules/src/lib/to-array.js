export default function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

/*
Line 1: There is a function named "toArray" being defined with one parameter and it
is being assigned to the default export value of the module.

Line 2:  We are returning the result of the ternary operator, with the first operand
checking if the result of calling the 'isArray' method of the Array object, passing
in one argument the value stored in 'value' is truthy.  If so, we return the value
stored in 'value'.  If not, we return array at index of value stored in 'value'.
*/
