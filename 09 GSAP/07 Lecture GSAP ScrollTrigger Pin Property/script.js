gsap.to("#page2 #fixed", {
  transform: "translateY(0%)",
  duration: 10,
  ease: "linear",
  scrollTrigger: {
    trigger: "#page-wrap",
    pin: true,
    start: "top 0%", // Animation starts
        end: "top -100%", 
    scrub: 1,
    scroller: "body",
        markers: true,
  },
});

// gsap.registerPlugin(ScrollTrigger);

// gsap.to("#page2 .frame", {
//   width: "70%", // Frame expands in width
//   height: "50%", // Frame expands in height
//   scrollTrigger: {
//     trigger: "#page2", // Section triggering the animation
//     scroller: "body",
//     markers: true, // Debug markers
//     start: "top 90%", // Animation starts
//     end: "top 30%", // Animation ends
//     scrub: 2, // Smooth scroll-based animation
//   },
// });
