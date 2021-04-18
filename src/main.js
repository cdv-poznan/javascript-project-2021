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



signButton.addEventListener('click', () => {
	if (loginData.value == "") {
			alert("Field E-mail is empty.");
	} else if (passwordData.value = "") {
			alert("Field Password is empty.")
	} else if (passwordData.lenght > 15 ) {
			alert("Password is too long (max 1i5 characters.")
	} else if (passwordData.value !== passwordAgaData.value) {
			alert("Passwords are not the same.")
	}
		else {
			localStorage.setItem("login", loginData.value);
			localStorage.setItem("password", passwordData.value);
			document.querySelector(".popup-sign").style.display='none';
			frontSection.classList.remove("active");
	}
})


// fetch("https://api-football-v1.p.rapidapi.com/v3/leagues?id=39", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": ,
// 		"x-rapidapi-host": 
// 	}
// }).then((res) => {
// 	console.log("Succes", res);
// 	return res.json()
// })
// .then(data => {
// 	console.log(data.response)
// 		const dres = data.response.map(user => {
// 			return `<p>Name: ${user.country.name}</p>`
// 		}).join("")
// 		console.log(dres)
// 	document.querySelector('.live-home').insertAdjacentHTML('beforebegin', dres)
// 	})
	
// .catch((err) => {
// 	console.log("Unsuccesfull", err)
// })



// fetch("https://api-football-v1.p.rapidapi.com/v2/country/england/2020", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": 
// 		"x-rapidapi-host":, 
// 	}
// }).then((res) => {
// 	console.log("Succes", res);
// 	return res.json()
// })
// .then(data => {
// 	console.log(data)
// 	// 	const dres = data.response.map(user => {
// 	// 		return `<p>Name: ${user.country.name}</p>`
// 	// 	}).join("")
// 	// 	console.log(dres)
// 	// document.querySelector('.live-home').insertAdjacentHTML('beforebegin', dres)
// 	})
// .catch((err) => {
// 	console.log("Unsuccesfull", err)
// })
