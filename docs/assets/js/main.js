"use strict";const contentResultsElement=document.querySelector(".js_content_results"),contentFavElement=document.querySelector(".js_content_fav"),searchInputElement=document.querySelector(".js_input"),btnSearch=document.querySelector(".js_search_btn");let favorites=[],characters=[];function handleClick(e){e.preventDefault();const t=searchInputElement.value;contentResultsElement.innerHTML="";renderCharacters(characters.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())),contentResultsElement)}function renderCharacters(e,t){e.forEach(e=>{let r="";r=-1===favorites.findIndex(t=>t.char_id===e.char_id)?"":"selected",t.appendChild(renderOneCharacter(e,r))}),addAllListeners()}function renderOneCharacter(e,t){const r=document.createElement("li"),a=document.createElement("article"),n=document.createElement("div"),c=document.createElement("img"),s=document.createElement("h3"),i=document.createElement("p"),l=document.createTextNode(e.name),o=document.createTextNode(e.status);return r.setAttribute("class","list-element"),a.setAttribute("class","js_characters article-character "+t),a.setAttribute("id",e.char_id),i.setAttribute("class","status"),n.setAttribute("class","image-container"),c.setAttribute("src",e.img),c.setAttribute("alt",e.name),c.setAttribute("title",e.name),c.setAttribute("class","image-characters"),s.appendChild(l),i.appendChild(o),n.appendChild(c),a.appendChild(n),a.appendChild(s),a.appendChild(i),r.appendChild(a),r}function addAllListeners(){document.querySelectorAll(".js_characters").forEach(e=>e.addEventListener("click",handleClickCharacter))}function handleClickCharacter(e){e.currentTarget.classList.toggle("selected");const t=characters.find(t=>t.char_id===parseInt(e.currentTarget.id)),r=favorites.findIndex(t=>t.char_id===parseInt(e.currentTarget.id));-1===r?(favorites.push(t),localStorage.setItem("favoriteCharacters",JSON.stringify(favorites))):(favorites.splice(r,1),localStorage.setItem("favoriteCharacters",JSON.stringify(favorites))),contentFavElement.innerHTML="",renderCharacters(favorites,contentFavElement)}fetch("https://breakingbadapi.com/api/characters").then(e=>e.json()).then(e=>{characters=e,renderCharacters(characters,contentResultsElement)});const savedInFavorites=JSON.parse(localStorage.getItem("favoriteCharacters"));null!==savedInFavorites&&(favorites=savedInFavorites,renderCharacters(favorites,contentFavElement)),btnSearch.addEventListener("click",handleClick);