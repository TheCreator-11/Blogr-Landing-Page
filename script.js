const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navAuth = document.querySelector('.nav-auth');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  navAuth.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  const isClickInside = hamburger.contains(event.target) || navLinks.contains(event.target);
  if (!isClickInside) {
    navLinks.classList.remove('open');
    navAuth.classList.remove('open');
  }
});
