// PRELOADER
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(function() {
    preloader.style.display = 'none';
  }, 500);
});

// DARK MODE
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  if (document.body.classList.contains('dark')) {
    darkToggle.textContent = '☀️';
  } else {
    darkToggle.textContent = '🌙';
  }
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navAuth = document.getElementById('navAuth');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  navAuth.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  const isClickInside = hamburger.contains(event.target) || navLinks.contains(event.target) || navAuth.contains(event.target);
  if (!isClickInside) {
    navLinks.classList.remove('open');
    navAuth.classList.remove('open');
  }
});

// MODAL FUNCTIONS
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const modalOverlay = document.getElementById('modalOverlay');

function openModal(modal) {
  modal.classList.add('active');
  modalOverlay.classList.add('active');
}

function closeAllModals() {
  loginModal.classList.remove('active');
  signupModal.classList.remove('active');
  modalOverlay.classList.remove('active');
}

document.getElementById('openLogin').addEventListener('click', function() {
  openModal(loginModal);
});

document.getElementById('openSignup').addEventListener('click', function() {
  openModal(signupModal);
});

document.getElementById('heroSignup').addEventListener('click', function() {
  openModal(signupModal);
});

document.getElementById('closeLogin').addEventListener('click', closeAllModals);
document.getElementById('closeSignup').addEventListener('click', closeAllModals);
modalOverlay.addEventListener('click', closeAllModals);

document.getElementById('switchToSignup').addEventListener('click', function() {
  closeAllModals();
  openModal(signupModal);
});

document.getElementById('switchToLogin').addEventListener('click', function() {
  closeAllModals();
  openModal(loginModal);
});

// LOGIN VALIDATION
document.getElementById('submitLogin').addEventListener('click', function() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  let valid = true;

  document.getElementById('loginEmailError').textContent = '';
  document.getElementById('loginPasswordError').textContent = '';

  if (!email) {
    document.getElementById('loginEmailError').textContent = 'Email is required.';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('loginEmailError').textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (!password) {
    document.getElementById('loginPasswordError').textContent = 'Password is required.';
    valid = false;
  }

  if (valid) {
    closeAllModals();
    alert('Login successful! Welcome back.');
  }
});

// SIGNUP VALIDATION
document.getElementById('submitSignup').addEventListener('click', function() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  let valid = true;

  document.getElementById('signupNameError').textContent = '';
  document.getElementById('signupEmailError').textContent = '';
  document.getElementById('signupPasswordError').textContent = '';

  if (!name) {
    document.getElementById('signupNameError').textContent = 'Full name is required.';
    valid = false;
  }

  if (!email) {
    document.getElementById('signupEmailError').textContent = 'Email is required.';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('signupEmailError').textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (!password) {
    document.getElementById('signupPasswordError').textContent = 'Password is required.';
    valid = false;
  } else if (password.length < 6) {
    document.getElementById('signupPasswordError').textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (valid) {
    closeAllModals();
    alert('Account created successfully! Welcome to Blogr.');
  }
});

// CONTACT FORM VALIDATION
document.getElementById('submitContact').addEventListener('click', function() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  let valid = true;

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMsg').textContent = '';

  if (!name) {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  }

  if (!email) {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (!message) {
    document.getElementById('messageError').textContent = 'Message is required.';
    valid = false;
  }

  if (valid) {
    document.getElementById('successMsg').textContent = 'Message sent successfully! We will get back to you soon.';
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
  }
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.8s ease forwards';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.portfolio-card, .team-card, .about-grid, .feature-text, .state-content, .free-open-text').forEach(function(el) {
  el.style.opacity = '0';
  observer.observe(el);
});
