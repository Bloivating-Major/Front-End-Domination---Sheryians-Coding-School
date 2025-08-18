var  timeLine = gsap.timeline()

timeLine.from("nav img,h3,button", {
    y:-100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
})

timeLine.from("#heroSection h1", {
    y:100,
    opacity: 0,
    stagger:0.3
})

timeLine.from("#heroSection img", {
    scale:0,
    opacity:0,
    stagger:0.3
})