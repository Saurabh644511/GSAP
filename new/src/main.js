import './style.css'


const tl = gsap.timeline({paused: true});

tl.to('.box', {
  delay: 1,
  x:800,
  duration: 1,
})
tl.to('.box2', {
  x:800,
  duration: 1,
})
tl.to('.box3', {
  x:800,
  duration: 1,
})
tl.to('.box4', {
  x:800,
  duration: 1,
})

const button = document.querySelector(".button")

button.addEventListener("click", ()=> {
  tl.play()
})

const button1 = document.querySelector(".button1")

button1.addEventListener("click", ()=> {
  // tl.reverse()
  // tl.seek(4)  //  moves the playhead to a specific time (4) in the timeline.
  // tl.timeScale(0.2) // for increasing the time 
  tl.restart(); // restart the animation
})

// play, pause, restart, seek, timeScale, restart -->> timeline control
