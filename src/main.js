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

// Position parameter: the position parameter is what decides when a tween runs relative to others. 
// 1. Absolute time (numbers or labels): 0, 1.5, "labelName"
//  Places the tween at that exact time or label in the timeline.

// 2. Relative time (+= / -=): "+=1" → start 1 second after the previous tween ends.
// " -=0.5" → start 0.5 seconds before the previous tween ends.

// 3. "<" (play at same time as previous): " <" → aligns the tween’s start with the start of the previous tween.
// " <+=0.5" → start 0.5s after the previous tween’s start.

// 4. ">" (play after previous ends): " >" → aligns the tween’s start with the end of the previous tween.
// " >-=0.25" → start 0.25s before the previous tween ends.

// const tl = gsap.timeline({
//   defaults: {
//     duration: 1.5,
//     ease: "bounce.out",
//   },
// });

// tl.to(".box", {
//   x: 500,
//   // duration: 1.5,
//   backgroundColor: "blue",
// })
//   .to(".box2", {
//     x: 1000,
//     // duration: 1.5,
//     backgroundColor: "blue",
//     delay:1,
//   }, "+=0.7") 
//   .to(".box3", {
//     x: 800,
//     // duration: 1.5,
//     backgroundColor: "blue",
//   });


// Labels in position parameters: Here we can use any variables for giving same animations on two or more than two elements ex: "same", "label1" or etc...

// labels are like named bookmarks you drop inside a timeline. They make it easier to align animations without worrying about exact seconds.

// We can also use position parameters and labels together. For Ex: Position Parameter + Labels
// "label" → start exactly at the label.
// "label+=1" → start 1s after the label.
// "label-=0.5" → start 0.5s before the label.
// "label<" → align with the start of the tween that begins at "label".
// "label>" → align with the end of the tween that begins at "label".

const tl = gsap.timeline({
  defaults: {
    duration: 1.5,
    ease: "bounce.out",
  },
});

tl.to(".box", {
  x: 500,
  // delay:1,
  backgroundColor: "blue",
},"same")
  .to(".box2", {
    x: 1000,
    backgroundColor: "blue",
    
  }) 
  .to(".box3", {
    x: 1300,
    backgroundColor: "blue",
  },"same")
  .to(".box4", {
    x: 1500,
    backgroundColor: "blue",
  }) 
  .to(".box5", {
    x: 700,
    backgroundColor: "blue",
  },"same");


