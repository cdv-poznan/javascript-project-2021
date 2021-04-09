console.log('JavaScript Project');

//dodać shuttle tablicowe



// function showCard() {  
//     console.log("1");
// getCard.classList.add("showCard" + "1"); 

//    var getCard = document.getElementsByClassName("card1"); 
//    getCard.addEventListener("click", showCard); 

//    var getCard = document.getElementsByClassName("card1");
//    getCard.addEventListener('click, showCard')

// DZIAŁA
// document.getElementById("card1").addEventListener("click", function() {
//     console.log("cards");
//   }); 
// DZIAŁA

//najpierw losowanie i wtedy dodajemy po kliknięciu klasę zmień z +1 na tablicę [0], [1] itd.
function showCard() {
    console.log("1");
    getCard1.classList.add("showCard" + "1");
    // document.body.background = 'assets/icons/1.png'+num+'.jpg'
}

var getCard1 = document.querySelector(".card1");
getCard1.addEventListener("click", showCard);
