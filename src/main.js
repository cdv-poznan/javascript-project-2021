import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import { doc } from 'prettier';

const firebaseConfig = {
  apiKey: 'AIzaSyCNxR65H1cPxr0fgxM7B9yaBqf-UlunAo4',
  authDomain: 'betterbetsiteproject.firebaseapp.com',
  projectId: 'betterbetsiteproject',
  storageBucket: 'betterbetsiteproject.appspot.com',
  messagingSenderId: '905149843073',
  appId: '1:905149843073:web:bf1c4e31099ddd3e61af80',
  measurementId: 'G-B8LDMLJB99',
};
firebase.initializeApp(firebaseConfig);

//CLOCK MECHANISM
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
  var day = new Date();
  var hh = day.getHours() * 30;
  var mm = day.getMinutes() * deg;
  var ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

// POPUP WINDOWS
// LOG IN POPUP MECHANISM
const logInButton = document.querySelector('#login-start-button');
const closeButtonLogin = document.querySelector('.close-button-login');
const frontSection = document.querySelector('.overlay');

logInButton.addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'grid';
  frontSection.classList.add('active');
});

closeButtonLogin.addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
  frontSection.classList.remove('active');
});

frontSection.addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'none';
  frontSection.classList.remove('active');
});

// REMEMMBER ME IN LOCALSTORAGE
const remMe = document.querySelector('#rememberMe');
const emailInput = document.querySelector('#email-field');
const loggingInButton = document.querySelector('#login-button');

if (localStorage.checkbox && localStorage.checkbox !== '') {
  remMe.setAttribute('checked', 'checked');
  emailInput.value = localStorage.username;
} else {
  remMe.removeAttribute('checked');
  emailInput.value = '';
}

loggingInButton.addEventListener('click', () => {
  if (remMe.checked && emailInput.value !== '') {
    localStorage.username = emailInput.value;
    localStorage.checkbox = remMe.value;
  } else {
    localStorage.username = '';
    localStorage.checkbox = '';
  }
});

// SIGN IN POPUP MECHANISM
const signInButton = document.querySelector('#signin-start-button');
const closeButtonSign = document.querySelector('.close-button-sign');

signInButton.addEventListener('click', () => {
  document.querySelector('.popup-sign').style.display = 'grid';
  frontSection.classList.add('active');
});

closeButtonSign.addEventListener('click', () => {
  document.querySelector('.popup-sign').style.display = 'none';
  frontSection.classList.remove('active');
});

frontSection.addEventListener('click', () => {
  document.querySelector('.popup-sign').style.display = 'none';
  frontSection.classList.remove('active');
});

// NEW ACCOUNT MECHANISM
const signButton = document.querySelector('#sub-button');
const loginData = document.querySelector('#sign-email');
const passwordData = document.querySelector('#sign-password');
const passwordAgaData = document.querySelector('#sign-aga-password');
const emailVer = document.getElementById('email-wrong');
const passVer = document.getElementById('password-wrong');
const passVerSec = document.getElementById('password-wrong-twice');
const signupError = document.querySelector('.signup-error');
const signupSucces = document.querySelector('#popup-succesfull');
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbersVal = /[0-9]/g;
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

signButton.addEventListener('click', () => {
  if (loginData.value === '') {
    emailVer.innerHTML = '***Field E-mail is empty.';
  } else if (!loginData.value.match(mailFormat)) {
    emailVer.innerHTML = '***Entered a invalid e-mail address.';
  } else if (passwordData.value === '') {
    passVer.innerHTML = '***Field Password is empty';
  } else if (!passwordData.value.match(lowerCaseLetters)) {
    passVer.innerHTML =
      '***Password should must contain minimum one lower case letter.';
  } else if (!passwordData.value.match(upperCaseLetters)) {
    passVer.innerHTML =
      '***Password should must contain minimum one upper case letter.';
  } else if (!passwordData.value.match(numbersVal)) {
    passVer.innerHTML = '***Password should must contain minimum one number.';
  } else if (passwordData.lenght < 8) {
    passVer.innerHTML = '***Password length must be atleast 8 characters.';
  } else if (passwordData.lenght > 15) {
    passVer.innerHTML = '***Password length must not exceed 15 characters';
  } else if (passwordData.value !== passwordAgaData.value) {
    passVerSec.innerHTML = '***Field Password is empty or not matching.';
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(loginData.value, passwordData.value)
      .then(userCredential => {
        var user = userCredential.user;
        emailVer.innerHTML = '';
        passVer.innerHTML = '';
        passVerSec.innerHTML = '';
        document.querySelector('.popup-sign').style.display = 'none';
        signupSucces.style.display = 'active';
        console.log('account created');
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        signupError.innerHTML = errorMessage;
        console.log(errorMessage);
      });
  }
});

// LOGING IN MECHANISM
const logginInEmail = document.querySelector('#email-field');
const logginInPassword = document.querySelector('#password-field');
const logOutButton = document.querySelector('#logout-start-button');
const deleteAccountButton = document.querySelector('#delete-account-button');
const loginErrorMessage = document.querySelector('#login-error-message');
const deletedPopup = document.querySelector('.popup-succesfull-deleted');
const deleteCloseButton = document.querySelector(
  '#close-button-deletedaccount',
);

loggingInButton.addEventListener('click', () => {
  const emailValue = logginInEmail.value;
  const passwordValue = logginInPassword.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then(userCredential => {
      firebase.auth().onAuthStateChanged(function (userOne) {
        if (userOne) {
          document.querySelector('.popup').style.display = 'none';
          frontSection.classList.remove('active');
          logInButton.style.display = 'none';
          logOutButton.style.display = 'flex';
          signInButton.style.display = 'none';
          deleteAccountButton.style.display = 'flex';
          deletedPopup.style.display = 'active';
        }
      });
    })
    .catch(error => {
      console.log(error.message);
      loginErrorMessage.innerHTML = error.message;
    });
});

//DELETE ACCOUNT MECHANISM

deleteAccountButton.addEventListener('click', () => {
  const user = firebase.auth().currentUser;
  user.delete();
  logInButton.style.display = 'flex';
  logOutButton.style.display = 'none';
  signInButton.style.display = 'flex';
  deleteAccountButton.style.display = 'none';
  frontSection.classList.add('active');
  snackBar();
});

deleteCloseButton.addEventListener('click', () => {
  deletedPopup.style.display = 'none';
  frontSection.classList.remove('active');
});

frontSection.addEventListener('click', () => {
  deletedPopup.style.display = 'none';
  frontSection.classList.remove('active');
});

// FORGOT PASSWORD MECHANISM
const forgotPasswordButton = document.querySelector('#password-forgot-button');

function forgotPasswordFunction() {
  const emailValue = logginInEmail.value;
  if (emailValue === '') {
    loginErrorMessage.innerHTML =
      'Put Email before clicking "Forgot Password" button';
  } else {
    const auth = firebase.auth();
    const emailAddress = emailValue;
    auth.sendPasswordResetEmail(emailAddress).catch(function (error) {
      console.log(error.message);
    });
    loginErrorMessage.innerHTML =
      'A reset password link has been sent to the specified email address. Follow the link to select a new password.';
  }
}
forgotPasswordButton.addEventListener('click', forgotPasswordFunction);

// LOGOUT MECHANISM
function logOut() {
  firebase.auth().signOut();
  logInButton.style.display = 'flex';
  logOutButton.style.display = 'none';
  signInButton.style.display = 'flex';
  deleteAccountButton.style.display = 'none';
}
logOutButton.addEventListener('click', logOut);

// FETCH API MECHANISM
//FINDING LIVE MATCHES
const liveMatchesSection = document.querySelector('.live-home');

function addMatch(data) {
  const matchtile = document.createElement('div');
  matchtile.classList.add('match');

  const scoreBoard = document.createElement('h1');
  scoreBoard.innerHTML = 'Scoreboard';

  const teamsLogo = document.createElement('div');
  teamsLogo.classList.add('teams-logo');

  const homeTeam = document.createElement('div');
  homeTeam.classList.add('team');

  const homeLogo = document.createElement('img');
  homeLogo.src = data['teams']['home']['logo'];
  homeLogo.classList.add('home-logo');

  const homeName = document.createElement('p');
  homeName.innerHTML = data['teams']['home']['name'];

  homeTeam.appendChild(homeLogo);
  homeTeam.appendChild(homeName);

  const awayTeam = document.createElement('div');
  awayTeam.classList.add('team');

  const awayLogo = document.createElement('img');
  awayLogo.src = data['teams']['away']['logo'];
  awayLogo.classList.add('away-logo');

  const awayName = document.createElement('p');
  awayName.innerHTML = data['teams']['away']['name'];

  awayTeam.appendChild(awayLogo);
  awayTeam.appendChild(awayName);

  const matchScore = document.createElement('p');
  matchScore.classList.add('score');
  matchScore.innerHTML = data['goals']['home'] + ' - ' + data['goals']['away'];

  teamsLogo.appendChild(homeTeam);
  teamsLogo.appendChild(matchScore);
  teamsLogo.appendChild(awayTeam);

  const matchTimeNew = document.createElement('p');
  matchTimeNew.classList.add('time');
  matchTimeNew.innerHTML = data['fixture']['status']['elapsed'] + "'";

  matchtile.appendChild(scoreBoard);
  matchtile.appendChild(teamsLogo);
  matchtile.appendChild(matchTimeNew);

  liveMatchesSection.appendChild(matchtile);
}
const liveSearchButton = document.querySelector('#live-search-button');
const liveHomeView = document.querySelector('.live-home');
const noLiveMatchesError = document.querySelector('.no-live-matches');

liveSearchButton.addEventListener('click', () => {
  fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '83066ce9eamsh829dcf2a6eb1961p1891b6jsne7d1d851b2ff',
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    },
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      const matches = data['response'];
      liveMatchesSection.innerHTML = '';
      if (matches.length === 0) {
        noLiveMatchesError.style.display = 'active';
      } else {
        noLiveMatchesError.style.display = 'none';
        liveHomeView.style.display = 'flex';

        for (let i = 0; i < matches.length; i++) {
          addMatch(matches[i]);
        }
      }
    })
    .catch(err => {
      console.log('Unsuccesfull', err);
    });
});
// FINDING LEAGUES MECHANISM
const table = document.querySelector('.matches-list');
const tableTbody = document.querySelector('.matches-list-tbody');

function renderTableData(data) {
  return `<td>${data}</td>`;
}

function addTable(sdata) {
  const tableRowContent = [
    sdata.rank,
    sdata.team.name,
    sdata.points,
    sdata.all.played,
    sdata.all.win,
    sdata.all.draw,
    sdata.all.lose,
  ]
    .map(renderTableData)
    .join('');
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = tableRowContent;

  tableTbody.appendChild(tableRow);
}
const tableButton = document.querySelector('#find-standing-button');
const matchesList = document.querySelector('.matches-list');
const selectedCountry = document.querySelector('#country-select');
const selectedLeague = document.querySelector('#league-select');
const selectedYear = document.querySelector('#year-select');

function renderOptions(options) {
  return options
    .map(option => `<option value=${option.value}>${option.text}</option>`)
    .join('');
}
selectedCountry.addEventListener('change', () => {
  if (selectedCountry.value === 'England') {
    selectedLeague.options.length = 1;

    const options = renderOptions([
      { text: 'Premier League', value: '39' },
      { text: 'Championship', value: '40' },
      { text: 'League One', value: '43' },
      { text: 'League Two', value: '41' },
      { text: 'National League', value: '42' },
    ]);
    selectedLeague.innerHTML += options;
  } else if (selectedCountry.value === 'Poland') {
    selectedLeague.options.length = 1;
    const options = renderOptions([
      { text: 'Ekstraklasa', value: '106' },
      { text: 'I Liga', value: '107' },
    ]);
    selectedLeague.innerHTML += options;
  } else if (selectedCountry.value === 'Germany') {
    selectedLeague.options.length = 1;
    const options = renderOptions([
      { text: 'Bundesliga 1', value: '78' },
      { text: 'Bundesliga 2', value: '79' },
      { text: 'Liga 3', value: '80' },
    ]);
    selectedLeague.innerHTML += options;
  }
});

const fulfillWarning = document.querySelector('#not-selected-forms');
const cantFindMatchesWarning = document.querySelector('#cant-find-matches');

tableButton.addEventListener('click', () => {
  tableTbody.innerHTML = '';
  if (
    selectedCountry.value !== 'null' &&
    selectedLeague.value !== 'null' &&
    selectedYear.value !== 'null'
  ) {
    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/standings?season=${selectedYear.value}&league=${selectedLeague.value}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            '83066ce9eamsh829dcf2a6eb1961p1891b6jsne7d1d851b2ff',
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        },
      },
    )
      .then(response =>
        response.json().then(data => {
          const respns = data['response'];
          const dataRespns = respns[0]['league']['standings'][0];
          cantFindMatchesWarning.style.display = 'none';
          fulfillWarning.style.display = 'none';
          matchesList.style.display = 'table';

          for (let i = 0; i < dataRespns.length; i++) {
            addTable(dataRespns[i]);
          }
        }),
      )
      .catch(err => {
        tableTbody.innerHTML = '';
        fulfillWarning.style.display = 'none';
        cantFindMatchesWarning.style.display = 'block';
      });
  } else {
    tableTbody.innerHTML = '';
    fulfillWarning.style.display = 'block';
    cantFindMatchesWarning.style.display = 'none';
  }
});

// FIND PLAYER MECHANISM
const newPlayer = document.querySelector('.player');

function renderRow(header, data) {
  return `<tr><th>${header}:</th><td>${data}</td></tr>`;
}
function playerInfo(pdata) {
  const allPlayerInfo = document.createElement('div');
  allPlayerInfo.classList.add('all-player-info');

  const playerHeader = document.createElement('div');
  playerHeader.classList.add('player-header');

  const playerImageNew = document.createElement('div');
  playerImageNew.classList.add('player-image');
  const playerImageImg = document.createElement('img');
  playerImageImg.src = pdata['player']['photo'];
  playerImageImg.classList.add('player-logo');

  playerImageNew.appendChild(playerImageImg);
  playerHeader.appendChild(playerImageNew);
  allPlayerInfo.appendChild(playerHeader);

  newPlayer.innerHTML = '';
  newPlayer.appendChild(allPlayerInfo);

  const playerInfoTable = document.createElement('div');
  playerInfoTable.classList.add('player-info');
  playerHeader.appendChild(playerInfoTable);

  const playerTable = document.createElement('table');
  playerTable.classList.add('player-info-table');
  playerInfoTable.appendChild(playerTable);

  const playerBasicInfo = pdata.player;
  const playerSecondStatistics = pdata.statistics[0];

  [
    {
      header: 'Name',
      data: playerBasicInfo.name,
    },
    {
      header: 'Age',
      data: playerBasicInfo.age,
    },
    {
      header: 'Nationality',
      data: playerBasicInfo.nationality,
    },
    {
      header: 'Height',
      data: playerBasicInfo.height,
    },
    {
      header: 'Weight',
      data: playerBasicInfo.weight,
    },
    { header: 'Team', data: playerSecondStatistics.team.name },
  ].forEach(settings => {
    const row = renderRow(settings.header, settings.data);
    playerTable.innerHTML += row;
  });

  const findPlayerStatistics = document.createElement('div');
  findPlayerStatistics.classList.add('find-player-statistics');
  allPlayerInfo.appendChild(findPlayerStatistics);

  const secondTable = document.createElement('table');
  secondTable.classList.add('player-statistics');
  findPlayerStatistics.appendChild(secondTable);

  [
    { header: 'Games', data: playerSecondStatistics.games.appearences },
    { header: 'Shots', data: playerSecondStatistics.shots.total },
    { header: 'Goals', data: playerSecondStatistics.goals.total },
    { header: 'Passes', data: playerSecondStatistics.passes.total },
    { header: 'Tackles', data: playerSecondStatistics.tackles.total },
    { header: 'Dribbles', data: playerSecondStatistics.dribbles.success },
    { header: 'Fouls', data: playerSecondStatistics.fouls.committed },
    { header: 'Yellow Cards', data: playerSecondStatistics.cards.yellow },
    { header: 'Red Cards', data: playerSecondStatistics.cards.red },
    { header: 'Penalty', data: playerSecondStatistics.penalty.scored },
  ].forEach(statistics => {
    const row = renderRow(statistics.header, statistics.data);
    secondTable.innerHTML += row;
  });
}

const findPlayerButton = document.querySelector('#find-player-button');
const playerSurname = document.querySelector('.player-input');
const leagueNumber = document.querySelector('.player-select');
const playerWarning = document.querySelector('.not-fulfilled-player');
const playerAllInfo = document.querySelector('.player');

findPlayerButton.addEventListener('click', () => {
  if (playerSurname.value !== '' && leagueNumber.value !== 'null') {
    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players?league=${leagueNumber.value}&search=${playerSurname.value}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            '83066ce9eamsh829dcf2a6eb1961p1891b6jsne7d1d851b2ff',
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        },
      },
    )
      .then(response =>
        response.json().then(data => {
          const respnsPlayer = data['response'];
          const dataRespnsPlayer = respnsPlayer;
          playerWarning.style.display = 'none';
          playerAllInfo.style.display = 'flex';

          for (let i = 0; i < respnsPlayer.length; i++) {
            playerInfo(dataRespnsPlayer[i]);
          }
        }),
      )
      .catch(err => {
        console.log(err);
      });
  } else {
    playerAllInfo.innerHTML = '';
    playerWarning.style.display = 'block';
  }
});
