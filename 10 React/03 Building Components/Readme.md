# ⚛️ React – Components, State, and Props

Welcome to the world of React components!  
Here’s what you’ll learn about building reusable UI pieces, managing data, and passing information between components.

---

## 🧩 Creating Components

- **Folder Structure:**  
  Create a `components` folder to organize your React components.
  - Example files: `Navbar.jsx`, `SecondPage.jsx`

- **Boilerplate Shortcut:**  
  Use the `rfce` snippet in VS Code to quickly generate a functional component template.

---

## 🚀 Exporting and Importing Components

- **Export:**  
  Use `export default` to make your component available for import.
  ```js
  // Navbar.jsx
  const Navbar = () => { /* ... */ };
  export default Navbar;
  ```

- **Import:**  
  Bring your component into `App.jsx` or any other file.
  ```js
  import Navbar from './components/Navbar';
  ```

---

## 🖥️ Using Components

- Use your component in JSX with a self-closing tag:
  ```jsx
  <Navbar />
  ```

---

## 🔄 State and Props

- **State:**  
  State is data managed within a component. Use the `useState` hook to create and update state.
  ```js
  const [count, setCount] = useState(0);
  ```

- **Props:**  
  Props are used to pass data from one component to another.
  ```jsx
  <Navbar title="Home" />
  ```

---

> **Tip:**  
> Build small, reusable components and connect them with props and state for scalable React apps!