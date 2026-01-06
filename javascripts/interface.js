
let sectionLinks;
let activeLink;
let projectCards;
let modal;

const ProjectData = {
  communitools: {
    title: "Communitools",
    content: "Live soon!\nInspired by borrowing infrequently used tools from my neighbours, I decided to develop a platform where users can together create a neighbourhood tool library. Depending on what a constitutes 'nearby' to a user, they will see all of the tools their neighbours have and are willing to lend out.\nBuilt with: Rails, PostgreSQL, Devise, and Bootstrap",
    link: 'link',
  },
  whereAreWe: {
    title: "Where Are We?",
    content: "Project description",
    link: false,
  },
  allRelated: {
    title: "All Related",
    content: "Project description",
    link: false,
  },
  personalWebsite: {
    title: "Personal Website",
    content: "Project description",
    link: 'link',
  },
}

function main() {
  sectionLinks = document.querySelectorAll('#tab-links a');
  projectCards = document.querySelectorAll('.card');
  modal = document.querySelector('#project-modal');
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
  projectCards.forEach( card => {
    card.addEventListener('click', handleCardClick);
  })
  modal.addEventListener('click', handleModalClick);
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

function handleCardClick(event) {
  let projectName = event.currentTarget.getAttribute('data-target');
  updateModal(projectName);
  toggleModal();
}

function updateModal(projectName) {
  const { title, content, link } = ProjectData[projectName];
  modal.querySelector('#project-title').textContent = title;
  modal.querySelector('#project-description').textContent = content;
  modal.querySelector('#project-link').textContent = link || 'Comming Soon!';
}

function handleModalClick() {
  toggleModal();
}

function toggleModal() {
  modal.classList.toggle('is-active');
}

document.addEventListener('DOMContentLoaded', main);
