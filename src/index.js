/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */
/* eslint-disable no-redeclare */
var firstTwoButtons;
var intervalNatural;
var intervalColored;
var intervalBlond;
var intervalBlondTwoOptions;
var intervalHairDye;
var intervalPowderBlond;
var intervalBlondToBrown;
var intervalToBrown;
var intervalBlondToBrunette;
var intervalToBrunette;
var intervalBrown;
var intervalBrownToBlond;
var intervalBrownToBlondDye;
var intervalBrownToBlondPowder;
var intervalBrownToBrunette;
var intervalBrownToBrunetteResult;
var intervalBrunette;
var intervalBrunetteToBlond;
var intervalBrunetteBlondDye;
var intervalBrunetteToBlondPowder;
var intervalBrunetteToBrown;
var intervalBrunetteToBrownResult;

var video = document.getElementById("video");
var change = document.getElementById("source");

var promiseFirstTwoButtons = new Promise((resolve) => {
  firstTwoButtons = setInterval(() => {
    var hairButtonOne = document.getElementById("okForJs");
    
    if (hairButtonOne) {
      clearInterval(firstTwoButtons);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          //first button
          var divForButtonFirst = document.getElementById("naturalHair");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "naturalHairButton";
          createButtonHair.innerHTML = "I have natural hair";
          //second button
          var divForButtonSecond = document.getElementById("coloredHair");
          var createButton2 = document.createElement("button");
          var createButtonHair = divForButtonSecond.insertAdjacentElement(
            "afterbegin",
            createButton2
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "coloredHairButton";
          createButtonHair.innerHTML = "I have colored hair";
        })
      );
    }
  }, 2000);
});

var promiseColorSelection = new Promise((resolve) => {
  intervalNatural = setInterval(() => {
    var hairButtonOne = document.getElementById("naturalHairButton");
    var hairButtonTwo = document.getElementById("coloredHairButton");

    if (hairButtonOne) {
      clearInterval(intervalNatural);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/colorSelection.mp4";
          video.load();
          hairButtonOne.remove();
          hairButtonTwo.remove();
          //first button
          var divForButtonFirst = document.getElementById("blondHair");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "blondHairButton";
          createButtonHair.innerHTML = "I have BLOND hair";
          //second button
          var divForButtonSecond = document.getElementById("brownHair");
          var createButton2 = document.createElement("button");
          var createButtonHair = divForButtonSecond.insertAdjacentElement(
            "afterbegin",
            createButton2
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "brownHairButton";
          createButtonHair.innerHTML = "I have BROWN hair";
          //third button
          var divForButtonThird = document.getElementById("brunette");
          var createButton3 = document.createElement("button");
          var createButtonHair = divForButtonThird.insertAdjacentElement(
            "afterbegin",
            createButton3
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "brunetteButton";
          createButtonHair.innerHTML = "I'm a BRUNETTE";
          hairButtonOne = false;
        })
      );
    }
  }, 2000);
});

var promiseColoredHair = new Promise((resolve) => {
  intervalColored = setInterval(() => {
    var hairButtonOne = document.getElementById("coloredHairButton");
    var hairButtonTwo = document.getElementById("naturalHairButton");

    if (hairButtonOne) {
      clearInterval(intervalColored);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/badIdea.mp4";
          video.load();
          hairButtonOne.remove();
          hairButtonTwo.remove();
          clearInterval();
        })
      );
    }
  }, 2000);
});

//Blond hair
var promiseBlondHair = new Promise((resolve) => {
  intervalBlond = setInterval(() => {
    var hairButtonOne = document.getElementById("blondHairButton");
    var hairButtonTwo = document.getElementById("brownHairButton");
    var hairButtonThree = document.getElementById("brunetteButton");

    if (hairButtonOne) {
      clearInterval(intervalBlond);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/blond.mp4";
          video.load();
          hairButtonOne.remove();
          hairButtonTwo.remove();
          hairButtonThree.remove();
          //first button
          var divForButtonFirst = document.getElementById("blondHair");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "lighterBlondHairButton";
          createButtonHair.innerHTML = "I want to have lighter blonde";
          //second button
          var divForButtonSecond = document.getElementById("brownHair");
          var createButton2 = document.createElement("button");
          var createButtonHair = divForButtonSecond.insertAdjacentElement(
            "afterbegin",
            createButton2
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "brownNewHairButton";
          createButtonHair.innerHTML = "I want to have BROWN hair";
          //third button
          var divForButtonThird = document.getElementById("brunette");
          var createButton3 = document.createElement("button");
          var createButtonHair = divForButtonThird.insertAdjacentElement(
            "afterbegin",
            createButton3
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "brunetteNewButton";
          createButtonHair.innerHTML = "I want to be a brunette";
        })
      );
    }
  }, 2000);
});

//2 options for blond
var promiseBlondHairTwoOptions = new Promise((resolve) => {
  intervalBlondTwoOptions = setInterval(() => {
    var hairButtonOne = document.getElementById("lighterBlondHairButton");
    var hairButtonTwo = document.getElementById("brownNewHairButton");
    var hairButtonThree = document.getElementById("brunetteNewButton");

    if (hairButtonOne) {
      clearInterval(intervalBlondTwoOptions);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          hairButtonThree.remove();
          //first button
          var divForButtonFirst = document.getElementById("dyeHairDiv");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "hairDye";
          createButtonHair.innerHTML = "I want to use hair dye";
          //second button
          var divForButtonSecond = document.getElementById("powderDiv");
          var createButton2 = document.createElement("button");
          var createButtonHair = divForButtonSecond.insertAdjacentElement(
            "afterbegin",
            createButton2
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "bleachingPowder";
          createButtonHair.innerHTML =
            "I want to use bleaching powder and hair toning";
        })
      );
    }
  }, 2000);
});

//button hairDye
var promiseHairDye = new Promise((resolve) => {
  intervalHairDye = setInterval(() => {
    var hairButtonOne = document.getElementById("hairDye");
    var hairButtonTwo = document.getElementById("bleachingPowder");

    if (hairButtonOne) {
      clearInterval(intervalHairDye);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/dyeBlond.mp4";
          video.load();
          hairButtonOne.remove();
          hairButtonTwo.remove();
        })
      );
    }
  }, 2000);
});

//button powderBlond
var promisePowderBlond = new Promise((resolve) => {
  intervalPowderBlond = setInterval(() => {
    var hairButtonOne = document.getElementById("bleachingPowder");
    var hairButtonTwo = document.getElementById("hairDye");

    if (hairButtonOne) {
      clearInterval(intervalPowderBlond);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/powderBlond.mp4";
          video.load();
          hairButtonOne.remove();
          hairButtonTwo.remove();
        })
      );
    }
  }, 2000);
});

//1 option from blond to brown
var promiseBlondToBrown = new Promise((resolve) => {
  intervalBlondToBrown = setInterval(() => {
    var hairButtonOne = document.getElementById("brownNewHairButton");
    var hairButtonTwo = document.getElementById("lighterBlondHairButton");
    var hairButtonThree = document.getElementById("brunetteNewButton");

    if (hairButtonOne) {
      clearInterval(intervalBlondToBrown);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          hairButtonThree.remove();
          //first button
          var divForButtonFirst = document.getElementById("dyeHairOneButton");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "hairDyeOneBrown";
          createButtonHair.innerHTML = "I want to use hair dye";
        })
      );
    }
  }, 2000);
});

//button dye hair blond to brown
var promiseToBrown = new Promise((resolve) => {
  intervalToBrown = setInterval(() => {
    var hairButtonOne = document.getElementById("hairDyeOneBrown");

    if (hairButtonOne) {
      clearInterval(intervalToBrown);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/blondToBrown.mp4";
          video.load();
          hairButtonOne.remove();
        })
      );
    }
  }, 2000);
});

//1 option from blond to brunette
var promiseBlondToBrunette = new Promise((resolve) => {
  intervalBlondToBrunette = setInterval(() => {
    var hairButtonOne = document.getElementById("brunetteNewButton");
    var hairButtonTwo = document.getElementById("lighterBlondHairButton");
    var hairButtonThree = document.getElementById("brownNewHairButton");

    if (hairButtonOne) {
      clearInterval(intervalBlondToBrunette);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          hairButtonThree.remove();
          //first button
          var divForButtonFirst = document.getElementById("dyeHairOneButton");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "hairDyeOneBrunette";
          createButtonHair.innerHTML = "I want to use hair dye";
        })
      );
    }
  }, 2000);
});

//button dye hair blond to brunette
var promiseToBrunette = new Promise((resolve) => {
  intervalToBrunette = setInterval(() => {
    var hairButtonOne = document.getElementById("hairDyeOneBrunette");

    if (hairButtonOne) {
      clearInterval(intervalToBrunette);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/blondToBrunette.mp4";
          video.load();
          hairButtonOne.remove();
        })
      );
    }
  }, 2000);
});

//Brown hair
var promiseBrownHair = new Promise((resolve) => {
  intervalBrown = setInterval(() => {
    var hairButtonOne = document.getElementById("brownHairButton");
    var hairButtonTwo = document.getElementById("blondHairButton");
    var hairButtonThree = document.getElementById("brunetteButton");

    if (hairButtonOne) {
      clearInterval(intervalBrown);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/brownHair.mp4";
          video.load();
          hairButtonOne.remove();
          hairButtonTwo.remove();
          hairButtonThree.remove();
          //first button
          var divForButtonFirst = document.getElementById("powderDivToBlond");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "toBlondFromBrown";
          createButtonHair.innerHTML = "I want to have blond hair";
          //second button
          var divForButtonSecond = document.getElementById("dyeDivToBrown");
          var createButton2 = document.createElement("button");
          var createButtonHair = divForButtonSecond.insertAdjacentElement(
            "afterbegin",
            createButton2
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "toBrunetteFromBrown";
          createButtonHair.innerHTML = "I want to be a brunette";
        })
      );
    }
  }, 2000);
});

//Brown hair to blond
var promiseBrownHairToBlond = new Promise((resolve) => {
  intervalBrownToBlond = setInterval(() => {
    var hairButtonOne = document.getElementById("toBlondFromBrown");
    var hairButtonTwo = document.getElementById("toBrunetteFromBrown");

    if (hairButtonOne) {
      clearInterval(intervalBrownToBlond);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          //first button
          var divForButtonFirst = document.getElementById("dyeToBlond");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "dyeToBlondBrown";
          createButtonHair.innerHTML = "I want to use hair dye";
          //second button
          var divForButtonSecond = document.getElementById("powderToBlond");
          var createButton2 = document.createElement("button");
          var createButtonHair = divForButtonSecond.insertAdjacentElement(
            "afterbegin",
            createButton2
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "powderToBlondBrown";
          createButtonHair.innerHTML =
            "I want to use bleaching powder and hair toning";
        })
      );
    }
  }, 2000);
});

//Brown hair to blond dye result
var promiseBrownHairToBlondDye = new Promise((resolve) => {
  intervalBrownToBlondDye = setInterval(() => {
    var hairButtonOne = document.getElementById("dyeToBlondBrown");
    var hairButtonTwo = document.getElementById("powderToBlondBrown");

    if (hairButtonOne) {
      clearInterval(intervalBrownToBlondDye);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          e.preventDefault();
          change.src = "/src/assets/video/dyeForBlondFromBrown.mp4";
          video.load();
        })
      );
    }
  }, 2000);
});

//Brown hair to blond powder result
var promiseBrownHairToBlondPowder = new Promise((resolve) => {
  intervalBrownToBlondPowder = setInterval(() => {
    var hairButtonOne = document.getElementById("powderToBlondBrown");
    var hairButtonTwo = document.getElementById("dyeToBlondBrown");

    if (hairButtonOne) {
      clearInterval(intervalBrownToBlondPowder);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          e.preventDefault();
          change.src = "/src/assets/video/powderToBlondBrown.mp4";
          video.load();
        })
      );
    }
  }, 2000);
});

//Brown hair to brunette
var promiseBrownHairToBrunette = new Promise((resolve) => {
  intervalBrownToBrunette = setInterval(() => {
    var hairButtonOne = document.getElementById("toBrunetteFromBrown");
    var hairButtonTwo = document.getElementById("toBlondFromBrown");

    if (hairButtonOne) {
      clearInterval(intervalBrownToBrunette);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          //first button
          var divForButtonFirst = document.getElementById("dyeBrownOneButton");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "dyeToBrunetteBrown";
          createButtonHair.innerHTML = "I want to use hair dye";
        })
      );
    }
  }, 2000);
});

//Brown hair to brunette result
var promiseBrownHairToBrunetteResult = new Promise((resolve) => {
  intervalBrownToBrunetteResult = setInterval(() => {
    var hairButtonOne = document.getElementById("dyeToBrunetteBrown");

    if (hairButtonOne) {
      clearInterval(intervalBrownToBrunetteResult);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          e.preventDefault();
          change.src = "/src/assets/video/brownToBrunette.mp4";
          video.load();
        })
      );
    }
  }, 2000);
});

//Brunette
var promiseBrunette = new Promise((resolve) => {
  intervalBrunette = setInterval(() => {
    var hairButtonOne = document.getElementById("brunetteButton");
    var hairButtonTwo = document.getElementById("blondHairButton");
    var hairButtonThree = document.getElementById("brownHairButton");

    if (hairButtonOne) {
      clearInterval(intervalBrunette);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          e.preventDefault();
          change.src = "/src/assets/video/brunette.mp4";
          video.load();
          hairButtonOne.remove();
          hairButtonTwo.remove();
          hairButtonThree.remove();
          //first button
          var divForButtonFirst = document.getElementById("powderDivToBlond");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "toBlondFromBrunette";
          createButtonHair.innerHTML = "I want to have blond hair";
          //second button
          var divForButtonSecond = document.getElementById("dyeDivToBrown");
          var createButton2 = document.createElement("button");
          var createButtonHair = divForButtonSecond.insertAdjacentElement(
            "afterbegin",
            createButton2
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "toBrownFromBrunette";
          createButtonHair.innerHTML = "I want to have brown hair";
        })
      );
    }
  }, 2000);
});

//Brunette hair to blond
var promiseBrunetteToBlond = new Promise((resolve) => {
  intervalBrunetteToBlond = setInterval(() => {
    var hairButtonOne = document.getElementById("toBlondFromBrunette");
    var hairButtonTwo = document.getElementById("toBrownFromBrunette");

    if (hairButtonOne) {
      clearInterval(intervalBrunetteToBlond);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          //first button
          var divForButtonFirst = document.getElementById("dyeToBlondBrunette");
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "dyeToBlondBrunette1";
          createButtonHair.innerHTML = "I want to use hair dye";
          //second button
          var divForButtonSecond = document.getElementById(
            "powderToBlondBrunette"
          );
          var createButton2 = document.createElement("button");
          var createButtonHair = divForButtonSecond.insertAdjacentElement(
            "afterbegin",
            createButton2
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "powderToBlondBrunetteButton";
          createButtonHair.innerHTML =
            "I want to use bleaching powder and hair toning";
        })
      );
    }
  }, 2000);
});

//Brunette hair to blond dye result
var promiseBrunetteToBlondDye = new Promise((resolve) => {
  intervalBrunetteBlondDye = setInterval(() => {
    var hairButtonOne = document.getElementById("dyeToBlondBrunette1");
    var hairButtonTwo = document.getElementById("powderToBlondBrunetteButton");

    if (hairButtonOne) {
      clearInterval(intervalBrunetteBlondDye);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonTwo.remove();
          hairButtonOne.remove();
          e.preventDefault();
          change.src = "/src/assets/video/dyeToBlondBrunette.mp4";
          video.load();
        })
      );
    }
  }, 2000);
});

//Brunette to blond powder result
var promiseBrunetteToBlondPowder = new Promise((resolve) => {
  intervalBrunetteToBlondPowder = setInterval(() => {
    var hairButtonOne = document.getElementById("powderToBlondBrunetteButton");
    var hairButtonTwo = document.getElementById("dyeToBlondBrunette1");

    if (hairButtonOne) {
      clearInterval(intervalBrunetteToBlondPowder);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          e.preventDefault();
          change.src = "/src/assets/video/powderBrunette.mp4";
          video.load();
        })
      );
    }
  }, 2000);
});

//Brunette to brown hair
var promiseBrunetteToBrown = new Promise((resolve) => {
  intervalBrunetteToBrown = setInterval(() => {
    var hairButtonOne = document.getElementById("toBrownFromBrunette");
    var hairButtonTwo = document.getElementById("toBlondFromBrunette");

    if (hairButtonOne) {
      clearInterval(intervalBrunetteToBrown);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          hairButtonTwo.remove();
          //first button
          var divForButtonFirst = document.getElementById(
            "dyeBrunetteOneButton"
          );
          var createButton1 = document.createElement("button");
          var createButtonHair = divForButtonFirst.insertAdjacentElement(
            "afterbegin",
            createButton1
          );
          createButtonHair.className = "btn btn-primary";
          createButtonHair.id = "dyeBrunetteBrownButton";
          createButtonHair.innerHTML = "I want to use hair dye";
        })
      );
    }
  }, 2000);
});

//Brunette to brown hair result
var promiseBunetteToBrownResult = new Promise((resolve) => {
  intervalBrunetteToBrownResult = setInterval(() => {
    var hairButtonOne = document.getElementById("dyeBrunetteBrownButton");

    if (hairButtonOne) {
      clearInterval(intervalBrunetteToBrownResult);
      resolve(
        hairButtonOne.addEventListener("click", function (e) {
          hairButtonOne.remove();
          e.preventDefault();
          change.src = "/src/assets/video/brunetteToBrown.mp4";
          video.load();
        })
      );
    }
  }, 2000);
});

//for button Try Again
document.getElementById('tryAgain').addEventListener("click", function () {
  window.location.reload(true);
})



//for API
var changeImgSrc;
var object;
var json;
var ingredient;
var image;
var divForText;

function changesInForm() {
  changeImgSrc = document.getElementById("img1");
  divForText = document.getElementById("forText");
  var formChoose = document.getElementById("choose");
  var allOptions = formChoose.options[formChoose.selectedIndex];
  if (allOptions === document.getElementById("form1")) {
    var http = new XMLHttpRequest();
    var url1 =
      "https://world.openbeautyfacts.org/api/v0/product/0022796976017.json";
    http.open("GET", url1);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form2")) {
    var http = new XMLHttpRequest();
    var url2 =
      "https://world.openbeautyfacts.org/api/v0/product/0037000537076.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
    // eslint-disable-next-line no-use-before-define
    deleteButton();
  } else if (allOptions === document.getElementById("form3")) {
    var http = new XMLHttpRequest();
    var url2 = "https://world.openbeautyfacts.org/api/v0/product/02138424.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form4")) {
    var http = new XMLHttpRequest();
    var url2 = "https://world.openbeautyfacts.org/api/v0/product/02337.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form5")) {
    var http = new XMLHttpRequest();
    var url2 = "https://world.openbeautyfacts.org/api/v0/product/02472429.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form6")) {
    var http = new XMLHttpRequest();
    var url2 = "https://world.openbeautyfacts.org/api/v0/product/03077.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form7")) {
    var http = new XMLHttpRequest();
    var url2 =
      "https://world.openbeautyfacts.org/api/v0/product/3178041301138.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form8")) {
    var http = new XMLHttpRequest();
    var url2 =
      "https://world.openbeautyfacts.org/api/v0/product/8710447298893.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form9")) {
    var http = new XMLHttpRequest();
    var url2 =
      "https://world.openbeautyfacts.org/api/v0/product/5410091712334.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form10")) {
    var http = new XMLHttpRequest();
    var url2 =
      "https://world.openbeautyfacts.org/api/v0/product/5410091712334.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("form11")) {
    var http = new XMLHttpRequest();
    var url2 =
      "https://world.openbeautyfacts.org/api/v0/product/5060176674868.json";
    http.open("GET", url2);
    http.send();
    http.onload = function () {
      object = http.response;
      json = JSON.parse(object);
      ingredient = json.product.ingredients_text;
      image = json.product.image_front_url;
      changeImgSrc.src = image;
      divForText.innerHTML = ingredient;
    };
  } else if (allOptions === document.getElementById("chooseProduct")) {
    changeImgSrc.src = "";
    divForText.innerHTML = "";
  }
}

