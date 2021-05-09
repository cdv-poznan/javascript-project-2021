import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNxR65H1cPxr0fgxM7B9yaBqf-UlunAo4',
  authDomain: 'betterbetsiteproject.firebaseapp.com',
  projectId: 'betterbetsiteproject',
  storageBucket: 'betterbetsiteproject.appspot.com',
  messagingSenderId: '905149843073',
  appId: '1:905149843073:web:bf1c4e31099ddd3e61af80',
  measurementId: 'G-B8LDMLJB99'
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

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})
// POPUP WINDOWS

// LOG IN POPUP MECHANISM
const logInButton = document.querySelector('#login-start-button');
const closeButtonLogin = document.querySelector('.close-button-login');
const frontSection = document.querySelector('.overlay');

logInButton.addEventListener('click', () => { 
	document.querySelector('.popup').style.display='grid';
	frontSection.classList.add('active');
	});

closeButtonLogin.addEventListener('click', () => {
	document.querySelector('.popup').style.display='none';
	frontSection.classList.remove('active');
});


frontSection.addEventListener('click', () => {
	document.querySelector('.popup').style.display='none';
	frontSection.classList.remove('active');
});

// REMEMMBER ME IN LOCALSTORAGE

const remMe = document.querySelector('#rememberMe');
const emailInput = document.querySelector('#email-field');
const loggingInButton  = document.querySelector('#login-button')

if (localStorage.checkbox && localStorage.checkbox !== '') {
	remMe.setAttribute('checked', 'checked');
	emailInput.value = localStorage.username;
} else {
	remMe.removeAttribute('checked');
	emailInput.value = '' 
}

loggingInButton.addEventListener('click', () => {
	if(remMe.checked && emailInput.value !== '') {
		localStorage.username = emailInput.value;
		localStorage.checkbox = remMe.value;
	} else {
		localStorage.username = '';
		localStorage.checkbox = '';
	}
})


// SIGN IN POPUP MECHANISM

const signInButton = document.querySelector('#signin-start-button');
const closeButtonSign = document.querySelector('.close-button-sign');

signInButton.addEventListener('click', () => {
	document.querySelector('.popup-sign').style.display='grid';
	frontSection.classList.add('active');
});

closeButtonSign.addEventListener('click', () => {
	document.querySelector('.popup-sign').style.display='none';
	frontSection.classList.remove('active');
});


frontSection.addEventListener('click', () => {
	document.querySelector('.popup-sign').style.display='none';
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
const signupSucces = document.querySelector('.popup-succesfull');
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbersVal = /[0-9]/g;
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


signButton.addEventListener('click', () => {
	if (loginData.value == '') {
			emailVer.innerHTML = '***Field E-mail is empty.';
	} else if (!loginData.value.match(mailFormat)) {
		emailVer.innerHTML = '***Entered a invalid e-mail address.';
	} else if (passwordData.value == '') {
		passVer.innerHTML = '***Field Password is empty';
	} else if (!passwordData.value.match(lowerCaseLetters)) {
		passVer.innerHTML = '***Password should must contain minimum one lower case letter.';
	} else if (!passwordData.value.match(upperCaseLetters)) {
		passVer.innerHTML = '***Password should must contain minimum one upper case letter.';
	} else if (!passwordData.value.match(numbersVal)) {
		passVer.innerHTML = '***Password should must contain minimum one number.';
	} else if (passwordData.lenght < 8) {
		passVer.innerHTML = '***Password length must be atleast 8 characters.';
	} else if (passwordData.lenght > 15 ) {
		passVer.innerHTML = '***Password length must not exceed 15 characters';
	} else if (passwordData.value !== passwordAgaData.value) {
		passVerSec.innerHTML = '***Field Password is empty or not matching.';
	}
		else {
			firebase.auth().createUserWithEmailAndPassword(loginData.value, passwordData.value)
  .then((userCredential) => {
		var user = userCredential.user;
		emailVer.innerHTML = '';
		passVer.innerHTML = '';
		passVerSec.innerHTML = '';
		document.querySelector('.popup-sign').style.display='none';
		signupSucces.style.display='active';
		console.log('account created')
  })
  .catch((error) => {
    var errorCode = error.code;
		var errorMessage = error.message;
		signupError.innerHTML= errorMessage;
		console.log(errorMessage)
  });
			
	}
})


// LOGING IN MECHANISM

const logginInEmail = document.querySelector('#email-field');
const logginInPassword = document.querySelector('#password-field');
const logOutButton = document.querySelector('#logout-start-button');
const favouritesButton = document.querySelector('#favourites-button');
const loginErrorMessage = document.querySelector('#login-error-message');

loggingInButton.addEventListener('click', () => {
	
	const emailValue = logginInEmail.value;
	const passwordValue = logginInPassword.value;
	firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
  .then((userCredential) => {
    const user = userCredential.user;
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
	document.querySelector('.popup').style.display='none';
	frontSection.classList.remove('active');
	logInButton.style.display = 'none';
	logOutButton.style.display = 'flex';
	signInButton.style.display = 'none';
	favouritesButton.style.display = 'flex';
	console.log('Logged In');
	} else {
	console.log('Not logged')
  }
	});
  })
  .catch((error) => {
    console.log(error.message)
		loginErrorMessage.innerHTML = error.message;
  });
});

// FORGOT PASSWORD MECHANISM

const forgotPasswordButton = document.querySelector('#password-forgot-button');

function forgotPasswordFunction () {
	const emailValue = logginInEmail.value;
	if (emailValue === '') {
		loginErrorMessage.innerHTML = 'Put Email before clicking "Forgot Password" button'
	} else {
		const auth = firebase.auth();
		const emailAddress = emailValue;
auth.sendPasswordResetEmail(emailAddress).then(function() {
}).catch(function(error) {
  console.log(error.message)
});
loginErrorMessage.innerHTML = 'A reset password link has been sent to the specified email address. Follow the link to select a new password.'
	}
}
forgotPasswordButton.addEventListener('click', forgotPasswordFunction);

// LOGOUT MECHANISM

function logOut () {
	firebase.auth().signOut();
	logInButton.style.display = 'flex';
	logOutButton.style.display = 'none';
	signInButton.style.display = 'flex';
	favouritesButton.style.display = 'none';
	console.log('Logged Out')
}

logOutButton.addEventListener('click', logOut)




// FETCH API MECHANISM
// const liveMatchesSection = document.querySelector(".live-home");

// const matchTime = document.querySelector("#time");
// const firstTeam = document.querySelector("#home-name");
// const firstTeamLogo = document.querySelector("#home-logo");
// const secondTeam = document.querySelector("#away-name");
// const secondTeamLogo = document.querySelector("#away-logo");
// const actualScore = document.querySelector("#score");

// function addMatch(data) {
// 	const matchtile = document.createElement('div');
// 	matchtile.classList.add("match");
	
// 	const scoreBoard = document.createElement('h1');
// 	scoreBoard.innerHTML = "Scoreboard";

// 	const teamsLogo = document.createElement('div');
// 	teamsLogo.classList.add("teams-logo");



// 	const homeTeam = document.createElement("div");
// 	homeTeam.classList.add("team");

// 	const homeLogo = document.createElement("img");
// 	homeLogo.src=data['teams']['home']['logo'];
// 	homeLogo.classList.add("home-logo");

// 	const homeName = document.createElement('p');
// 	homeName.innerHTML = data['teams']['home']['name'];

// 	homeTeam.appendChild(homeLogo);
// 	homeTeam.appendChild(homeName);



// 	const awayTeam = document.createElement("div");
// 	awayTeam.classList.add("team");

// 	const awayLogo = document.createElement("img");
// 	awayLogo.src=data['teams']['away']['logo'];
// 	awayLogo.classList.add("away-logo");

// 	const awayName = document.createElement('p');
// 	awayName.innerHTML = data['teams']['away']['name'];

// 	awayTeam.appendChild(awayLogo);
// 	awayTeam.appendChild(awayName);

// 	const matchScore = document.createElement('p');
// 	matchScore.classList.add('score');
// 	matchScore.innerHTML=data['goals']['home'] + " - " + data['goals']['away'];

// 	teamsLogo.appendChild(homeTeam);
// 	teamsLogo.appendChild(matchScore)
// 	teamsLogo.appendChild(awayTeam);

// 	const matchTime = document.createElement('p');
// 	matchTime.classList.add('time');
// 	matchTime.innerHTML = data['fixture']['status']['elapsed'] + "'"

// 	matchtile.appendChild(scoreBoard);
// 	matchtile.appendChild(teamsLogo);
// 	matchtile.appendChild(matchTime);

// 	liveMatchesSection.appendChild(matchtile);
// }


// // fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
// // 	"method": "GET",
// // 	"headers": {
// // 		"x-rapidapi-key": "83066ce9eamsh829dcf2a6eb1961p1891b6jsne7d1d851b2ff",
// // 		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
// // 	}
// }).then((res) => {
// 	console.log("Succes", res);
// 	return res.json()
// })
// .then(data => {
// 	console.log(data.response);
// 	const matches = data['response'];
// 	const time = matches[0]['fixture'];
// 	const goals = matches[0]['goals'];
// 	const teams = matches[0]['teams'];
// 	console.log(matches.length);
// 	console.log(matches);
// 	console.log(goals);
// 	console.log(teams);

// 	matchTime.innerHTML = time['status']['elapsed'] + "'";
// 	firstTeam.innerHTML = teams['home']['name'];
// 	firstTeamLogo.src = teams['home']['logo'];
// 	secondTeam.innerHTML = teams['away']['name'];
// 	secondTeamLogo.src = teams['away']['logo'];

// 	actualScore.innerHTML = goals['home'] + " - " + goals['away'];

// 	for(let i = 1; i < matches.length; i++) {
// 		addMatch(matches[i]);
// 	}
// 	})
// .catch((err) => {
// 	console.log("Unsuccesfull", err)
// })


// // FINDING LEAGUES MECHANISM
// const table = document.querySelector('.matches-list');
// const tableTbody = document.querySelector('.matches-list-tbody')

// function addTable (sdata) {
// 	const tableRow = document.createElement('tr')

// 	const place = document.createElement('td');
// 	place.innerHTML = sdata['rank'];

// 	const teamName = document.createElement('td');
// 	const teamLogo = document.createElement('img');
// 	teamLogo.src = sdata['team']['logo'];
// 	teamName.appendChild(teamLogo);
// 	teamName.classList.add('logo-name');
// 	teamName.innerHTML = sdata['team']['name'];

// 	const teamPoints = document.createElement('td');
// 	teamPoints.innerHTML = sdata['points'];

// 	const teamMatchesPlayed = document.createElement('td');
// 	teamMatchesPlayed.innerHTML = sdata['all']['played'];

// 	const teamMatchesWon = document.createElement('td');
// 	teamMatchesWon.innerHTML = sdata['all']['win'];

// 	const teamMatchesDraw = document.createElement('td');
// 	teamMatchesDraw.innerHTML = sdata['all']['draw'];

// 	const teamMatchesLost = document.createElement('td');
// 	teamMatchesLost.innerHTML = sdata['all']['lose'];

// 	tableRow.appendChild(place);
// 	tableRow.appendChild(teamName);
// 	tableRow.appendChild(teamMatchesPlayed);
// 	tableRow.appendChild(teamMatchesWon);
// 	tableRow.appendChild(teamMatchesDraw);
// 	tableRow.appendChild(teamMatchesLost);
// 	tableRow.appendChild(teamPoints);
// 	console.log(tableRow)

// 	tableTbody.appendChild(tableRow);
// }

const tableButton = document.querySelector('.find-match-button');
const matchesList = document.querySelector('.matches-list');
const selectedCountry = document.querySelector('#country-select');
const selectedLeague = document.querySelector('#league-select');
const selectedYear = document.querySelector('#year-select');

selectedCountry.addEventListener('change', () => {
if (selectedCountry.value === "England") {
	selectedLeague.options.length = 1;
	console.log(selectedLeague.options.length)
	
	const firstOptionEngland = document.createElement('option');
	firstOptionEngland.innerHTML = 'Premier League';
	firstOptionEngland.value = '39';
	selectedLeague.appendChild(firstOptionEngland);

	const secondOptionEngland = document.createElement('option');
	secondOptionEngland.innerHTML='Championship';
	secondOptionEngland.value='40';
	selectedLeague.appendChild(secondOptionEngland);

	const thirdOptionEngland = document.createElement('option');
	thirdOptionEngland.innerHTML='League One';
	thirdOptionEngland.value='41';
	selectedLeague.appendChild(thirdOptionEngland);

	const fourthOptionEngland = document.createElement('option');
	fourthOptionEngland.innerHTML='League Two';
	fourthOptionEngland.value='42';
	selectedLeague.appendChild(fourthOptionEngland);

	const fifthOptionEngland = document.createElement('option');
	fifthOptionEngland.innerHTML='National League';
	fifthOptionEngland.value='43';
	selectedLeague.appendChild(fifthOptionEngland);

} else if (selectedCountry.value === "Poland") {
	selectedLeague.options.length = 1;

	const firstOptionPoland = document.createElement('option');
	firstOptionPoland.innerHTML = 'Ekstraklasa';
	firstOptionPoland.value = '106';
	selectedLeague.appendChild(firstOptionPoland);

	const secondOptionPoland = document.createElement('option');
	secondOptionPoland.innerHTML='I Liga';
	secondOptionPoland.value='107';
	selectedLeague.appendChild(secondOptionPoland);
	
} else if (selectedCountry.value === "Germany") {
	selectedLeague.options.length = 1;

	const firstOptionGermany = document.createElement('option');
	firstOptionGermany.innerHTML = 'Bundesliga 1';
	firstOptionGermany.value = '78';
	selectedLeague.appendChild(firstOptionGermany);

	const secondOptionGermany = document.createElement('option');
	secondOptionGermany.innerHTML='Bundesliga 2';
	secondOptionGermany.value='79';
	selectedLeague.appendChild(secondOptionGermany);

	const thirdOptionGermany = document.createElement('option');
	thirdOptionGermany.innerHTML='Liga 3';
	thirdOptionGermany.value='80';
	selectedLeague.appendChild(thirdOptionGermany);
}
})

const fulfillWarning = document.querySelector('.not-fulfilled')
tableButton.addEventListener('click', () => {
if (selectedCountry.value !== 'null' && selectedLeague.value !== 'null' && selectedYear.value !== 'null') {
matchesList.style.display = 'active';
fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=${selectedYear.value}&league=${selectedCountry.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "83066ce9eamsh829dcf2a6eb1961p1891b6jsne7d1d851b2ff",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => response.json().then(data => {
	const respns = data['response'];
	const dataRespns = respns[0]['league']['standings'][0];
	
	for (let i = 0; i < dataRespns.length; i++ ) {
		addTable(dataRespns[i]);	
	}
}))
.catch(err => {
	console.log(err);
})
} else {
fulfillWarning.style.display='active';
}})

// FIND PLAYER MECHANISM




const findPlayerButton = document.querySelector('#find-match-button');
const playerSurname = document.querySelector('.player-input');
const leagueNumber = document.querySelector('.player-select')


findPlayerButton.addEventListener('click', () => {
	if (playerSurname.value !== "" && leagueNumber.value !== "null") {
	fetch(`https://api-football-v1.p.rapidapi.com/v3/players?league=${leagueNumber}&search=${playerSurname}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "83066ce9eamsh829dcf2a6eb1961p1891b6jsne7d1d851b2ff",
			"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
		}
	})
	.then(response => response.json().then(data => {
		const respns = data['response'];

	}))
	.catch(err => {
		console.log(err);
	})
	} else {
	fulfillWarning.style.display='active';
	}})

