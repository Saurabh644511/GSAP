import "./style.css";

// stagger means ek ke bad ek div animate diye gaye time ke hisab se agar stagger ki value + me denge to animation upar se chalega aur - me denge to animation niche se chalega

// yoyo: the animation smoothly plays backward, then forward again, and so on.

// gsap.to('.box', {
//   x:1200,
//   duration: 1.5,
//   delay: 1,
//   repeat: 4,
//   yoyo: true,
//   repeatDelay: 1,
//   backgroundColor: 'green',
//   stagger: -0.3
// })

// For the arrow type animations we can use stagger with object values  // center, edges, start, end, random
gsap.to('.box', {
  x:1200,
  duration: 1.5,
  delay: 1,
  repeat: 4,
  yoyo: true,
  repeatDelay: 1,
  backgroundColor: 'green',
  stagger: {
    each: 0.2,
    from: "random"
  }
})
