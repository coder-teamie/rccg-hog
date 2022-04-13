// *** Navigation *** // more work to come..
const navToggle = document.getElementById('nav-toggle');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('show-links');
});

const dates = document
  .querySelectorAll('.date')
  .forEach((date) => (date.innerHTML = new Date().getFullYear()));
