### LECTURE 3 LEARNINGS

# 📝 Handling Forms in HTML – Key Insights

When working with forms in HTML, there’s an important behavior to remember:

- **By default, submitting a form reloads the page.**
- If the page reloads, your JavaScript code won’t get a chance to run, because the browser refreshes before your script can execute.

## 🚫 Preventing Page Reload

To ensure your JavaScript works as intended (for validation, AJAX, or dynamic updates), you need to **prevent the default form submission behavior**.

**How?**  
Use JavaScript to stop the page from reloading:

```js
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stops the page from reloading
  // Your JS code here
});
```

## 💡 Why Is This Important?

- Preventing reload allows you to validate inputs, show messages, or send data asynchronously.
- It’s essential for creating interactive, user-friendly forms.

---

> **Tip:**  
> Always use `event.preventDefault()` when handling form submissions with JavaScript to keep your page dynamic and responsive!