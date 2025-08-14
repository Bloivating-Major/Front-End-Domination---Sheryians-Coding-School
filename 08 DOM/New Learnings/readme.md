# 🌳 DOM Fundamentals – New Learnings

Unlock the power of the Document Object Model (DOM) and transform your static web pages into dynamic, interactive experiences!

---

## 1. ❓ What is the DOM?

The **DOM** (Document Object Model) is a programming interface that represents your HTML document as a tree of objects.  
This abstraction lets scripts (like JavaScript) dynamically access, modify, and interact with the content and structure of your webpage—making complex features possible beyond static HTML.

---

## 2. 🏗️ Static HTML

- **Definition:** The webpage remains unchanged, no matter what actions the user performs.
- **Example:** Clicking a button does nothing; the content is fixed.

---

## 3. ⚡ Dynamic HTML

- **Definition:** The webpage updates or changes in response to user actions.
- **Example:** Clicking a button changes text, shows a popup, or updates styles.

---

## 4. 🔍 Fetching Elements Using the DOM

There are several methods to select and fetch elements from your HTML:

1. **`querySelector`**  
   - Selects the first matching element (by CSS selector).
   - Example:  
     ```js
     const heading = document.querySelector('h1');
     ```

2. **`querySelectorAll`**  
   - Returns all matching elements as a NodeList (array-like).
   - Example:  
     ```js
     const allButtons = document.querySelectorAll('.btn');
     ```

3. **`getElementById`**  
   - Returns the element with the specified `id`.
   - Example:  
     ```js
     const mainSection = document.getElementById('main');
     ```

4. **`getElementsByClassName`**  
   - Returns all elements with the specified class name as an HTMLCollection.
   - Example:  
     ```js
     const cards = document.getElementsByClassName('card');
     ```

5. **`getElementsByTagName`**  
   - Returns all elements with the specified tag name.
   - Example:  
     ```js
     const paragraphs = document.getElementsByTagName('p');
     ```

---

## 5. 📝 Accessing Content with `.innerHTML`

- Use `.innerHTML` to get or set the HTML content inside an element.
- Example:  
  ```js
  console.log(heading.innerHTML); // Shows the content within the <h1> tag
  ```

---

> **Tip:**  
> Practice selecting and modifying elements to truly master DOM manipulation.  
> The DOM is your gateway to creating interactive, user-friendly websites!