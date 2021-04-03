let recognizedImage = new Object();

const sendIdentification = () => {

    const files = [...document.querySelector('#upload').files];
    const promises = files.map((file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const res = event.target.result;
                console.log(res);
                resolve(res);
            }
            reader.readAsDataURL(file)
        })
    })
    goSpinner();
    Promise.all(promises).then((base64files) => {
        console.log(base64files)

        const data = {
            api_key: "tnxWY2oxbE1wdlFISTeXTfI4tATR0usClS9vs1y1JrK8ynZ69u",
            images: base64files,
            modifiers: ["crops_fast", "similar_images"],
            plant_language: "en",
            plant_details: ["common_names",
                "url",
                "name_authority",
                "wiki_description",
                "taxonomy",
                "synonyms"
            ]
        };

        fetch('https://api.plant.id/v2/identify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {

                //create object with recognized plant

                recognizedImage = {
                    id: data.id,
                    images: data.images[0].url,
                    imageName: data.images[0].file_name,
                    isPlant: data.is_plant_probability,
                    dateUpload: data.meta_data.date,
                    suggestions: data.suggestions,
                    plants: data.suggestions.forEach(el => {
                        let plant = new Object();
                        plant = {
                            id: el.id,
                            namePlant: el.plant_name,
                            propability: el.probability,
                            details: el.plant_details,
                            commonName: el.plant_details.common_names,
                            synonyms: el.plant_details.synonyms,
                            taxonomy: el.plant_details.taxonomy,
                            plantURL: el.plant_details.url,
                            wikipedia: el.plant_details.wiki_description,
                            similarImages: el.similar_images
                        }
                    }),

                }



                getPlantObject(recognizedImage)
                console.log(recognizedImage);
                createSearchedObject(recognizedImage);


                return recognizedImage
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    })
}




// for test


const files = [...document.querySelector('#upload').files];
const file = document.querySelector('.uploadPhotoDiv');
const inputFilesElement = document.getElementById("upload");


function handleFiles() {
    const fileList = this.files;

    const okBtn = document.createElement('span');
    file.appendChild(okBtn);
    okBtn.innerHTML = '<i style="color: green; font-size: 1rem; margin:0" class="far fa-check-circle"></i>';
    file.style.border = 'solid 1px green';

    console.log(files);
}




// const sendIdentification = () => {
//     console.log(files);
//     const promises = files.map((file) => {

//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 const res = event.target.result;
//                 console.log(res);
//                 resolve(res);
//             }
//             reader.readAsDataURL(file)

//         })
//     })

//     fetch('https://manczakola.github.io/data-trefl/data.json')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);

//             Headers: {
//                 CORS: 'no-cors'
//             }


//             //create object with recognized plant

//             recognizedImage = {
//                 id: data.id,
//                 images: data.images[0].url,
//                 imageName: data.images[0].file_name,
//                 isPlant: data.is_plant_probability,
//                 dateUpload: data.meta_data.date,
//                 suggestions: data.suggestions,
//                 plants: data.suggestions.forEach(el => {
//                     let plant = new Object();
//                     plant = {
//                         id: el.id,
//                         namePlant: el.plant_name,
//                         propability: el.probability,
//                         details: el.plant_details,
//                         commonName: el.plant_details.common_names,
//                         synonyms: el.plant_details.synonyms,
//                         taxonomy: el.plant_details.taxonomy,
//                         plantURL: el.plant_details.url,
//                         wikipedia: el.plant_details.wiki_description,
//                         similarImages: el.similar_images
//                     }
//                 })

//             }
//             getPlantObject(recognizedImage)
//             console.log(recognizedImage);
//             createSearchedObject(recognizedImage)
//             return recognizedImage
//         })

// }





// function displaying search results

const getPlantObject = (obj) => {
    document.querySelector('#screenshotButton').style.visibility = 'hidden';

    const uploadDiv = document.querySelector('.uploadDiv');

    const plantMainDiv = document.createElement('div');
    uploadDiv.appendChild(plantMainDiv);
    plantMainDiv.classList.add('plantMainDiv', 'col-12');

    const resultsOfUploadPhoto = document.createElement('div');
    uploadDiv.appendChild(resultsOfUploadPhoto);
    resultsOfUploadPhoto.classList.add('resultsOfUploadPhoto', 'row');



    let probabilities = [];
    let suggestions = obj.suggestions;

    for (let i = 0; i < suggestions.length; i++) {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('resultDiv', 'col-xs-12', 'col-md-6', 'col-lg-4')
        resultsOfUploadPhoto.appendChild(resultDiv);

        probabilities.push(suggestions[i].probability);


        resultDiv.innerHTML += `
        <div class='probability'> Probability: ${(suggestions[i].probability*100).toFixed(2)}%</div>
       

        <img src="${suggestions[i].similar_images[0].url}" alt="plant"/>

        <div class='commonName'>Name: ${suggestions[i].plant_name}</div>

        <div class='scientificName'>Scientific name: ${suggestions[i].plant_details.scientific_name}</div>
        `

        if (suggestions[i].plant_details.wiki_description != null) {
            resultDiv.innerHTML += `
            <div class='wikipediaURL'>
            <a href="${suggestions[i].plant_details.wiki_description.citation}">${suggestions[i].plant_details.wiki_description.citation}
            </a>
            </div>

            <div class='wikipediaDescription'>${suggestions[i].plant_details.wiki_description.value}
            </div>`

        } else {
            resultDiv.innerHTML += `
            <div class='wikipediaURL'>
            <a href=""></a>
            </div>
            <div class='wikipediaDescription'></div>`
        }
    }


    probabilities.sort((a, b) => b - a);
    let theBestProbability = probabilities.shift();


    suggestions.forEach(el => {

        if (el.probability === theBestProbability) {
            plantMainDiv.innerHTML = `
    <img src="${obj.images}" alt="plant" class="recognizedPlantImg"/>
    <div class='recognizedPlantName'>The best result: <strong>${el.plant_name}</strong>
    <i class="far fa-heart"></i>
    `;
        }


    })


    const addToCollectionBtn = document.querySelector('.fa-heart');

    addToCollectionBtn.addEventListener('click', addToCollection)



    // hide buttons and change to results

    const form = document.querySelector('.form');
    const logoBig = document.querySelector('.logoBig');

    form.style.visibility = 'hidden';
    form.style.height = '0';

    stopSpinner();

    const arrowDiv = document.createElement('div');
    if (arrowDiv) {

        arrowDiv.classList.add('arrowDiv');
        logoBig.appendChild(arrowDiv);
        arrowDiv.innerHTML = `<i class="fas fa-arrow-left"></i>`;
    }



    arrowDiv.addEventListener('click', () => {
        console.log('ok', location);
        window.location.reload();
    });


}

const items = JSON.parse(localStorage.getItem('searched')) || [];
const itemsLength = items.length;

const createSearchedObject = (item) => {
    let searchedObject = new Object();
    searchedObject = {
        item,
        name: document.querySelector('.recognizedPlantName').children[0].textContent,
        img: item.images
    }


    // create object in local storage
    localStorage.setItem('searched', JSON.stringify(searchedObject));
    let parsItem = JSON.parse(localStorage.getItem('searched'));

    // push object to array

    if (items) {
        items.push(parsItem);
    } else {
        return items;
    }

    // set array of objects to local storage
    localStorage.setItem('searched', JSON.stringify(items));


    showItem(item)
}




document.querySelector('#identify').addEventListener('click', sendIdentification);
inputFilesElement.addEventListener("change", handleFiles, false);





const form = document.querySelector('.form');
const screenshotButton = document.querySelector("#screenshotButton");
const img = document.querySelector("#screenshot-img");
const video = document.querySelector("#webcam");
const videoDiv = document.querySelector(".videoDiv");
const canvas = document.createElement("canvas");


//Take photo

document.querySelector('.takePhotoDiv').addEventListener('click', () => {
    console.log(video);

    if (videoDiv.style.visibility === 'hidden') {
        videoDiv.style.visibility = 'visible';
        form.style.height = '0';
        form.style.visibility = 'hidden';
    }

    screenshotButton.style.visibility = 'visible';

})




//Take screenshots

screenshotButton.addEventListener('click', () => {

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg");

    localStorage.setItem('photo', dataUrl);


    video.style.visibility = 'hidden';
    video.style.height = '0';


    screenshotButton.style.visibility = 'hidden';

    videoDiv.style.visibility = 'hidden';


});


const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');

const webcam = new Webcam(webcamElement, 'element', canvasElement);
document.querySelector("#buttonTakePhoto").addEventListener('click', () => {

    webcam.start()
        .then(result => {
            // console.log("webcam started");
        })
        .catch(err => {
            console.log(err);
        });


})


$('#cameraFlip').click(function () {
    webcam.flip();
    webcam.start();
});


$('#screenshotButton').click(function () {
    webcam.snap();
    let picture = webcam.snap();




    const newname = picture.replace("image/png", "image/octet-stream");

    webcam.stop();









    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, {
            type: mime
        });
    }

    var file = dataURLtoFile(localStorage.getItem('photo'), 'hello.jpeg');
    console.log(file);

    let files = [];
    files.push(file);


    webcamElement.style.visibility = 'hidden';

    const promises = files.map((file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const res = event.target.result;
                console.log(res);
                console.log(typeof res)
                resolve(res);
            }
            reader.readAsDataURL(file)
            console.log(file);
        })
    })
    goSpinner();
    Promise.all(promises).then((base64files) => {
        console.log(base64files)

        const data = {
            api_key: "tnxWY2oxbE1wdlFISTeXTfI4tATR0usClS9vs1y1JrK8ynZ69u",
            images: base64files,
            modifiers: ["crops_fast", "similar_images"],
            plant_language: "en",
            plant_details: ["common_names",
                "url",
                "name_authority",
                "wiki_description",
                "taxonomy",
                "synonyms"
            ]
        };

        fetch('https://api.plant.id/v2/identify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {


                //create object with recognized plant

                recognizedImage = {
                    id: data.id,
                    images: data.images[0].url,
                    imageName: data.images[0].file_name,
                    isPlant: data.is_plant_probability,
                    dateUpload: data.meta_data.date,
                    suggestions: data.suggestions,
                    plants: data.suggestions.forEach(el => {
                        let plant = new Object();
                        plant = {
                            id: el.id,
                            namePlant: el.plant_name,
                            propability: el.probability,
                            details: el.plant_details,
                            commonName: el.plant_details.common_names,
                            synonyms: el.plant_details.synonyms,
                            taxonomy: el.plant_details.taxonomy,
                            plantURL: el.plant_details.url,
                            wikipedia: el.plant_details.wiki_description,
                            similarImages: el.similar_images
                        }
                    }),

                }


                getPlantObject(recognizedImage)
                console.log(recognizedImage);
                createSearchedObject(recognizedImage);


                return recognizedImage
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    })
});

const logoBig = document.querySelector('.logoBig');


const changeLogo = () => {

    if (logoBig != 'null' && window.innerWidth > 992) {

        logoBig.innerHTML = `   <img src="assets/logoBig.png" onerror="this.onerror=null; this.src='assets/logoBig.png'">`;
    } else {
        logoBig.innerHTML = `<img src="assets/plantify.png" onerror="this.onerror=null; this.src='assets/plantify.png'">`
    }
}


window.addEventListener('resize', changeLogo)
document.addEventListener('DOMContentLoaded', changeLogo)


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
        <img src="assets/user.svg" onerror="this.onerror=null; this.src='assets/user.png'">
        ${name} </a>
    `
    } else {
        myAccountLink.innerHTML = ` <a class="nav-link" aria-current="page" href="#myaccount" > 
        <img src="assets/user.svg" onerror="this.onerror=null; this.src='assets/user.png'">
        My account
      </a>`

    }


}


window.addEventListener('load', hello);

document.querySelector('.logout').addEventListener('click', () => {
    window.localStorage.removeItem('username');

    myAccountLink.innerHTML = ` <a class="nav-link" aria-current="page" href="#myaccount" > 
        <img src="assets/user.svg" onerror="this.onerror=null; this.src='assets/user.png'">
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


const goSpinner = () => {

    document.querySelector('.loader-container').style.display = 'flex';
    document.querySelector('.message').textContent = `Please wait..`;


    form.style.visibility = 'hidden';
    form.style.height = '0';


}

const stopSpinner = () => {

    document.querySelector('.loader-container').style.display = 'none';


}




const itemsOfCollection = JSON.parse(localStorage.getItem('collection')) || [];
const itemsOfCollectionLength = itemsOfCollection.length;
const arrayOfCollection = [];

const addToCollection = item => {
    console.log('ok');
    console.log(item);

    let objectOfCollection = new Object();
    objectOfCollection = {
        item: arrayOfCollection[0],
        name: document.querySelector('.recognizedPlantName').children[0]
            .textContent,
        img: document.querySelector('.recognizedPlantImg').src,
    };

    // create object in local storage
    localStorage.setItem('collection', JSON.stringify(objectOfCollection));
    const parsItem = JSON.parse(localStorage.getItem('collection'));

    // push object to array

    if (itemsOfCollection) {
        itemsOfCollection.push(parsItem);
    } else {
        return itemsOfCollection;
    }

    // set array of objects to local storage
    localStorage.setItem('collection', JSON.stringify(itemsOfCollection));
};

const showItem = item => {
    // console.log(item);
    const importItem = item;
    arrayOfCollection.push(importItem);

    console.log(arrayOfCollection);
};

const removeOnBtn = e => {
    console.log('ok');
    console.log(itemsOfCollection, arrayOfCollection);

    e.target.parentNode.remove(); // remove li item
    itemsOfCollection.pop(e.target.parentNode); //remove item from items array
    localStorage.setItem('collection', JSON.stringify(itemsOfCollection)); // update localStorage
};