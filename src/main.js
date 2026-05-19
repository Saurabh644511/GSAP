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

// For various types of animations we can use stagger with object values  // center, edges, start, end, random
// gsap.to('.box', {
//   x:1200,
//   duration: 1.5,
//   delay: 1,
//   repeat: 4,
//   yoyo: true,
//   repeatDelay: 1,
//   backgroundColor: 'green',
//   stagger: {
//     each: 0.2,
//     from: "center"
//   }
// })

// The on-related properties are essentially callbacks. They’re super handy for triggering custom logic when animations start, update, or complete.
// like onStart → Fires when the tween/timeline begins.
// onUpdate → Fires every time the tween updates (e.g., on each frame).
// onComplete → Fires once the tween finishes.
// onRepeat → Fires each time a repeat cycle begins.
// onReverseComplete → Fires when a reversed tween finishes going back to its start.
// gsap.to(".box", {
//   x:500,
//   duration: 1.5,
//   delay: 1,
//   backgroundColor: 'blue',
//   repeat: 1,
//   onComplete: ()=> {
//     console.log("Animation end")
//   }
// })

// Jab bahut sare different types of element ho aur ham chahte hai ki ek ke bad ek chale to ham delay properties ka use karke calculation karke (delay+duration) value de   sakte hai lekin jab element jyada ho to timeline lagate hai

// Manual calculation
// gsap.to(".box", {
//   x: 500,
//   duration: 1.5,
//   delay: 1,
//   backgroundColor: "blue",
// });
// gsap.to(".box2", {
//   x: 1000,
//   duration: 1.5,
//   delay: 2.5,
//   backgroundColor: "blue",
// });

// With timeline
// syntax: gsap.timeline()
// Note: Timeline delay bhi calculate karta hai

// Note : Chaining me jo properties bar-bar repeat hoti hai uska value defaults set kr dete hai

// const tl = gsap.timeline({
//   defaults: {
//     duration: 1.5,
//     ease: "bounce.out"
//   }
// });

// tl.to(".box", {
//   x: 500,
//   // duration: 1.5,
//   backgroundColor: "blue",
// }).to(".box2", {
//   x: 1000,
//   // duration: 1.5,
//   backgroundColor: "blue",
// }).to(".box3", {
//   x: 800,
//   // duration: 1.5,
//   backgroundColor: "blue",
// })

// Position parameter
const tl = gsap.timeline({
  defaults: {
    duration: 1.5,
    ease: "bounce.out",
  },
});

tl.to(".box", {
  x: 500,
  // duration: 1.5,
  backgroundColor: "blue",
})
  .to(".box2", {
    x: 1000,
    // duration: 1.5,
    backgroundColor: "blue",
    delay:1,
  }, 2.3) 
  .to(".box3", {
    x: 800,
    // duration: 1.5,
    backgroundColor: "blue",
  });
