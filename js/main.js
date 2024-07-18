'use strict';

const toolsTexts = document.querySelectorAll('.js__toolsText');
const toolsBoxes = document.querySelectorAll('.js__toolsBox');

function displayToolsBox(ev){
    ev.preventDefault();

    const btnPressed = ev.currentTarget;

    const clickedDiv = btnPressed.closest('.links--section');
    const clickedParagraph = clickedDiv.querySelector('.js__toolsBox');

    clickedParagraph.classList.toggle('visible');
}

for (const toolText of toolsTexts){
    toolText.addEventListener('click', displayToolsBox);
}

