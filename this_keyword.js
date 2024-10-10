// By default, the value of this in JavaScript depends on how a function is called:

//1) Global Context (or Default Context):

// In the global scope (outside of any function), this refers to the global object.
// In a browser, the global object is window.
//IN NODEJS At the top level of a module, this refers to module.exports (an empty object by default).

console.log(this); // In a browser, this will log the 'global'/'window' object

//2) Object Method:

// When a function is called as a method of an object, this refers to the object that the method is a property of.
const person = {
  name: "Rajendra",
  greet: function () {
    console.log(this.name);
  },
};
person.greet(); // 'this' refers to 'person', so it logs "Rajendra"

//3) Standalone Function Call:

// In non-strict mode, when a standalone function (not a method of an object) is called,
//  this refers to the global object (window in browsers).
// In strict mode ('use strict';), this will be undefined.

function show() {
  console.log(this);
}
show(); // In non-strict mode, logs 'window'; in strict mode, logs 'undefined'

//4) Constructor Function (new keyword):

// When a function is used as a constructor (called with new), this refers to the newly created object.

function Person(name) {
  this.name = name;
}
const rajendra = new Person("Rajendra");
console.log(rajendra.name); // 'this' refers to the new 'Person' object, logs "Rajendra"

// Arrow Functions:

// Arrow functions do not have their own this.
// Instead, this in an arrow function is lexically inherited from the surrounding non-arrow function or global context.

const persons = {
  name: "Rajendra",
  greet: function () {
    const innerGreet = () => {
      console.log(this.name); // 'this' is inherited from 'greet' method
    };
    innerGreet();
  },
};
person.greet(); // Logs "Rajendra"
