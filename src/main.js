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

// const remMe = document.getElementById('rememberMe');
// const emailInput = document.getElementById('email');

// if (localStorage.checkbox && localStorage.checkbox !== '') {
//   remMe.setAttribute('checked', 'checked');
//   emailInput.value = localStorage.username;
// } else {
//   remMe.removeAttribute('checked');
//   emailInput.value = '';
// }

// function lsRememberMe() {
//   if (rmCheck.checked && emailInput.value !== '') {
//     localStorage.username = emailInput.value;
//     localStorage.checkbox = remMe.value;
//   } else {
//     localStorage.username = '';
//     localStorage.checkbox = '';
//   }
// }


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

// FORM VALIDATION


// MAKING ACCOUNTS IN LOCAL STORAGE

const emailVer = document.getElementById('email-wrong');
const passVer = document.getElementById('password-wrong');
const passVerSec = document.getElementById('password-wrong-twice');
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
			localStorage.setItem('login', loginData.value);
			localStorage.setItem('password', passwordData.value);
			document.querySelector('.popup-sign').style.display='none';
			frontSection.classList.remove('active');
	}
})


// LOGING IN MECHANISM
const loggingInButton  = document.querySelector('#login-button')
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
		console.log('Logged In')
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


// fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "",
// 		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
// 	}
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


// FIREBASE AUTHENTICATION


