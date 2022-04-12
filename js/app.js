// *** Navigation *** // more work to come..
const navToggle = document.getElementById('nav-toggle');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('show-links');
});

const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());
