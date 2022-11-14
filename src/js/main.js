'use strict';

// Fetch data
fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((json) => {
    characters = json;
    renderCharacters(characters, contentResultsElement);
  });

const savedInFavorites = JSON.parse(localStorage.getItem('favoriteCharacters'));
if (savedInFavorites !== null) {
  favorites = savedInFavorites;
  renderCharacters(favorites, contentFavElement);
}

btnSearch.addEventListener('click', handleClick);
