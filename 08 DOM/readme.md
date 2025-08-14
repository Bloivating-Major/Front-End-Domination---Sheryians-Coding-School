# 🌐 DOM Manipulation – Make Your Webpages Interactive!

Welcome to the world of DOM (Document Object Model) manipulation!  
This guide will help you master the art of selecting, changing, styling, and responding to elements on your webpage using JavaScript.

---

## 1. 🎯 Accessing Elements

Use `document.querySelector()` and other selection methods to grab elements from your HTML.

**Example:**
```js
const button = document.querySelector('.my-btn');
```
- **Selection:** Choose the element you want to work with.
- **Change:** Decide what you want to modify.
- **Event:** Specify when the change should happen (e.g., on click).

---

## 2. ✏️ Modifying Elements

Change the content of elements using:
- `innerHTML` – Set or get HTML markup inside an element.
- `textContent` – Set or get plain text inside an element.

**Example:**
```js
document.querySelector('.title').innerHTML = "New Heading!";
```

---

## 3. 🎨 Manipulating Styles and Classes

- **Inline Styles:** Use `.style` to change CSS directly.
- **Classes:** Use `.classList` to add, remove, or toggle CSS classes.

**Example:**
```js
element.style.color = "red";
element.classList.add('active');
```

---

## 4. 🏗️ Creating and Deleting Elements

- `createElement()` – Make new HTML elements.
- `appendChild()` – Add elements to the DOM.
- `removeChild()` – Remove elements from the DOM.

**Example:**
```js
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
document.body.removeChild(newDiv);
```

---

## 5. ⚡ Event Handling

Respond to user actions with `addEventListener()`.

**Example:**
```js
button.addEventListener('click', function() {
  alert('Button clicked!');
});
```

---

## 6. 🕹️ Event Object

Access details about the event (like which key was pressed, mouse position, etc.) using the event object.

**Example:**
```js
button.addEventListener('click', function(event) {
  console.log(event.target); // The element that was clicked
});
```

---

> **Tip:**  
> DOM manipulation lets you create dynamic, interactive web experiences.  
> Experiment with these methods and see your pages come to life!