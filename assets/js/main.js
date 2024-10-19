/* Remove hash on url when click on navbar */
$('.page-scroll').click(function(e){
  setTimeout(function() {
    history.replaceState(null, null, ' ');
  }, 0);
});

/* Perspective on hero */
let constrain = 100;
let mouseOverHome = document.querySelector('#home');
let ex1Layer = document.querySelector("#tilted");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  let elHeight = box.height;
  
  return "perspective(" + elHeight + "px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverHome.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};
