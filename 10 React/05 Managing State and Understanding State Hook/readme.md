# ⚛️ Managing State in React – Understanding the State Hook

State is the dynamic data that React keeps track of.  
Whenever state changes, React automatically updates the page for you!

---

## 1️⃣ useState Basics

```jsx
import React, { useState } from "react";

const App = () => {
  const [score, setScore] = useState(false);
  return (
    <div className="p-4">
      <h1>{score.toString()}</h1>
      <button
        onClick={() => setScore(!score)}
        className="px-2 py-1 mt-2 text-xs bg-blue-500 rounded-full"
      >
        Change
      </button>
    </div>
  );
};

export default App;
```
*Toggle a boolean value with a button click. React updates the UI instantly!*

---

## 2️⃣ useState Intermediate

```jsx
import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState(1);
  return (
    <div className="p-4">
      <h1>{val}</h1>
      <button
        onClick={() => setVal((prev) => prev + 1)}
        className="px-3 py-1 mt-2 text-xs bg-green-500 rounded-full"
      >
        Addition
      </button>
      <button
        onClick={() => setVal((prev) => prev - 1)}
        className="px-3 py-1 mt-2 text-xs bg-red-500 rounded-full"
      >
        Subtraction
      </button>
    </div>
  );
};

export default App;
```
*Increment or decrement a number using state and functional updates.*

---

## 3️⃣ useState Advanced Level

```jsx
import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState({ name: "Iron Man", status: false });
  return (
    <div className="p-4">
      <h1>Name : {val.name}</h1>
      <h1>Status : {val.status.toString()}</h1>
      <button
        onClick={() => setVal({ ...val, status: !val.status })}
        className={`px-3 py-1 mt-2 text-xs ${val.status ? 'bg-green-500' : 'bg-red-500'} rounded-full`}
      >
        Update Status
      </button>
    </div>
  );
};

export default App;
```
*Manage complex state objects and update specific properties with the spread operator.*

---

> **Tip:**  
> State is the heartbeat of React apps.  
> Use `useState` to create interactive, dynamic UIs with just a few lines of code!