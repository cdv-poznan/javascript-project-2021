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

