# 🎵 React Component Reusability & Event Handling – SongCard Example

Welcome to the world of **component reusability** and **event handling** in React!  
This module demonstrates how to build a reusable `SongCard` component that plays different songs and responds to user actions.

---

## 🧩 What’s Inside?

- **Reusable Component:**  
  The `SongCard` displays multiple songs using a single, flexible component.
- **Event Handling:**  
  Play, pause, and resume audio with button clicks.
- **Dynamic Data:**  
  Song details are stored in an array and rendered with `.map()` for scalability.

---

## 🚀 How It Works

- **Import Songs:**  
  Audio files are imported and used as sources for playback.
- **Play Song:**  
  Clicking "Play Now" pauses any current audio and plays the selected track.
- **Pause & Resume:**  
  Functions are ready to pause or resume playback (expandable for more controls).
- **Styling:**  
  Uses Tailwind CSS for a modern, responsive look.

---

## 💡 Key Concepts

- **Component Reusability:**  
  Build once, use everywhere! The same `SongCard` logic displays any song from the data array.
- **Event Handling:**  
  Functions like `playSong`, `pauseSong`, and `resumeSong` respond to user interactions.
- **Mapping Data:**  
  The `.map()` method renders each song card dynamically.

---

## 🖥️ Example Usage

```jsx
{data.map((elem, index) => (
  <div key={index} className="w-64 px-3 py-2 bg-black rounded">
    <h3 className="text-xl font-semibold text-white">{elem.name}</h3>
    <p className="mt-2 text-xs text-white">{elem.description}</p>
    <button
      onClick={() => playSong(elem.song)}
      className="px-2 py-1 mt-3 text-xs text-white rounded-md bg-violet-700"
    >
      {elem.button}
    </button>
  </div>
))}
```

---

> **Tip:**  
> Use arrays and `.map()` to make your React components scalable and reusable.  
> Handle events with functions for interactive, user-friendly applications.