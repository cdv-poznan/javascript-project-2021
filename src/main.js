const logInButton = document.querySelector(".log-in");

function logInPop() {
document.querySelector(".front-section").style.display="flex";
};
logInButton.addEventListener("click", logInPop());


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
