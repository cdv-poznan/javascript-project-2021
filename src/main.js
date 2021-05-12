
var baseUrl = 'https://api.themoviedb.org/4/list/7094258?api_key=1d177576971c8d250816c5fcd5cac600';

function search() {
    fetch(baseUrl)
    .then(res => res.text())
    .then(res => {
        var parseRes = JSON.parse(res);
        // wyświetlenie w przeglądarce
        // var search = document.getElementById("my-class").innerHTML = `${parseRes.results[0].poster_path}`;

        console.log(parseRes);
    })
}
search();