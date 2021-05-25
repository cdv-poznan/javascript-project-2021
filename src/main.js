
function clickAndSearchMovieList(clicked_value) {
    document.querySelector(".form-filter").style.display = "block";
    var baseUrl;
    switch (clicked_value) {
        case 'Adventure':
            baseUrl = 'https://api.themoviedb.org/4/list/7096193?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Family':
            baseUrl = 'https://api.themoviedb.org/4/list/7096192?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Drama':
            baseUrl = 'https://api.themoviedb.org/4/list/7096191?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Science fiction':
            baseUrl = 'https://api.themoviedb.org/4/list/7094258?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Comedy':
            baseUrl = 'https://api.themoviedb.org/4/list/7095579?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        case 'Documentary':
            baseUrl = 'https://api.themoviedb.org/4/list/7096190?api_key=1d177576971c8d250816c5fcd5cac600';
            break;
        default:
            console.log('Sorry, we are out of ' + clicked_value + ' list.');
    }
    
    function search() {
        document.querySelector('.movie-container').innerHTML = "";
        document.querySelector('.cat-select').innerHTML = "";
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
                var text3 = document.createElement("img");
                text3.src = `https://image.tmdb.org/t/p/w300${parseRes.results[i].poster_path}`;
                var content2 = document.createTextNode(text3.src);

                var choiceTitleFn = function() {
                    if (parseRes.results[i].original_title) {
                        return document.createTextNode(parseRes.results[i].original_title);
                    }
                    else if (parseRes.results[i].original_name) {
                        return document.createTextNode(parseRes.results[i].original_name);
                    }
                }

                var content4 = document.createTextNode(`Overwiew: ${parseRes.results[i].overview}`);
                var content5 = document.createTextNode(`Average vote: ${parseRes.results[i].vote_average}`);

                var choiceReleaseDateFn = function() {
                    if (parseRes.results[i].release_date) {
                        return document.createTextNode(`Release date: ${parseRes.results[i].release_date}`);
                    }
                    else if (parseRes.results[i].first_air_date) {
                        return document.createTextNode(`First release date: ${parseRes.results[i].first_air_date}`);
                    }
                }

                var content7 = document.createTextNode(`Madia type: ${parseRes.results[i].media_type}`);
                var content8 = document.createTextNode(`Comment: ${parseRes.comments[parseRes.results[i].media_type + ':' + parseRes.results[i].id]}`);
                var text4 = document.createElement("p");
                var text5 = document.createElement("p");
                var text6 = document.createElement("p");
                var text7 = document.createElement("p");
                var text8 = document.createElement("p");
                var text9 = document.createElement("p");
                text.setAttribute("class", "section-left");
                text2.setAttribute("class", "section-right");
                text3.setAttribute("class", "movie-img");
                text4.setAttribute("class", "movie-title");
                text5.setAttribute("class", "movie-overview");
                text6.setAttribute("class", "movie-vote");
                text7.setAttribute("class", "movie-release-date");
                text8.setAttribute("class", "movie-media-type");
                text9.setAttribute("class", "movie-comments");
                tag.appendChild(text);
                tag.appendChild(text2);
                text.appendChild(text3);
                text2.appendChild(text4);
                text2.appendChild(text6);
                text2.appendChild(text7);
                text2.appendChild(text8);
                text2.appendChild(text9);
                text2.appendChild(text5);
                text3.appendChild(content2);
                text4.appendChild(choiceTitleFn());
                text6.appendChild(content5);
                text7.appendChild(choiceReleaseDateFn());
                text8.appendChild(content7);
                text9.appendChild(content8);
                text5.appendChild(content4);
                var element = document.querySelector(".movie-main");
                element.appendChild(tag);
                var element2 = document.querySelector('.movie-container');
                element2.appendChild(tag)
            }
            console.log(parseRes);
        })
    }
    search();
    }