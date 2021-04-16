// POPUP WINDOW OPENING AND CLOSING

// LOG IN POPUP MECHANISM
const logInButton = document.querySelector(".log-in");
const closeButton = document.querySelector(".close-button");
const frontSection = document.querySelector(".overlay");

logInButton.addEventListener("click", () => {
	document.querySelector(".popup").style.display='flex';
	frontSection.classList.add("active");
});

closeButton.addEventListener("click", () => {
	document.querySelector(".popup").style.display='none';
	frontSection.classList.remove("active");
});


frontSection.addEventListener("click", () => {
	document.querySelector(".popup").style.display='none';
	frontSection.classList.remove("active");
});

// SIGN IN POPUP MECHANISM





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
