# 🟢 GSAP – GreenSock Animation Platform

GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance, complex animations on the web.  
It’s widely used by professionals for its speed, flexibility, and ease of use.

---

## 🚀 Why Use GSAP?

- **Super Fast:** GSAP animations are highly optimized for performance.
- **Cross-Browser:** Works consistently across all major browsers.
- **Feature-Rich:** Supports timelines, easings, staggering, SVG, CSS, canvas, and more.
- **Plugin Ecosystem:** Extend GSAP with plugins like ScrollTrigger, Draggable, MorphSVG, and more.
- **Easy Syntax:** Animate any property of any object with simple, readable code.

---

## 🌐 Getting Started

### 1. **CDN (Content Delivery Network)**

Add GSAP to your project using a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

Or for plugins (example: ScrollTrigger):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

---

## ✨ Basic Usage

```js
// Animate an element to move 100px to the right and fade out
gsap.to(".box", { x: 100, opacity: 0, duration: 1 });
```

- `.to()` animates properties to given values.
- `.from()` animates from given values to current state.
- `.fromTo()` animates from one set of values to another.

---

## 🕹️ Timeline Animations

GSAP timelines let you sequence multiple animations:

```js
const tl = gsap.timeline();
tl.to(".box", { x: 100, duration: 1 })
  .to(".box", { y: 50, duration: 1 })
  .to(".box", { rotation: 360, duration: 1 });
```

---

## 🎯 Popular GSAP Plugins

- **ScrollTrigger:** Animate elements on scroll.
- **Draggable:** Make elements draggable.
- **TextPlugin:** Animate text changes.
- **MorphSVG:** Morph SVG shapes.

---

## 🧩 Common GSAP Methods

- `gsap.to()` – Animate to values
- `gsap.from()` – Animate from values
- `gsap.fromTo()` – Animate from and to values
- `gsap.timeline()` – Sequence animations
- `gsap.set()` – Instantly set properties

---

## 🎨 What Can You Animate?

- CSS properties (position, color, scale, rotation, etc.)
- SVG attributes
- JavaScript object properties
- Canvas elements

---

## 💡 Pro Tips

- Use timelines for complex sequences.
- Combine GSAP with plugins for scroll-based or interactive animations.
- GSAP works great with frameworks like React, Vue, and Angular.

---

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [CodePen GSAP Collection](https://codepen.io/collection/nVYWZR)
- [ScrollTrigger Plugin](https://greensock.com/scrolltrigger/)
- [GSAP Starter Guide](https://greensock.com/get-started/)

---

> **Experiment, animate, and bring your web projects to life with GSAP!**