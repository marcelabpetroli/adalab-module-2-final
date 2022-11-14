'use strict';

// Fetch data
fetch('https://breakingbadapi.com/api/characters')
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
