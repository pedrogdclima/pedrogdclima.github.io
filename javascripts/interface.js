
let sectionLinks;
let activeLink;

function main() {
  sectionLinks = document.querySelectorAll('#tab-links a');
  setActiveLink();
  setupEventListeners();
}

function setActiveLink() {
  activeLink = document.querySelector('.is-active');
}

function setupEventListeners() {
  sectionLinks.forEach( link => {
    link.addEventListener('click', handleTabClick);
  })
}

function handleTabClick(event) {
  event.preventDefault();
  let activeId = activeLink.firstElementChild.id;
  if (activeId == this.id) return;
  activeLink.classList.toggle('is-active');
  this.parentElement.classList.toggle('is-active');
  document.querySelector(`section#${activeId}`).classList.toggle('is-hidden');
  document.querySelector(`section#${this.id}`).classList.toggle('is-hidden');
  setActiveLink();
}

document.addEventListener('DOMContentLoaded', main);
