function chooseMovieList(clicked_value) {
    switch (clicked_value) {
        case 'Adventure':
            'https://api.themoviedb.org/4/list/7096193?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Family':
            'https://api.themoviedb.org/4/list/7096192?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Drama':
            'https://api.themoviedb.org/4/list/7096191?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Science fiction':
            'https://api.themoviedb.org/4/list/7094258?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Comedy':
            'https://api.themoviedb.org/4/list/7095579?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Documentary':
            'https://api.themoviedb.org/4/list/7096190?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        default:
            console.log('Sorry, we are out of ' + clicked_value + ' list.');
    }
}

function clickAndSearchMovieList() {
document.querySelector(".form-filter").style.display = "block";
this.chooseMovieList(baseUrl);

function displayMovie() {
    document.querySelector('.movie-container').innerHTML = "";
    fetch(baseUrl)
    .then(res => res.text())
    .then(res => {
        var parseRes = JSON.parse(res);
        // List name
        document.querySelector("h2").innerHTML = `${parseRes.name}`;
        // List description
        document.querySelector("h5").innerHTML = `${parseRes.description}`;
        // List content (movies)
        for (var i=0; i < parseRes.results.length; i++) {
            var tag = document.createElement("div");
            tag.setAttribute("class", "movie-info");
            var text = document.createElement("section");
            var text2 = document.createElement("section");
            var text3 = document.createElement("p");
            var content2 = document.createTextNode(parseRes.results[i].poster_path); // add

            choiceTitle(() => {
                if (parseRes.results[i].original_title) {
                    var content3 = document.createTextNode(parseRes.results[i].original_title);
                    return content3;
                }
                else if (parseRes.results[i].original_name) {
                    var content4 = document.createTextNode(parseRes.results[i].original_name);
                    return content4;
                }
            })

            var content4 = document.createTextNode(parseRes.results[i].overview);
            var text4 = document.createElement("p");
            var text5 = document.createElement("p");
            text.setAttribute("class", "section-left");
            text2.setAttribute("class", "section-right");
            text3.setAttribute("class", "movie-img");
            text4.setAttribute("class", "movie-title");
            text5.setAttribute("class", "movie-overview");
            tag.appendChild(text);
            tag.appendChild(text2);
            text.appendChild(text3);
            text2.appendChild(text4);
            text2.appendChild(text5);
            text3.appendChild(content2); // add
            text4.appendChild(choiceTitle());
            text5.appendChild(content4);
            var element = document.querySelector(".movie-main");
            element.appendChild(tag);
            var element2 = document.querySelector('.movie-container');
            element2.appendChild(tag)
        }
        console.log(parseRes);
    })
}
displayMovie();
}