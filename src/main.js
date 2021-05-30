const mainWin = document.querySelector(".main");
const img = document.querySelector(".img");
const jokeText = document.querySelector(".joke-text");
const newJokeBtn = document.querySelector(".new-joke-btn");
getMeme();

function getMeme() {
    fetch("https://meme-api.herokuapp.com/gimme")
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log(result.url);
            loader();
            setTimeout(() => {
                img.setAttribute("src", result.url);
                jokeText.style.display = "none";
                img.style.display = "block";
            }, 1000);
        });
}
function loader() {
    var url1 = "https://i.gifer.com/4Mj.gif";
    img.setAttribute("src", url1);
}

getJoke();

function getJoke() {
    fetch("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const joke = data.joke;
            jokeText.innerText = joke;
            jokeText.style.display = "block";
            img.style.display = "none";
        })
        .catch((error) => {
            jokeText.innerText = "Oops! Some error happened :(";
        });
}