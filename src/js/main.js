'use strict';

// Fetch data
fetch('./assets/data/data.json')
  .then((response) => response.json())
  .then((json) => {
    characters = json;
    renderAll(characters, contentResultsElement);
  });

const savedInFavorites = JSON.parse(localStorage.getItem('favoriteCharacters'));
if (savedInFavorites !== null) {
  favorites = savedInFavorites;
  renderFavorites(favorites, contentFavElement);
}

btnSearch.addEventListener('click', handleClick);
