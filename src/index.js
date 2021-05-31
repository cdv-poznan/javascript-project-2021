'use strict';

import './index.scss';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

/*
details of the game - 
1: game art
2: info - name, released, platforms > requirements, metacritic

3: screenshots

bottom: stores that sell the game - https://api.rawg.io/api/games/{game_pk}/stores


*if time allows it - some SteamWorks stats

*/

const btn = document.querySelector('.input-btn');
const allInfo = document.querySelector('.game-info');
const inputForm = document.querySelector('.input-form');

// fetching game's data, putting it into renderGame function
const getGameData = function (game) {
  return fetch(
    `https://api.rawg.io/api/games?key=3a4e64a027444e258be25283e5bd967a&search_precise=true&search="${game}"`,
  )
    .then(response => response.json())
    .then(data => {
      if (data.count === 0) {
        alert(`Game ${game} not found!`);
      } else {
        return data;
      }
    })

    .catch(err => console.log(`error: ${err}`));
};

// rendering html with fetched data
const renderGame = function (data) {
  const gameID = data.results[0].id;

  //fetching by ID
  fetch(
    `https://api.rawg.io/api/games/${gameID}?key=3a4e64a027444e258be25283e5bd967a`,
  )
    .then(response => response.json())
    .then(data2 => {
      let releaseTime;
      if (data2.tba === true) {
        releaseTime = 'TBA';
      } else {
        releaseTime = `${data2.released} (${dayjs().to(
          dayjs(data2.released),
        )})`;
      }

      let metacriticScore;
      if (data2.metacritic === null) {
        metacriticScore = 'Game not found on Metacritic';
      } else {
        metacriticScore = data2.metacritic;
      }

      // // render html with data and insert it into the DOM
      const html = `
      	  <div class="imgtitle">

      	  <img class="game-art" src=${data2.background_image}>

      	  <div class="art-title">${data2.name}</div>
      	  </div>

      	  <div class="info-container">
      	  <div class="released"><h2>Released:</h2> ${releaseTime}</div><br>

      	  <div class="description"> ${data2.description}
      	  </div><br>

      	  <div class="metacritic"> <h2>Metacritic Score:</h2> ${metacriticScore}
      	  </div><br>
      		<div class="platforms-title"><h2>Platforms:</h2></div><br>
      	  <div class="platforms">
      	  </div><br>

          <!--
      	  <div class="pc-requirements"> <h2>PC Requirements:</h2><br>
      	  <h3 class="min-req">Minimum:</h3> <br>
      	  <h3 class="rec-req">Recommended:</h3> <br>
      	  </div><br>
          --> 

      	  <div class="screenshots">
      	  </div><br>
        `;

      allInfo.insertAdjacentHTML('beforeend', html);

      // insert screenshots into html
      fetch(
        `https://api.rawg.io/api/games/${gameID}/screenshots?key=3a4e64a027444e258be25283e5bd967a`,
      )
        .then(response => response.json())
        .then(data3 => {
          const image = [];
          for (let i = 0; i <= data3.results.length && i <= 4; i++) {
            image[i] = document.createElement('img');
            image[i].src = data3.results[i].image;
            document.querySelector('.screenshots').appendChild(image[i]);
          }
        });
      //insert game's platforms
      fetch(
        `https://api.rawg.io/api/games/${gameID}?key=3a4e64a027444e258be25283e5bd967a`,
      )
        .then(response => response.json())
        .then(data4 => {
          const platform = [];

          for (let a = 0; a !== data4.platforms.length; a++) {
            platform[a] = document.createElement('div');
            platform[a].classList.add('platform-container');
            platform[a].innerHTML = data4.platforms[a].platform.name;
            document.querySelector('.platforms').appendChild(platform[a]);
          }

          // min and recommended PC requirements - works, but a lot of games are missing info and some give super long or unexpected results

          // const minRequirements = document.createElement('p');
          // const recRequirements = document.createElement('p');
          // minRequirements.innerHTML = 'Not released on PC';
          // recRequirements.innerHTML = 'Not released on PC';
          // for (let b = 0; b !== data4.platforms.length; b++) {
          //   //if platform == PC => insert min and rec req
          //   if (data4.platforms[b].platform.name === 'PC') {
          //     minRequirements.innerHTML =
          //       data4.platforms[b].requirements.minimum;
          //     recRequirements.innerHTML =
          //       data4.platforms[b].requirements.recommended;
          //   }
          // }
          // document.querySelector('.min-req').appendChild(minRequirements);
          // document.querySelector('.rec-req').appendChild(recRequirements);
        });
    });
};

// action on click -> getting name and putting it into getGameData function
inputForm.addEventListener('submit', function () {
  allInfo.innerHTML = ``;
  const gameName = document.querySelector('.game-name').value;
  getGameData(gameName).then(data => renderGame(data));
});
