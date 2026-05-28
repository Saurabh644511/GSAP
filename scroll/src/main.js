import './style.css'
// const tl = gsap.timeline({paused: true});

// tl.to('.box', {
//   delay: 1,
//   x:800,
//   duration: 1,
// })
// tl.to('.box2', {
//   x:800,
//   duration: 1,
// })
// tl.to('.box3', {
//   x:800,
//   duration: 1,
// })
// tl.to('.box4', {
//   x:800,
//   duration: 1,
// })

// const button = document.querySelector(".button")

// button.addEventListener("click", ()=> {
//   tl.play()
// })

// const button1 = document.querySelector(".button1")

// button1.addEventListener("click", ()=> {
//   // tl.reverse()
//   // tl.seek(4)  //  moves the playhead to a specific time (4) in the timeline.
//   // tl.timeScale(0.2) // for increasing the time 
//   tl.restart(); // restart the animation
// })

// // play, pause, restart, seek, timeScale, restart -->> timeline control

// Scroll Animation takes 3 things :
// 1. trigger element(animation jis par lagana ho )
// 2. start (takes two things-->> trigger position(top, center, bottom) and viewport position(top, center, bottom or we can also write as (0%, 50%, 100%)))
// 3. end (end ka value hamesha start se kam hi dena hai)
// markers: true (markers property is used for check that animation that is applied correct or not? (may be true or false))
// scrub: true (scrub is used when we want that our element animate based on our scrolling (may be true, false or any number) scrub ki value badhane se animation aur smooth ho jata hai)
gsap.to(".box", {
  x:900,
  duration: 1.5,
  delay: 1,
  backgroundColor: "blue",
  scrollTrigger: {
    trigger: '.boxDiv',
    start: 'top, 50%',
    end: 'center 20%',
    markers: true,
    scrub: true,
    pin: true
  }
})
