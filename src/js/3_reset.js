'use strict';

function resetFavorites(event) {
  event.preventDefault();
  contentFavElement.innerHTML = '';
  favorites = [];
  localStorage.removeItem('favoriteCharacters');
  contentResultsElement.innerHTML = '';

  renderAll(characters, contentResultsElement);
}
