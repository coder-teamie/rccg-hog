const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const socialIcons = document.querySelector('.social-icons');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
  socialIcons.classList.toggle('show-links');
});
