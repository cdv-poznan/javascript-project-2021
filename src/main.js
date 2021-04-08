// let joke;
// const audio = new Audio('https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=%5bSom%5dBa+Dum+Tss!&filename=22/227744-d408e4ab-84bb-4336-b93f-37daf252ef4d.mp3');
// audio.volume = 0.5;
// const getJoke = () => {
//     document.getElementById('punchline').style.display = 'none';
//     document.getElementById('anotherJoke').style.display = 'none';
//     axios.get('https://official-joke-api.appspot.com/jokes/random').then((response) => {
//         joke = response.data;
//         document.getElementById('punchlineButton').disabled = false;
//         document.getElementById('joke').innerText = joke.setup;
//     });
// }
// const getPunchline = () => {

//     setTimeout(() => {
//         audio.play();
//         document.getElementById('punchlineButton').disabled = true;
//         document.getElementById('anotherJoke').style.display = 'inline';
//         document.getElementById('punchline').style.display = 'inline';
//         document.getElementById('punchline').innerText = joke.punchline;
//     }, 300);
//     setTimeout(() => {
//         document.getElementById('anotherJoke').style.display = 'inline';
//         document.getElementById('punchline').style.display = 'inline';
//         document.getElementById('punchline').innerText = joke.punchline;
//     }, 300);
// }
// getJoke();
