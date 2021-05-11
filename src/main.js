function game() {

    console.log('JavaScript Project');

    //shuttle tablicowe
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ranNums = [],
        i = nums.length,
        j = 0;
    addClass = [];

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1)
    }

    //zmienne
    var cardCompare = []; 
    var pairsCounter = 0; // licznik trafień par kart
    var sameCardChecker = [] //zmienna do sprawdzania czy ta sama karta jest kliknięta
    //funkcje
    function different() {
        // document.querySelector(".board div:nth-child" + "(" + addClass[0] + ")").classList.remove("card1")
        document.querySelector(".board div:nth-child" + "(" + addClass[0] + ")").classList.remove("card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24");
            
        document.querySelector(".board div:nth-child" + "(" + addClass[1] + ")").classList.remove("card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24");

        cardCompare = [];
        addClass = [];
    };

    function pairsCount() {
        document.querySelector(".countMatches").innerHTML="Liczba trafień: " + pairsCounter;
    }

    // porównanie kart
    function sameCards(var1) {
        addClass.push(var1);
        if (cardCompare.length == 2) {
            console.log("2!");
            if (cardCompare[0] == cardCompare[1] && sameCardChecker[0] != sameCardChecker[1]) {
                console.log("Te same!");
                pairsCounter++;
                console.log("pairsCounter= " + pairsCounter);
                document.querySelector(".board div:nth-child" + "(" + addClass[0] + ")").classList.add("match");
                document.querySelector(".board div:nth-child" + "(" + addClass[1] + ")").classList.add("match");
                cardCompare = [];
                addClass = [];
                sameCardChecker = [];
                pairsCount();
            } else {
                console.log("Różne!");
                // document.querySelector(".board div:nth-child" + "(" + addClass[0] + ")").addEventListener("click", function () {
                //     console.log("TRACERT")
                //     document.querySelector(".board div:nth-child" + "(" + addClass[0] + ")").classList.remove("card1");

                //     document.querySelector(".board div:nth-child" + "(" + addClass[1] + ")").classList.remove("card1");
                // });
                setTimeout(different, 800);
                sameCardChecker = [];
                // different();
                
                // document.querySelector(".board div:nth-child" + "(" + addClass[1] + ")").classList.remove("card1");

                // cardCompare = [];
                // addClass = [];
            }
        }
    }


    //karta 1
    // setInterval(function(){alert("Hello")},3000);

    function showCard() {
        getCard1.classList.add("card" + ranNums[0]);
        cardCompare.push(ranNums[0]);
        console.log(cardCompare);
        console.log(sameCardChecker);
        sameCardChecker.push(1); //11.05.2021
        sameCards("1"); //dodać argument do funkcji i przekazać go do niej
    };
    var getCard1 = document.querySelector(".board div:nth-child(1)");
    getCard1.addEventListener("click", function () {
        showCard();
    });


    //karta 2

    function showCard2() {
        getCard2.classList.add("card" + ranNums[1]);
        cardCompare.push(ranNums[1]);
        console.log("card compare: " + cardCompare);
        console.log(sameCardChecker);
        sameCardChecker.push(2); //11.05.2021
        sameCards("2");
    };

    var getCard2 = document.querySelector(".board div:nth-child(2)");
    getCard2.addEventListener("click", function () {
        showCard2();
    });

    //karta 3

    function showCard3() {
        getCard3.classList.add("card" + ranNums[2]);
        cardCompare.push(ranNums[2]);
        console.log(cardCompare);
        sameCardChecker.push(3); //11.05.2021
        sameCards("3");
    }
    var getCard3 = document.querySelector(".board div:nth-child(3)");
    getCard3.addEventListener("click", function () {
        showCard3();
    });

    //karta 4

    function showCard4() {
        getCard4.classList.add("card" + ranNums[3]);
        cardCompare.push(ranNums[3]);
        console.log(cardCompare);
        sameCardChecker.push(4); //11.05.2021
        sameCards("4");
    }
    var getCard4 = document.querySelector(".board div:nth-child(4)");
    getCard4.addEventListener("click", function () {
        showCard4();
    });

    //karta 5

    function showCard5() {
        getCard5.classList.add("card" + ranNums[4]);
        cardCompare.push(ranNums[4]);
        console.log(cardCompare);
        sameCardChecker.push(5); //11.05.2021
        sameCards("5");
    }
    var getCard5 = document.querySelector(".board div:nth-child(5)");
    getCard5.addEventListener("click", function () {
        showCard5();
    });


    //karta 6

    function showCard6() {
        getCard6.classList.add("card" + ranNums[5]);
        cardCompare.push(ranNums[5]);
        console.log(cardCompare);
        sameCardChecker.push(6); //11.05.2021
        sameCards("6");
    }
    var getCard6 = document.querySelector(".board div:nth-child(6)");
    getCard6.addEventListener("click", function () {
        showCard6();
    });


    //karta 7

    function showCard7() {
        getCard7.classList.add("card" + ranNums[6]);
        cardCompare.push(ranNums[6]);
        console.log(cardCompare);
        sameCardChecker.push(7); //11.05.2021
        sameCards("7");
    }
    var getCard7 = document.querySelector(".board div:nth-child(7)");
    getCard7.addEventListener("click", function () {
        showCard7();
    });


    //karta 8

    function showCard8() {
        getCard8.classList.add("card" + ranNums[7]);
        cardCompare.push(ranNums[7]);
        console.log(cardCompare);
        sameCardChecker.push(8); //11.05.2021
        sameCards("8");
    }
    var getCard8 = document.querySelector(".board div:nth-child(8)");
    getCard8.addEventListener("click", function () {
        showCard8();
    });


    //karta 9

    function showCard9() {
        getCard9.classList.add("card" + ranNums[8]);
        cardCompare.push(ranNums[8]);
        console.log(cardCompare);
        sameCardChecker.push(9); //11.05.2021
        sameCards("9");
    }
    var getCard9 = document.querySelector(".board div:nth-child(9)");
    getCard9.addEventListener("click", function () {
        showCard9();
    });

    //karta 10

    function showCard10() {
        getCard10.classList.add("card" + ranNums[9]);
        cardCompare.push(ranNums[9]);
        console.log(cardCompare);
        sameCardChecker.push(10); //11.05.2021
        sameCards("10");
    }
    var getCard10 = document.querySelector(".board div:nth-child(10)");
    getCard10.addEventListener("click", function () {
        showCard10();
    });


    //karta 11

    function showCard11() {
        getCard11.classList.add("card" + ranNums[10]);
        cardCompare.push(ranNums[10]);
        console.log(cardCompare);
        sameCardChecker.push(11); //11.05.2021
        sameCards("11");
    }
    var getCard11 = document.querySelector(".board div:nth-child(11)");
    getCard11.addEventListener("click", function () {
        showCard11();
    });

    //karta 12

    function showCard12() {
        getCard12.classList.add("card" + ranNums[11]);
        cardCompare.push(ranNums[11]);
        console.log(cardCompare);
        sameCardChecker.push(12); //11.05.2021
        sameCards("12");
    }
    var getCard12 = document.querySelector(".board div:nth-child(12)");
    getCard12.addEventListener("click", function () {
        showCard12();
    });

    //karta 13

    function showCard13() {
        getCard13.classList.add("card" + ranNums[12]);
        cardCompare.push(ranNums[12]);
        console.log(cardCompare);
        sameCardChecker.push(13); //11.05.2021
        sameCards("13");
    }
    var getCard13 = document.querySelector(".board div:nth-child(13)");
    getCard13.addEventListener("click", function () {
        showCard13();
    });


    //karta 14

    function showCard14() {
        getCard14.classList.add("card" + ranNums[13]);
        cardCompare.push(ranNums[13]);
        console.log(cardCompare);
        sameCardChecker.push(14); //11.05.2021
        sameCards("14");
    }
    var getCard14 = document.querySelector(".board div:nth-child(14)");
    getCard14.addEventListener("click", function () {
        showCard14();
    });


    //karta 15

    function showCard15() {
        getCard15.classList.add("card" + ranNums[14]);
        cardCompare.push(ranNums[14]);
        console.log(cardCompare);
        sameCardChecker.push(15); //11.05.2021
        sameCards("15");
    }
    var getCard15 = document.querySelector(".board div:nth-child(15)");
    getCard15.addEventListener("click", function () {
        showCard15();
    });


    //karta 16

    function showCard16() {
        getCard16.classList.add("card" + ranNums[15]);
        cardCompare.push(ranNums[15]);
        console.log(cardCompare);
        sameCardChecker.push(16); //11.05.2021
        sameCards("16");
    }
    var getCard16 = document.querySelector(".board div:nth-child(16)");
    getCard16.addEventListener("click", function () {
        showCard16();
    });

    //karta 17

    function showCard17() {
        getCard17.classList.add("card" + ranNums[16]);
        cardCompare.push(ranNums[16]);
        console.log(cardCompare);
        sameCardChecker.push(17); //11.05.2021
        sameCards("17");
    }
    var getCard17 = document.querySelector(".board div:nth-child(17)");
    getCard17.addEventListener("click", function () {
        showCard17();
    });

    //karta 18

    function showCard18() {
        getCard18.classList.add("card" + ranNums[17]);
        cardCompare.push(ranNums[17]);
        console.log(cardCompare);
        sameCardChecker.push(18); //11.05.2021
        sameCards("18");
    }
    var getCard18 = document.querySelector(".board div:nth-child(18)");
    getCard18.addEventListener("click", function () {
        showCard18();
    });

    //karta 19

    function showCard19() {
        getCard19.classList.add("card" + ranNums[18]);
        cardCompare.push(ranNums[18]);
        console.log(cardCompare);
        sameCardChecker.push(19); //11.05.2021
        sameCards("19");
    }
    var getCard19 = document.querySelector(".board div:nth-child(19)");
    getCard19.addEventListener("click", function () {
        showCard19();
    });

    //karta 20

    function showCard20() {
        getCard20.classList.add("card" + ranNums[19]);
        cardCompare.push(ranNums[19]);
        console.log(cardCompare);
        sameCardChecker.push(20); //11.05.2021
        sameCards("20");
    }
    var getCard20 = document.querySelector(".board div:nth-child(20)");
    getCard20.addEventListener("click", function () {
        showCard20();
    });


    //karta 21

    function showCard21() {
        getCard21.classList.add("card" + ranNums[20]);
        cardCompare.push(ranNums[20]);
        console.log(cardCompare);
        sameCardChecker.push(21); //11.05.2021
        sameCards("21");
    }
    var getCard21 = document.querySelector(".board div:nth-child(21)");
    getCard21.addEventListener("click", function () {
        showCard21();
    });


    //karta 22

    function showCard22() {
        getCard22.classList.add("card" + ranNums[21]);
        cardCompare.push(ranNums[21]);
        console.log(cardCompare);
        sameCardChecker.push(22); //11.05.2021
        sameCards("22");
    }
    var getCard22 = document.querySelector(".board div:nth-child(22)");
    getCard22.addEventListener("click", function () {
        showCard22();
    });

    //karta 23

    function showCard23() {
        getCard23.classList.add("card" + ranNums[22]);
        cardCompare.push(ranNums[22]);
        console.log(cardCompare);
        sameCardChecker.push(23); //11.05.2021
        sameCards("23");
    }
    var getCard23 = document.querySelector(".board div:nth-child(23)");
    getCard23.addEventListener("click", function () {
        showCard23();
    });

    //karta 24

    function showCard24() {
        getCard24.classList.add("card" + ranNums[23]);
        cardCompare.push(ranNums[23]);
        console.log(cardCompare);
        sameCardChecker.push(24); //11.05.2021
        sameCards("24");
    }
    var getCard24 = document.querySelector(".board div:nth-child(24)");
    getCard24.addEventListener("click", function () {
        showCard24();
    });


}

game()