let menu = document.querySelector(".menu");
let cross = document.querySelector(".cross");


var tl = gsap.timeline();
tl.to(".sidebar", {
  right: "0%",
  duration: 0.4,
});

tl.from(".sidebar h4", {
  x: 130,
  duration: 0.4,
  stagger: 0.2,
  opacity: 0,
});

tl.pause();

menu.addEventListener('click',()=>{
    tl.play();
})

cross.addEventListener('click',()=>{
    tl.reverse();
})