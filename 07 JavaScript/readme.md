# ⚡️🚀 JavaScript Mastery – Sheriyance Coding FrontEnd Domination

Welcome to your JavaScript journey!  
This guide is your creative companion to understanding the language that powers the web.  
Each topic is explained with clarity, examples, and a dash of fun.  
Ready to become a JS wizard? 🧙‍♂️✨

---

## 0. 🏁 JavaScript – The Language ✅

- **Invented by:** Brendan Eich (1995)
- **JS = Language**  
  Managed by **EcmaScript**.
- **Versions:**  
  - ES5 (Before)  
  - ES6 (After)
- **The Language:** Pure coding
- **DOM:** Adds functionality to websites

---

## 1. 🔗 Basics ✅

- Connect your JS file using `<script src="..."></script>` right before the closing `</body>` tag.
- This is how you bring JavaScript to life on your webpage!

---

## 2. 📎 Linking Files ✅

---

## 3. 🖥️ Console ✅

---

## 4. 🛠️ Inbuilt Features ✅

- **Console:**  
  - `console.log` – Print to console  
  - `console.warn` – Show warnings  
  - `console.error` – Show errors
- **Alerts & Prompts:**  
  - `alert`, `prompt` – Interact with users

---

## 5. 🧮 Variables and Constants ✅

- Variables can change, constants cannot.
- `var` scope: limited to parent function.
- **Memory:**  
  - Heap (Browser)  
  - Stack

---

## 6. 🖥️ Compilers and Interpreters ✅

- JS uses English-like words, but computers only understand current flow (not 0/1).
- **Compiler:** Converts code to machine language (fast execution, slow conversion).
- **Interpreter:** Quick conversion, slow execution.
- **JIT Compiler:** Combines both for speed!

---

## 7. 🌐 Window ✅

- Many features used in JS are actually part of the browser, not JS itself.
- These are called from the browser environment.

---

## 8. 🏷️ Types ✅

- **Types:** How data looks
  - `"Sambhav"`: String
  - `12`: Integer
  - `12.3`: Float
  - `true`: Boolean
  - `a`: Character
- **Primitive:** `12`, `"Sam"`, `true`, `null`, `undefined`
- **Reference:** `[]`, `()`, `{}`

**Examples:**
```js
var a = 12;
var a = 12.2;
var a = true;
var a = [];
var a = false;
var a = null;
var a = undefined;
var a = function(){};
```

**Copying Values:**
```js
var a = 2;
var b = a; // b = 2, a = 2

var arr = [1,2,3];
var b = arr; // b and arr reference same array
b.pop(); // arr and b both change

var gh = [...arr]; // spread operator for copying
gh.pop(); // arr remains unchanged
```

---

## 9. 🔄 Conditionals ✅

- `if`, `else`, `else if`, ternary, switch case
- **Truthy/Falsy:**  
  - Falsy: `null`, `undefined`, `NaN`, `0`, `""`, `''`, `document.all`, `false`
  - Everything else is truthy

---

## 10. 🔁 Loops ✅

- Repeat actions: `for`, `while`, `do while`, `forEach`, `for in`, `for of`
- `forEach` works only on arrays

---

## 11. 🧩 Functions ✅

- **ES5:** Function Statement, Expression, Anonymous Function
- **ES6:** Fat Arrow Functions (basic, with params, implicit return)
- **Purpose:** Reuse code, run code later
- **Syntax:**
  ```js
  function abcd() { /* code */ }
  var abcd = () => {};
  var a = param => {};
  var abcd = () => "Sambhav";
  ```

---

## 12. 🔙 RETURN ✅

- Use `return` in functions to send a value back.
- If nothing is returned, `undefined` is returned by default.

---

## 13. ❓ UNDEFINED, NOT DEFINED, NULL ✅

- **Undefined:** Variable declared, no value assigned
- **Not Defined:** Error – variable not created
- **Null:** Value meaning "not found"

---

## 14. 📚 Arrays ✅

- Store multiple values of same type
- Index starts at 0
- Example:
  ```js
  var arr = [1,2,"Hello",4,function(){},[]];
  arr[3]; // 4
  ```

---

## 15. 🔁 Loop With Array ✅

- Loop through arrays and do something with each element
  ```js
  arr.forEach(function(val){
      console.log(val);
  });
  ```

---

## 16. 🗂️ Objects ✅

- Store details for a particular thing
- Example:
  ```js
  var Fruit = {
    name : "Mango",
    color : "Yellow",
    size : "Small + Medium",
    taste : "Sweet"
  };
  ```

---

## 17. 🧬 Prototypes #Interview Preparation

---

## 18. 🧬 Prototypal Inheritance #Interview Preparation

---

## 19. ⏳ Synchronous and Asynchronous JavaScript

- **Synchronous:** Executes line by line
- **Asynchronous:** Executes tasks together, returns results as soon as ready

---

## 20. 🎉 ES6 Climax

---

## 21. ❓ Questions

---

## 22. 🕹️ JavaScript the DOM

---

## 23. 🔑 THIS, CALL, APPLY, BIND ✅

- **Keyword:** Has special meaning in JS
- **`this`:** Value changes based on context
  - Global: `window`
  - Function: `window`
  - Method: `object`
  - Function inside method (ES5): `window`
  - Function inside method (ES6): `object`
  - Constructor: new blank object
  - Event Listener: element where event is used
- **`call`, `apply`, `bind`:** Manipulate context (`this`) of a function

---

> **Tip:** Explore each topic in the accompanying JS file for hands-on examples and code snippets!  
> _Keep experimenting, keep learning!_ 🚀