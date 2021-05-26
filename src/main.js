
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
        document.querySelector('.text-not-movie').innerHTML = "";
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
                var text = document.createElement("ul");
                var text2 = document.createElement("ul");
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

                var content4 = document.createTextNode(`Overview: ${parseRes.results[i].overview}`);
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
                var text4 = document.createElement("li");
                var text5 = document.createElement("li");
                var text6 = document.createElement("li");
                var text7 = document.createElement("li");
                var text8 = document.createElement("li");
                var text9 = document.createElement("li");
                var text15 = document.createElement("li");
                var text10 = document.createElement("img");
                var text11 = document.createElement("img");
                var text12 = document.createElement("img");
                var text13 = document.createElement("img");
                var text14 = document.createElement("img");
                text.setAttribute("class", "section-left");
                text2.setAttribute("class", "section-right");
                text3.setAttribute("class", "movie-img");
                text4.setAttribute("class", "movie-title");
                text5.setAttribute("class", "movie-overview");
                text6.setAttribute("class", "movie-vote");
                text7.setAttribute("class", "movie-release-date");
                text8.setAttribute("class", "movie-media-type");
                text9.setAttribute("class", "movie-comments");
                text10.setAttribute("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDk2ODg7IiBkPSJNNDY2LjIxOSwyMzcuNzgxTDIzMS41NTIsMy4xMTVDMjI5LjU0OCwxLjExNSwyMjYuODMxLTAuMDA1LDIyNCwwSDMyDQoJYy01Ljg5MS0wLjAxMS0xMC42NzUsNC43NTctMTAuNjg2LDEwLjY0OGMtMC4wMDUsMi44NCwxLjEyMyw1LjU2NSwzLjEzNCw3LjU3MWwyMjcuMTM2LDIyNy4xMTVMMjQuNDQ4LDQ3Mi40NDgNCgljLTQuMTcxLDQuMTYtNC4xNzksMTAuOTE0LTAuMDE5LDE1LjA4NWMyLjAwNiwyLjAxMSw0LjczMSwzLjEzOSw3LjU3MSwzLjEzNGgxOTJjMi44MzEsMC4wMDUsNS41NDgtMS4xMTUsNy41NTItMy4xMTUNCglsMjM0LjY2Ny0yMzQuNjY3YzQuMTcxLTQuMTYsNC4xNzktMTAuOTE0LDAuMDE5LTE1LjA4NUM0NjYuMjMxLDIzNy43OTQsNDY2LjIyNSwyMzcuNzg4LDQ2Ni4yMTksMjM3Ljc4MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
                text10.setAttribute("class", "arrow");
                text11.setAttribute("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDk2ODg7IiBkPSJNNDY2LjIxOSwyMzcuNzgxTDIzMS41NTIsMy4xMTVDMjI5LjU0OCwxLjExNSwyMjYuODMxLTAuMDA1LDIyNCwwSDMyDQoJYy01Ljg5MS0wLjAxMS0xMC42NzUsNC43NTctMTAuNjg2LDEwLjY0OGMtMC4wMDUsMi44NCwxLjEyMyw1LjU2NSwzLjEzNCw3LjU3MWwyMjcuMTM2LDIyNy4xMTVMMjQuNDQ4LDQ3Mi40NDgNCgljLTQuMTcxLDQuMTYtNC4xNzksMTAuOTE0LTAuMDE5LDE1LjA4NWMyLjAwNiwyLjAxMSw0LjczMSwzLjEzOSw3LjU3MSwzLjEzNGgxOTJjMi44MzEsMC4wMDUsNS41NDgtMS4xMTUsNy41NTItMy4xMTUNCglsMjM0LjY2Ny0yMzQuNjY3YzQuMTcxLTQuMTYsNC4xNzktMTAuOTE0LDAuMDE5LTE1LjA4NUM0NjYuMjMxLDIzNy43OTQsNDY2LjIyNSwyMzcuNzg4LDQ2Ni4yMTksMjM3Ljc4MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
                text11.setAttribute("class", "arrow");
                text12.setAttribute("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDk2ODg7IiBkPSJNNDY2LjIxOSwyMzcuNzgxTDIzMS41NTIsMy4xMTVDMjI5LjU0OCwxLjExNSwyMjYuODMxLTAuMDA1LDIyNCwwSDMyDQoJYy01Ljg5MS0wLjAxMS0xMC42NzUsNC43NTctMTAuNjg2LDEwLjY0OGMtMC4wMDUsMi44NCwxLjEyMyw1LjU2NSwzLjEzNCw3LjU3MWwyMjcuMTM2LDIyNy4xMTVMMjQuNDQ4LDQ3Mi40NDgNCgljLTQuMTcxLDQuMTYtNC4xNzksMTAuOTE0LTAuMDE5LDE1LjA4NWMyLjAwNiwyLjAxMSw0LjczMSwzLjEzOSw3LjU3MSwzLjEzNGgxOTJjMi44MzEsMC4wMDUsNS41NDgtMS4xMTUsNy41NTItMy4xMTUNCglsMjM0LjY2Ny0yMzQuNjY3YzQuMTcxLTQuMTYsNC4xNzktMTAuOTE0LDAuMDE5LTE1LjA4NUM0NjYuMjMxLDIzNy43OTQsNDY2LjIyNSwyMzcuNzg4LDQ2Ni4yMTksMjM3Ljc4MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
                text12.setAttribute("class", "arrow");
                text13.setAttribute("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDk2ODg7IiBkPSJNNDY2LjIxOSwyMzcuNzgxTDIzMS41NTIsMy4xMTVDMjI5LjU0OCwxLjExNSwyMjYuODMxLTAuMDA1LDIyNCwwSDMyDQoJYy01Ljg5MS0wLjAxMS0xMC42NzUsNC43NTctMTAuNjg2LDEwLjY0OGMtMC4wMDUsMi44NCwxLjEyMyw1LjU2NSwzLjEzNCw3LjU3MWwyMjcuMTM2LDIyNy4xMTVMMjQuNDQ4LDQ3Mi40NDgNCgljLTQuMTcxLDQuMTYtNC4xNzksMTAuOTE0LTAuMDE5LDE1LjA4NWMyLjAwNiwyLjAxMSw0LjczMSwzLjEzOSw3LjU3MSwzLjEzNGgxOTJjMi44MzEsMC4wMDUsNS41NDgtMS4xMTUsNy41NTItMy4xMTUNCglsMjM0LjY2Ny0yMzQuNjY3YzQuMTcxLTQuMTYsNC4xNzktMTAuOTE0LDAuMDE5LTE1LjA4NUM0NjYuMjMxLDIzNy43OTQsNDY2LjIyNSwyMzcuNzg4LDQ2Ni4yMTksMjM3Ljc4MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
                text13.setAttribute("class", "arrow");
                text14.setAttribute("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwLjY2NyA0OTAuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuNjY3IDQ5MC42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDk2ODg7IiBkPSJNNDY2LjIxOSwyMzcuNzgxTDIzMS41NTIsMy4xMTVDMjI5LjU0OCwxLjExNSwyMjYuODMxLTAuMDA1LDIyNCwwSDMyDQoJYy01Ljg5MS0wLjAxMS0xMC42NzUsNC43NTctMTAuNjg2LDEwLjY0OGMtMC4wMDUsMi44NCwxLjEyMyw1LjU2NSwzLjEzNCw3LjU3MWwyMjcuMTM2LDIyNy4xMTVMMjQuNDQ4LDQ3Mi40NDgNCgljLTQuMTcxLDQuMTYtNC4xNzksMTAuOTE0LTAuMDE5LDE1LjA4NWMyLjAwNiwyLjAxMSw0LjczMSwzLjEzOSw3LjU3MSwzLjEzNGgxOTJjMi44MzEsMC4wMDUsNS41NDgtMS4xMTUsNy41NTItMy4xMTUNCglsMjM0LjY2Ny0yMzQuNjY3YzQuMTcxLTQuMTYsNC4xNzktMTAuOTE0LDAuMDE5LTE1LjA4NUM0NjYuMjMxLDIzNy43OTQsNDY2LjIyNSwyMzcuNzg4LDQ2Ni4yMTksMjM3Ljc4MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
                text14.setAttribute("class", "arrow");
                tag.appendChild(text);
                tag.appendChild(text2);
                text.appendChild(text15);
                text15.appendChild(text3);
                text2.appendChild(text4);
                text5.appendChild(text10);
                text6.appendChild(text11);
                text7.appendChild(text12);
                text8.appendChild(text13);
                text9.appendChild(text14);
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
        })
    }
    search();
    }

    function movieFilterFn() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("filter-input");
        filter = input.value.toUpperCase();
        ul = document.querySelector(".movie-container");
        li = ul.querySelectorAll(".movie-info");
        for (i = 0; i < li.length; i++) {
            a = li[i];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

