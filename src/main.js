// POPUP WINDOWS

// LOG IN POPUP MECHANISM
const logInButton = document.querySelector(".log-in");
const closeButtonLogin = document.querySelector(".close-button-login");
const frontSection = document.querySelector(".overlay");
const forgotPassword = document.querySelector(".password-forgot")

logInButton.addEventListener("click", () => {
	document.querySelector(".popup").style.display='grid';
	frontSection.classList.add("active");
});

closeButtonLogin.addEventListener("click", () => {
	document.querySelector(".popup").style.display='none';
	frontSection.classList.remove("active");
});


frontSection.addEventListener("click", () => {
	document.querySelector(".popup").style.display='none';
	frontSection.classList.remove("active");
});

forgotPassword.addEventListener("click", () => {
	alert("Service available soon.");
})

// REMEMMBER ME IN LOCALSTORAGE

// const remMe = document.getElementById("rememberMe");
// const emailInput = document.getElementById("email");

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//   remMe.setAttribute("checked", "checked");
//   emailInput.value = localStorage.username;
// } else {
//   remMe.removeAttribute("checked");
//   emailInput.value = "";
// }

// function lsRememberMe() {
//   if (rmCheck.checked && emailInput.value !== "") {
//     localStorage.username = emailInput.value;
//     localStorage.checkbox = remMe.value;
//   } else {
//     localStorage.username = "";
//     localStorage.checkbox = "";
//   }
// }


// SIGN IN POPUP MECHANISM

const signInButton = document.querySelector(".sign-in");
const closeButtonSign = document.querySelector(".close-button-sign");

signInButton.addEventListener("click", () => {
	document.querySelector(".popup-sign").style.display='grid';
	frontSection.classList.add("active");
});

closeButtonSign.addEventListener("click", () => {
	document.querySelector(".popup-sign").style.display='none';
	frontSection.classList.remove("active");
});


frontSection.addEventListener("click", () => {
	document.querySelector(".popup-sign").style.display='none';
	frontSection.classList.remove("active");
});

// NEW ACCOUNT MECHANISM
const signButton = document.querySelector("#sub-button");
const loginData = document.querySelector("#sign-email");
const passwordData = document.querySelector("#sign-password");
const passwordAgaData = document.querySelector("#sign-aga-password");

// FORM VALIDATION


// MAKING ACCOUNTS IN LOCAL STORAGE

const emailVer = document.getElementById("email-wrong");
const passVer = document.getElementById("password-wrong");
const passVerSec = document.getElementById("password-wrong-twice");
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbersVal = /[0-9]/g;
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


signButton.addEventListener('click', () => {
	if (loginData.value == "") {
			emailVer.innerHTML = "***Field E-mail is empty.";
	} else if (!loginData.value.match(mailFormat)) {
		emailVer.innerHTML = "***Entered a invalid e-mail address.";
	} else if (passwordData.value == "") {
		passVer.innerHTML = "***Field Password is empty";
	} else if (!passwordData.value.match(lowerCaseLetters)) {
		passVer.innerHTML = "***Password should must contain minimum one lower case letter.";
	} else if (!passwordData.value.match(upperCaseLetters)) {
		passVer.innerHTML = "***Password should must contain minimum one upper case letter.";
	} else if (!passwordData.value.match(numbersVal)) {
		passVer.innerHTML = "***Password should must contain minimum one number."
	} else if (passwordData.lenght < 8) {
		passVer.innerHTML = "***Password length must be atleast 8 characters.";
	} else if (passwordData.lenght > 15 ) {
		passVer.innerHTML = "***Password length must not exceed 15 characters";
	} else if (passwordData.value !== passwordAgaData.value) {
		passVerSec.innerHTML = "***Field Password is empty or not matching.";
	}
		else {
			localStorage.setItem("login", loginData.value);
			localStorage.setItem("password", passwordData.value);
			document.querySelector(".popup-sign").style.display='none';
			frontSection.classList.remove("active");
	}
})

// FETCH API MECHANISM
const matchTime = document.querySelector("#time");
const firstTeam = document.querySelector("#home-name");
const firstTeamLogo = document.querySelector("#home-logo");
const secondTeam = document.querySelector("#away-name");
const secondTeamLogo = document.querySelector("#away-logo");
const actualScore = document.querySelector("#score");

function addMatch (data) {
	const matchtile = document.createElement('div');
	matchtile.classList.add("match-tile");

	const homeTeam = document.createElement('div');
	homeTeam.classList.add("team");

	const homeTileTeamName = document.createElement('p');
	homeTileTeamName.innerHTML = data['team']['home']['name'];

	const homeTileTeamLogo = document.createElement('img');
	homeTileTeamLogo.src=data['team']['home']['logo'];
	
	homeTeam.appendChild(homeTileTeamLogo);
	homeTeam.appendChild(homeTileTeamName);

	const awayTeam = document.createElement('div');
	awayTeam.append.classList.add('team');

	const awayTileTeamName=document.createElement('p');
	awayTileTeamName.innerHTML = data['teams']['away']['name'];

	const awayTileTeamLogo = document.createElement('img');
	awayTileTeamLogo.src=data['teams']['away']['logo'];

	awayTeam.appendChild(awayTileTeamLogo);
	awayTeam.appendChild(awayTileTeamName);

	const score = document.createElement('p');
	score.innerHTML = data['goals']['home'] + " - " + data['goals']['away'];

	matchtile.appendChild(homeTeam);
	matchtile.appendChild(score);
	matchtile.appendChild(awayTeam);

}


fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
}).then((res) => {
	console.log("Succes", res);
	return res.json()
})
.then(data => {
	console.log(data.response);
	const matches = data['response'];
	const time = matches[0]['fixture'];
	const goals = matches[0]['goals'];
	const teams = matches[0]['teams'];
	console.log(matches.lenght);
	console.log(matches);
	console.log(goals);
	console.log(teams);

	matchTime.innerHTML = time['status']['elapsed'] + "'";
	firstTeam.innerHTML = teams['home']['name'];
	firstTeamLogo.src = teams['home']['logo'];
	secondTeam.innerHTML = teams['away']['name'];
	secondTeamLogo.src = teams['away']['logo'];

	actualScore.innerHTML = goals['home'] + " - " + goals['away'];

	// for(let i = 1; i < matches.lenght; i++) {
	// 	addMatch(matches[i]);
	// }
	})
.catch((err) => {
	console.log("Unsuccesfull", err)
})


// 

// const dres = data.response.map(user => {
// 	return `<p>Name: ${user.country.name}</p>`
// }).join("")
// console.log(dres)


//MECHANISM OF ADDING DIV'S IN LIVE NOW SECTION

// function () {
// 	const newDiv = document.createElement("div");
// 	const textInDiv = document.createTextNode(``);
// 	newDiv.classList.add("match");
// 	newDiv.appendChild(textInDiv);
// 	const liveNow = document.querySelector(".live-home");

// }