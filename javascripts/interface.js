
let sectionLinks;
let activeLink;
let projectCards;
let modal;

import ProjectData from '../project_data.json' with { type: 'json' };

function main() {
  sectionLinks = document.querySelectorAll('#tab-links a');
  renderCards();
  modal = document.querySelector('#project-modal');
  setActiveLink();
  setupEventListeners();
}
function renderCards() {
  const container = document.querySelector('.grid');
  Object.entries(ProjectData).forEach( ([key, data]) => {
    const newCard = document.createElement('div');
    newCard.className = 'cell mb-5 card';
    newCard.setAttribute('data-target', key);
    let cardHead = document.createElement('div')
    let cardContent = document.createElement('div')
    
    cardHead.className = 'card-header';
    cardContent.className = 'card-content';

    let cardHeadData = data.title;
    let cardContentData = data.cardContent;
    
    cardHead.insertAdjacentHTML('afterbegin', `<p class='card-header-title is-centered'>${cardHeadData}</p>`);
    cardContent.insertAdjacentHTML('afterbegin', `<div class='content'>${cardContentData}</div>`);
    
    newCard.append(cardHead, cardContent);
    container.append(newCard);
  });

  projectCards = document.querySelectorAll('.card');
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
  modal.querySelector('#project-description').insertAdjacentHTML('afterbegin', stringsToElements(content));
  let aElement = modal.querySelector('#project-link');
  if (link) {
    aElement.href = link;
    aElement.textContent = 'Visit project';
  } else {
    aElement.textContent = 'Comming soon...';
  }
}

function stringsToElements(content) {
  return content.map( string => `<p>${string}</p>` )
                .join('');
}

function handleModalClick() {
  toggleModal();
  resetModalData();
}

function resetModalData() {
  modal.querySelector('#project-title').textContent = '';
  modal.querySelector('#project-description').innerHTML = '';
  modal.querySelector('#project-link').href = '#';
  modal.querySelector('#project-link').textContent = 'Comming soon...';
}

function toggleModal() {
  modal.classList.toggle('is-active');
}

document.addEventListener('DOMContentLoaded', main);
