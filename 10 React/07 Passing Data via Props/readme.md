# 🎁 Passing Data via Props in React

Props make your components **reusable** and flexible!  
Imagine you have a button that you want to use in different places in your app.  
Instead of hardcoding its data, you can send the data from the parent component and use it in the child component.

---

## 💡 How Props Work

- **Create a Button Component:**  
  Build a generic button that accepts data via props.

- **Send Data from Parent:**  
  Pass different values (like label, color, or click handler) from the parent component.

- **Use Props in Child:**  
  Access and display the data inside your button component.

---

## 🖥️ Example

```jsx
// Button.jsx
const Button = ({ label, onClick }) => (
  <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
    {label}
  </button>
);

// App.jsx (Parent)
<Button label="Submit" onClick={() => alert('Submitted!')} />
<Button label="Cancel" onClick={() => alert('Cancelled!')} />
```

---

> **Tip:**  
> Use props to make your React components dynamic, customizable, and reusable across your app!