/* Locomotive scroll */
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  scrollFromAnywhere: true,
  reloadOnContextChange: true,
  multiplier: 0.5
});

// Set all variables
const divhero = document.querySelector('[data-scroll-id="hero-id"');
const navbarHome = document.getElementById("nav-home");
const navbarWorks = document.getElementById("nav-works");
const navbarAbout = document.getElementById("nav-about");

const targetHome = document.getElementById("hero-id");
const targetWorks = document.getElementById("works-id");
const targetAbout = document.getElementById("about-id");


// All on-scroll animation purposes
scroller.on('scroll', (args) => {
  if(typeof args.currentElements['hero-id'] === 'object') {
    let progress = args.currentElements['hero-id'].progress;
    divhero.style.opacity = 4 - ((progress * 7) - 1);
  }
});

scroller.on('call', (navMenu, state, event) => {
  if(state === "enter"){
    if(navMenu === "nav_home"){
      navbarHome.classList.add('active');
      navbarWorks.classList.remove('active');
      // navbarAbout.classList.remove('active');
      console.log(navMenu, state);
    } else {
      navbarHome.classList.remove('active');
    }
    if(navMenu === "nav_works"){
      navbarWorks.classList.add('active');
      navbarHome.classList.remove('active');
      navbarAbout.classList.remove('active');
      console.log(navMenu, state);
    } else {
      navbarWorks.classList.remove('active');
    }
    if(navMenu === "nav_about"){
      navbarAbout.classList.add('active');
      navbarWorks.classList.remove('active');
      // navbarHome.classList.remove('active');
      console.log(navMenu, state);
    } else {
      navbarAbout.classList.remove('active');
    }
  }
});

// Navbar on-click purposes
navbarHome.addEventListener("click", function(){
  scroller.scrollTo(0);
});

navbarWorks.addEventListener("click", function(){
  scroller.scrollTo(targetWorks, {'offset' : -100});
});

navbarAbout.addEventListener("click", function(){
  scroller.scrollTo(targetAbout, {'offset' : -100});
});


/* Perspective on hero */
let constrain = 100;
let mouseOverContainer = document.getElementById("hero-id");
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
