// 0. Javascript the Language
console.log("JavaScript was developed by Brendan Eich in 1995. Managed by EcmaScript. ES5 and ES6 are two major versions.");

// 1. Basics
// Connect JS file in HTML: <script src="script.js"></script>

// 2. Linking Files
// See above for linking JS files to HTML

// 3. Console
console.log("Hello from console.log!");
console.warn("This is a warning!");
console.error("This is an error!");

// 4. Inbuilt Features
alert("Welcome to JavaScript!");
var name = prompt("What's your name?");

// 5. Variables and Constants
var variable = "I can change!";
const constant = "I cannot change!";

// 6. Compilers and Interpreters
// JS uses JIT Compiler for fast execution

// 7. Window
console.log(window.innerWidth);

// 8. Types
var str = "Sambhav";
var num = 12;
var floatNum = 12.3;
var bool = true;
var arr = [1,2,3];
var obj = {name: "Sam"};
var func = function(){};

// 9. Conditionals
var age = 18;
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Not an adult");
}

// 10. Loops
for (var i = 0; i < 5; i++) {
  console.log(i);
}
var arr = [1,2,3,4,5];
arr.forEach(function(val){
  console.log(val);
});

// 11. Functions
function greet(name) {
  return "Hello, " + name;
}
var greetArrow = name => "Hello, " + name;
console.log(greet("Sambhav"));
console.log(greetArrow("Sambhav"));

// 12. RETURN
function add(a, b) {
  return a + b;
}
console.log(add(2,3));

// 13. UNDEFINED, NOT DEFINED, NULL
var a;
console.log(a); // undefined
// console.log(b); // not defined (error)
var c = null;
console.log(c); // null

// 14. Arrays
var fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);

// 15. Loop With Array
fruits.forEach(function(fruit){
  console.log(fruit);
});

// 16. Objects
var Fruit = {
  name: "Mango",
  color: "Yellow",
  size: "Small + Medium",
  taste: "Sweet"
};
console.log(Fruit.name);

// 17. Prototypes
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};
var p = new Person("Sambhav");
p.sayHello();

// 18. Prototypal Inheritance
function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var s = new Student("Sam", "A");
s.sayHello();

// 19. Synchronous and Asynchronous JavaScript
console.log("Start");
setTimeout(function(){
  console.log("Async Task");
}, 1000);
console.log("End");

// 20. ES6 Climax
let x = 10;
const y = 20;
let arr2 = [1,2,3];
let arrCopy = [...arr2];

// 21. Questions
// Practice interview questions here

// 22. JavaScript the DOM
document.body.style.background = "lightblue";

// 23. THIS, CALL, APPLY, BIND
var obj = {
  name: "Sambhav",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
obj.greet();

function sayHello() {
  console.log("Hello, " + this.name);
}
sayHello.call(obj); // call
sayHello.apply(obj); // apply
var boundHello = sayHello.bind(obj);