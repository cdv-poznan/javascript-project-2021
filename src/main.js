const logInButton = document.querySelector(".log-in");
const closeButton = document.querySelector(".close-button");
const overlay = document.getElementById('overlay');

logInButton.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.popup.active')
	modals.forEach(modal => {
		closeModal(modal)
	})
})

closeButton.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest(".popup")
		closeModal(modal)
	})
})

function openModal(modal) {
	if (modal == null) return
	popup.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal) {
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}

// function logInPop() {
// document.querySelector(".popup").style.display="flex";
// }

// logInButton.addEventListener("click", logInPop());


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
