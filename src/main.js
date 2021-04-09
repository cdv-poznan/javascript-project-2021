// fetch("https://api-football-v1.p.rapidapi.com/v3/leagues?id=39", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "83066ce9eamsh829dcf2a6eb1961p1891b6jsne7d1d851b2ff",
// 		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
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



fetch("https://api-football-v1.p.rapidapi.com/v2/country/england/2020", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "83066ce9eamsh829dcf2a6eb1961p1891b6jsne7d1d851b2ff",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
}).then((res) => {
	console.log("Succes", res);
	return res.json()
})
.then(data => {
	console.log(data)
	// 	const dres = data.response.map(user => {
	// 		return `<p>Name: ${user.country.name}</p>`
	// 	}).join("")
	// 	console.log(dres)
	// document.querySelector('.live-home').insertAdjacentHTML('beforebegin', dres)
	})
.catch((err) => {
	console.log("Unsuccesfull", err)
})
