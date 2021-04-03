const main = document.querySelector('.main');
const myAccountLink = document.querySelector('#navbarNav > ul >.myaccount');
const recentlySearchedLink = document.querySelector('#navbarNav > ul >.recentlySearched');
const myPlantCollectionLink = document.querySelector('#navbarNav > ul >.myplantcollection');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');





// myAccount Link
const myAccount = () => {
    main.innerHTML =
        `<form class='col-xs-12 col-sm-6 col-md-4' name="loginform" onSubmit="return validateForm();" action="index.html">
<h4>Sign in to Plantify</h4>
<input type="text" name="username" id="username" placeholder="Enter your username">
<input type="password" name="password" id="password" placeholder='Password'>
<button class="btn-outline-secondary submitBtn" type="submit">Sign in</button>
</form>`;

}

validateForm = () => {
    const un = document.loginform.username.value;
    const pw = document.loginform.password.value;

    // to use in future, with users databases!

    // const username = "username";
    // const password = "password";

    window.localStorage.setItem('username', un);
    // if ((un == username) && (pw == password)) {

    //     return true;
    // } else {
    //     alert("Login was unsuccessful, please check your username and password");
    //     return false;
    // }

}


function hello() {
    const name = window.localStorage.getItem('username');


    if (typeof name == "string") {
        myAccountLink.innerHTML = `  
        <a class="nav-link" aria-current="page" href="#myaccount" > 
        <img src="images/user.svg" onerror="this.onerror=null; this.src='images/user.png'">
        ${name} </a>
    `
    } else {
        myAccountLink.innerHTML = ` <a class="nav-link" aria-current="page" href="#myaccount" > 
        <img src="images/user.svg" onerror="this.onerror=null; this.src='images/user.png'">
        My account
      </a>`

    }


}


window.addEventListener('load', hello);

document.querySelector('.logout').addEventListener('click', () => {
    window.localStorage.removeItem('username');

    myAccountLink.innerHTML = ` <a class="nav-link" aria-current="page" href="#myaccount" > 
        <img src="images/user.svg" onerror="this.onerror=null; this.src='images/user.png'">
        My account
      </a>`;



})


myAccountLink.addEventListener('click', myAccount)





// recentlySearched Link


recentlySearchedLink.addEventListener('click', () => {
    main.innerHTML = '';

    const header = document.createElement('span');
    header.innerText = 'Recently Searched';
    header.classList.add('headerRecentlySearched')

    const ol = document.createElement('ol');

    ol.classList.add('searchedItems')
    main.appendChild(header);
    main.appendChild(ol);
    items.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('searchedItem')

        li.innerHTML = `<img class='searched-img' src='${element.img}'/> <span class='name'>${element.name}</span> <span class='id'>${element.item.id}</span> <button type="button" class="btn btn-outline-secondary modalBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Show more
      </button> `;
        ol.appendChild(li);

        li.setAttribute('id', element.item.id);


    });

    document.querySelectorAll('.searchedItem').forEach(el => el.addEventListener('click', (e) => {

        let thisIdElement = e.currentTarget.id;
        let item = JSON.parse(window.localStorage.getItem('searched'));
        let arrayOfItems = [];


        const data = {
            api_key: "tnxWY2oxbE1wdlFISTeXTfI4tATR0usClS9vs1y1JrK8ynZ69u",

            Headers: {
                CORS: 'no-cors'
            }
        };

        fetch(` https://api.plant.id/v2/get_identification_result/${thisIdElement}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);

                showIdElement(data, arrayOfItems)
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        ;


    }))

});


const showIdElement = (obj, arr) => {
    // console.log(obj, arr);


    modalTitle.innerText = `${obj.suggestions[0].plant_name}`;
    let suggestions = obj.suggestions;



    const plantMainDiv = document.createElement('div');
    modalBody.appendChild(plantMainDiv);
    plantMainDiv.classList.add('plantMainDiv', 'col-12');


    const resultsOfUploadPhoto = document.createElement('div');
    modalBody.appendChild(resultsOfUploadPhoto);
    resultsOfUploadPhoto.classList.add('resultsOfUploadPhoto', 'row');



    for (let i = 0; i < suggestions.length; i++) {
        // console.log(suggestions.length);
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('resultDiv', 'col-xs-12')
        resultsOfUploadPhoto.appendChild(resultDiv);


        resultDiv.innerHTML = `
      <div class='probability'> Probability: ${(suggestions[i].probability*100).toFixed(2)}%</div>
     

      <img src="${suggestions[i].similar_images[0].url}" alt="plant"/>

      <div class='commonName'>Name: ${suggestions[i].plant_name}</div>

      <div class='scientificName'>Scientific name: ${suggestions[i].plant_details.scientific_name}</div>
      `
    }


    plantMainDiv.innerHTML = `
    <img src="${obj.images[0].url}" alt="plant" class="recognizedPlantImg"/>
    <div class='recognizedPlantName'>The best result: <strong>${suggestions[0].plant_name}</strong>
    `;
}




myPlantCollectionLink.addEventListener('click', () => {
    main.innerHTML = '';

    const header = document.createElement('span');
    header.innerText = 'My plant collection';
    header.classList.add('headerRecentlySearched')

    const ol = document.createElement('ol');

    ol.classList.add('searchedItems')
    main.appendChild(header);
    main.appendChild(ol);

    console.log(itemsOfCollection);
    itemsOfCollection.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('searchedItem');

        console.log(element, element.item);
        const elementItemId = () => {
            if (!element.item) {
                return ''
            } else {
                return element.item.id;
            }
        }
        console.log(elementItemId());

        li.innerHTML = `<img class='searched-img' src='${element.img}'/> <span class='name'>${element.name}</span> <span class='id'>${elementItemId()}</span> <button type="button" class="btn btn-outline-secondary modalBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Show more
      </button> <span class='cancelItem btn btn-outline'></span> `;
        ol.appendChild(li);

        li.setAttribute('id', elementItemId());


    });

    document.querySelectorAll('.modalBtn').forEach(el => el.addEventListener('click', (e) => {

        let thisIdElement = e.currentTarget.parentNode.id;

        let item = JSON.parse(window.localStorage.getItem('collection'));
        let arrayOfItems = [];


        const data = {
            api_key: "tnxWY2oxbE1wdlFISTeXTfI4tATR0usClS9vs1y1JrK8ynZ69u",

            Headers: {
                CORS: 'no-cors'
            }
        };

        fetch(` https://api.plant.id/v2/get_identification_result/${thisIdElement}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);

                showIdElement(data, arrayOfItems)
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        ;


    }))




    const cancelItem = document.querySelectorAll('.cancelItem');
    cancelItem.forEach(btn => btn.addEventListener('click', removeOnBtn));

});