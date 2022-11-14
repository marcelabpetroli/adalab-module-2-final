'use strict';

// Function to create html for each character
function handleClick(event) {
  event.preventDefault();
  const inputValue = searchInputElement.value;
  contentResultsElement.innerHTML = '';

  const filteredCharacters = characters.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(inputValue));

  renderCharacters(filteredCharacters, contentResultsElement);
}

function renderCharacters(characArray, container) {
  characArray.forEach((element) => {
    const characterInFavoritesIndex = favorites.findIndex((character) => character.char_id === element.char_id);

    let classFavorite = '';
    if (characterInFavoritesIndex === -1) {
      classFavorite = '';
    } else {
      classFavorite = 'selected';
    }
    container.appendChild(renderOneCharacter(element, classFavorite));
  });
  addAllListeners();
}

function renderOneCharacter(element, classFav) {
  const listElement = document.createElement('li');
  const articleElement = document.createElement('article');
  const imageElement = document.createElement('img');
  const nameElement = document.createElement('h3');
  const statusElement = document.createElement('p');

  const title = document.createTextNode(element.name);
  const status = document.createTextNode(element.status);

  articleElement.setAttribute('class', `js_characters characters ${classFav}`);
  articleElement.setAttribute('id', element.char_id);
  imageElement.setAttribute('src', element.img);
  imageElement.setAttribute('alt', element.name);
  imageElement.setAttribute('title', element.name);
  imageElement.setAttribute('class', 'image-characters');

  nameElement.appendChild(title);
  statusElement.appendChild(status);
  articleElement.appendChild(imageElement);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(statusElement);
  listElement.appendChild(articleElement);

  return listElement;
}

function addAllListeners() {
  const allArticles = document.querySelectorAll('.js_characters');

  allArticles.forEach((element) => element.addEventListener('click', handleClickCharacter));
}

function handleClickCharacter(event) {
  event.currentTarget.classList.toggle('selected');

  const selectedCharacter = characters.find((character) => character.char_id === parseInt(event.currentTarget.id));

  const characterInFavoritesIndex = favorites.findIndex((character) => character.char_id === parseInt(event.currentTarget.id));

  if (characterInFavoritesIndex === -1) {
    favorites.push(selectedCharacter);

    localStorage.setItem('favoriteCharacters', JSON.stringify(favorites));
  } else {
    favorites.splice(characterInFavoritesIndex, 1);
    localStorage.setItem('favoriteCharacters', JSON.stringify(favorites));
  }

  contentFavElement.innerHTML = '';
  renderCharacters(favorites, contentFavElement);
}
