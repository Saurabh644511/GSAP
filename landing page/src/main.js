import "./style.css";

let counter = 0;
const counterLoader = document.querySelector('.loaderCounter')
const interval = setInterval(()=> {
  counterLoader.textContent = `${counter}%`;
  
  if(counter === 100){
    clearInterval(interval);
    gsap.to('.loaderCounter', {
      y:-60,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      onComplete: ()=> {
        handleLandingAnimation();
      }
    })
  }
  counter++;
},10)

const handleLandingAnimation= ()=> {
  const tl = gsap.timeline();

  tl.to('.loader', {
    yPercent: 100,
    duration: 1.2,
    ease: 'expo.out',
  }).from('.imageDiv img', {
     scale:1.2,
     duration:2,
     ease: 'power3.out'
  },"<").from('.contentDiv h1', {
    y:200,
    duration:1.7,
    ease: 'power3.out'
  }, "-=1.3").from('.contentDiv h2', {
    y:200,
    duration:1.4,
    ease: 'power3.out'
  }, "-=1.5")
}