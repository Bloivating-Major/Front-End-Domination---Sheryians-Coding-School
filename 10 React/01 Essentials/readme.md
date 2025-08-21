# ⚛️ React Essentials – Quick Guide

Welcome to the React Essentials module!  
Here you'll learn the foundational concepts of React, JavaScript arrays, and the key features that make React powerful and efficient.

---

## 📚 Arrays in JavaScript

- In most languages, arrays hold only one type of data:  
  `array = [1, 2, 3, 4]`
- In JavaScript, arrays are dynamic and can hold multiple types:  
  `array = [1, 3, "Sambhav", 2.3]`
- Arrays are data structures that store multiple elements, even of different types.

---

## ⚛️ What is React?

- **React is a JavaScript library** for building user interfaces.
- It is **not** a framework, language, or technology.
- Created by engineers at Facebook in 2013, open-sourced in 2015.

---

## 🖥️ Virtual DOM vs Real DOM

- **Real DOM:** When you update something (text, image, etc.) on a normal website, the entire page may repaint—even unchanged elements. This slows down the site.
- **Virtual DOM:** React uses a virtual DOM to minimize unnecessary repaints, making updates faster and more efficient.

---

## 🧩 Key JavaScript Concepts for React

- **Spread Operator:**  
  Copy arrays or objects without mutating the original.
  ```js
  var state = [1,2,3];
  var copy = [...state];

  var stateObj = {name: "sam", age: 20};
  var copyObj = {...stateObj};
  copyObj.name = "sambhav";
  stateObj = copyObj;
  ```

- **Destructuring:**  
  Extract values from objects or arrays easily.
  ```js
  var obj = {name: "sam", age: 20};
  var {age} = obj;
  console.log(age); // 20
  ```

- **Import and Export:**  
  React apps are built from components (navbar, sidebar, cart, etc.).  
  Each component is exported from its file and imported where needed.
  ```js
  // In Navbar.js
  export default Navbar;

  // In Main.js
  import Navbar from './Navbar';
  ```

---

## 🔄 Array Methods: Map & Filter

- **map:**  
  Transforms each element and returns a new array of the same length.
  ```js
  var state = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  const ans = state.map(val => val > 5 ? val + 5 : val);
  console.log(ans);
  ```
  - Use when you want to keep the array size the same.

- **filter:**  
  Returns a new array with only elements that pass a test (array size may change).
  ```js
  var state = [1,2,3,4,5];
  var ans = state.filter(elem => elem > 3);
  console.log(ans); // [4, 5]
  ```
  - Use when you want to reduce the array size.

---

> **Tip:**  
> Practice these concepts to build efficient, scalable React apps.  
> Understanding arrays, objects, and the virtual DOM will make you a better React developer!