'use strict';

const highlightedLinks = document.querySelectorAll('.js__link');
const allArticles = document.querySelectorAll('.js__article');
const allSmallArticles = document.querySelectorAll('.js__articleSmall');
const allFullArticles = document.querySelectorAll('.js__articleFull');
const allFullArrows = document.querySelectorAll('.js__fullArrow');

// Maneja la selección de un link destacado
const handleHighlight = (ev) => {
    const selectedItem = ev.currentTarget;
    highlightedLinks.forEach(button => button.classList.remove('selected'));
    selectedItem.classList.add('selected');
}

// Muestra el artículo completo y cierra todos los demás
const handleArticleDisplay = (ev) => {
    const selectedItem = ev.currentTarget;
    const article = selectedItem.closest('.js__article');  // Encuentra el contenedor del artículo correspondiente
    const fullArticle = article.querySelector('.js__articleFull'); // Encuentra el artículo completo dentro del contenedor
    const smallArticle = article.querySelector('.js__articleSmall'); // Encuentra el artículo pequeño dentro del contenedor

    // Primero, oculta todos los artículos completos
    allFullArticles.forEach(article => article.classList.add('hidden'));
    
    // Luego, oculta todos los artículos pequeños
    allSmallArticles.forEach(article => article.classList.remove('hidden'));

    // Oculta solo el artículo pequeño dentro del contenedor actual
    smallArticle.classList.add('hidden');
    
    // Muestra solo el artículo completo relacionado
    fullArticle.classList.remove('hidden');
}

// Oculta el artículo completo y vuelve a mostrar SOLO el artículo pequeño relacionado
const handleArticleHide = (ev) => {
    const selectedItem = ev.currentTarget;
    const article = selectedItem.closest('.js__article'); // Encuentra el contenedor del artículo correspondiente
    const smallArticle = article.querySelector('.js__articleSmall'); // Encuentra el artículo pequeño dentro del contenedor
    const fullArticle = article.querySelector('.js__articleFull'); // Encuentra el artículo completo dentro del contenedor

    // Oculta el artículo completo relacionado
    fullArticle.classList.add('hidden');
    
    // Muestra de nuevo el artículo pequeño relacionado
    smallArticle.classList.remove('hidden');
}

// Asocia eventos a los links destacados
for (const button of highlightedLinks) {
    button.addEventListener('click', handleHighlight);
}

// Asocia eventos a los artículos pequeños para mostrar el artículo completo
for (const article of allSmallArticles) {
    article.addEventListener('click', handleArticleDisplay);
}

// Asocia eventos a las flechas para ocultar el artículo completo
for (const arrow of allFullArrows) {
    arrow.addEventListener('click', handleArticleHide);
}
