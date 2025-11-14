
let curriculum;

function main() {
  curriculum = document.querySelector('#curriculum');
  setupEventListeners();
}

function setupEventListeners() {
  curriculum.addEventListener('click', handleCurriculumClick);
}

function handleCurriculumClick(event) {
  event.preventDefault();
  this.nextElementSibling.classList.toggle('hide');
}

document.addEventListener('DOMContentLoaded', main);
