var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', moveCursor)


function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

var navLink = document.querySelectorAll(".nav-link, a, .work-card");

navLink.forEach(navLink => {
  navLink.addEventListener('mousemove', function() {
    cursor.classList.add('hover-cursor');
  })
  navLink.addEventListener('mouseleave', function () {
    cursor.classList.remove('hover-cursor');
  })
})