# 🏗️ Hoisting in JavaScript – Day 5 Deep Dive

Welcome to the world of **hoisting** in JavaScript!  
Hoisting is a unique behavior where variable and function declarations are moved ("hoisted") to the top of their scope before code execution.  
Understanding hoisting helps you avoid bugs and write cleaner code.

---

## 🚀 What is Hoisting?

- **Hoisting:**  
  JavaScript automatically moves variable and function declarations to the top of their containing scope (global or function) during the memory creation phase.
- **Declarations are hoisted, not initializations.**

---

## 📦 Variable Hoisting

- **`var` declarations:**  
  Hoisted and initialized as `undefined`.
  ```js
  console.log(a); // undefined
  var a = 20;
  ```
- **`let` and `const`:**  
  Hoisted but not initialized. Accessing before declaration throws a ReferenceError (Temporal Dead Zone).

---

## 🧩 Function Hoisting

- **Function Declarations:**  
  Entire function is hoisted and available before its definition.
  ```js
  showName(); // "This is my name"
  function showName() {
    console.log("This is my name");
  }
  ```
- **Function Expressions & Arrow Functions:**  
  Only the variable is hoisted (as `undefined`), not the function body.
  ```js
  displayName(); // Error: displayName is not a function
  var displayName = function() {
    console.log("This is display");
  };

  getName(); // Error: getName is not a function
  var getName = () => {
    console.log("This is my getname");
  };
  ```

---

## 🛠️ Memory Creation vs Code Execution

- **Memory Creation Phase:**  
  All variables (`var`) are set to `undefined`.  
  Function declarations are stored as complete functions.
- **Code Execution Phase:**  
  Code runs line by line, using the hoisted declarations.

---

## 🧪 Practical Examples

```js
console.log(a); // undefined
var a = 10;

showName(); // "This is my name"
function showName() {
  console.log("This is my name");
}

displayName(); // Error
var displayName = function() {
  console.log("This is display");
};
```

---

## ⚡ Common Pitfalls

- Calling function expressions or arrow functions before their definition leads to errors.
- Variables declared with `var` are accessible before initialization but are `undefined`.
- Variables declared with `let` and `const` are not accessible before initialization.

---

## 📝 Summary

- **Function declarations** are fully hoisted.
- **Variable declarations** (`var`) are hoisted as `undefined`.
- **Function expressions and arrow functions** are treated as variables.
- Always declare variables and functions at the top of their scope for clarity.

---

> **Tip:**  
> Understand hoisting to avoid unexpected bugs and write predictable JavaScript!