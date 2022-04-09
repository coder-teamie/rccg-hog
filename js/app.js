const navToggle = document.getElementById('nav-toggle');
// const navLinks = document.querySelector('.nav-links');
// const socialIcons = document.querySelector('.social-icons');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('show-links');
});
