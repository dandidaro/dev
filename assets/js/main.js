/* Locomotive scroll */
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 0.5
});

const divhero = document.querySelector('[data-scroll-id="hero"');

scroller.on('scroll', (args) => {
  if(typeof args.currentElements['hero'] === 'object') {
    let progress = args.currentElements['hero'].progress;
    console.log(progress);
    divhero.style.opacity = 4 - ((progress * 8) - 1);
    divhero.style.scale = 1 - ((progress * 2) - 1);
  }
});

const navbarHome = document.getElementById("navhome");
const targetHome = document.getElementById("hero-id");

const navbarWorks = document.getElementById("navworks");
const targetWorks = document.getElementById("works-id")


navbarHome.addEventListener("click", function(){
  scroller.scrollTo(0);
  navbarHome.classList.add("active");
  navbarWorks.classList.remove("active");
});

navbarWorks.addEventListener("click", function(){
  scroller.scrollTo(targetWorks);
  navbarWorks.classList.add("active");
  navbarHome.classList.remove("active");
});

/* Perspective on hero */
let constrain = 100;
let mouseOverContainer = document.getElementById("hero");
let ex1Layer = document.getElementById("tilted");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(250px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};
