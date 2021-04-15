function game() {

    console.log('JavaScript Project');

    //shuttle tablicowe
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ranNums = [],
        i = nums.length,
        j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1)
    }

    //zmienne
    cardCompare = [];

    //funkcje
    //card compare
    //z cardCompare po pushu na klika chcemy mieć tylko unikalne wartości czyli jedną wartość nawet po kilku klikach
    //
    // function uniquer() {
    //     var cardCompareUniq = cardCompare.reduce(function (a, b) {
    //         if (a.indexOf(b) < 0) a.push(b);
    //         return a;
    //     }, []);
    //     console.log(cardCompareUniq)
    // }

    //najpierw losowanie i wtedy dodajemy po kliknięciu klasę zmień z +1 na tablicę [0], [1] itd.
    //karta 1

    // function showCard() {
    //     getCard1.classList.add("card" + ranNums[0]); 
    //     cardCompare.push(ranNums[0]);
    // }
    // var getCard1 = document.querySelector(".board div:nth-child(1)");
    // getCard1.addEventListener("click", showCard);



    function showCard() {
        getCard1.classList.add("card" + ranNums[0]);
        cardCompare.push(ranNums[0]);
        console.log(cardCompare);
    }
    var getCard1 = document.querySelector(".board div:nth-child(1)");
    getCard1.addEventListener("click", function (event) {
        showCard();
    }, {
        once: true
    });


    //karta 2
    // function showCard2() {
    //     getCard2.classList.add("card" + ranNums[1]); 
    //     cardCompare.push(ranNums[1]);
    //     console.log(cardCompare);
    // }
    // var getCard2 = document.querySelector(".board div:nth-child(2)");
    // getCard2.addEventListener("click", showCard2);

    function showCard2() {
        getCard2.classList.add("card" + ranNums[1]);
        cardCompare.push(ranNums[1]);
        console.log(cardCompare);
    }
    var getCard2 = document.querySelector(".board div:nth-child(2)");
    getCard2.addEventListener("click", function (event) {
        showCard2();
    }, {
        once: true
    });

    //karta 3
    // function showCard3() {
    //     getCard3.classList.add("card" + ranNums[2]); 
    //     cardCompare.push(ranNums[2]);
    //   
    // }
    // var getCard3 = document.querySelector(".board div:nth-child(3)");
    // getCard3.addEventListener("click", showCard3);

    function showCard3() {
        getCard3.classList.add("card" + ranNums[2]);
        cardCompare.push(ranNums[2]);
        console.log(cardCompare);
    }
    var getCard3 = document.querySelector(".board div:nth-child(3)");
    getCard3.addEventListener("click", function (event) {
        showCard3();
    }, {
        once: true
    });

    //karta 4
    // function showCard4() {
    //     getCard4.classList.add("card" + ranNums[3]); 
    // }
    // var getCard4 = document.querySelector(".board div:nth-child(4)");
    // getCard4.addEventListener("click", showCard4);

    function showCard4() {
        getCard4.classList.add("card" + ranNums[3]);
        cardCompare.push(ranNums[3]);
        console.log(cardCompare);
    }
    var getCard4 = document.querySelector(".board div:nth-child(4)");
    getCard4.addEventListener("click", function (event) {
        showCard4();
    }, {
        once: true
    });

    //karta 5
    // function showCard5() {
    //     getCard5.classList.add("card" + ranNums[4]); 
    // }
    // var getCard5 = document.querySelector(".board div:nth-child(5)");
    // getCard5.addEventListener("click", showCard5);

    function showCard5() {
        getCard5.classList.add("card" + ranNums[4]);
        cardCompare.push(ranNums[4]);
        console.log(cardCompare);
    }
    var getCard5 = document.querySelector(".board div:nth-child(5)");
    getCard5.addEventListener("click", function (event) {
        showCard5();
    }, {
        once: true
    });


    //karta 6
    // function showCard6() {
    //     getCard6.classList.add("card" + ranNums[5]); 
    // }
    // var getCard6 = document.querySelector(".board div:nth-child(6)");
    // getCard6.addEventListener("click", showCard6);

    function showCard6() {
        getCard6.classList.add("card" + ranNums[5]);
        cardCompare.push(ranNums[5]);
        console.log(cardCompare);
    }
    var getCard6 = document.querySelector(".board div:nth-child(6)");
    getCard6.addEventListener("click", function (event) {
        showCard6();
    }, {
        once: true
    });


    //karta 7
    // function showCard7() {
    //     getCard7.classList.add("card" + ranNums[6]); 
    // }
    // var getCard7 = document.querySelector(".board div:nth-child(7)");
    // getCard7.addEventListener("click", showCard7);

    function showCard7() {
        getCard7.classList.add("card" + ranNums[6]);
        cardCompare.push(ranNums[6]);
        console.log(cardCompare);
    }
    var getCard7 = document.querySelector(".board div:nth-child(7)");
    getCard7.addEventListener("click", function (event) {
        showCard7();
    }, {
        once: true
    });


    //karta 8
    // function showCard8() {
    //     getCard8.classList.add("card" + ranNums[7]); 
    // }
    // var getCard8 = document.querySelector(".board div:nth-child(8)");
    // getCard8.addEventListener("click", showCard8);

    function showCard8() {
        getCard8.classList.add("card" + ranNums[7]);
        cardCompare.push(ranNums[7]);
        console.log(cardCompare);
    }
    var getCard8 = document.querySelector(".board div:nth-child(8)");
    getCard8.addEventListener("click", function (event) {
        showCard8();
    }, {
        once: true
    });


    //karta 9
    // function showCard9() {
    //     getCard9.classList.add("card" + ranNums[8]); 
    // }
    // var getCard9 = document.querySelector(".board div:nth-child(9)");
    // getCard9.addEventListener("click", showCard9);

    function showCard9() {
        getCard9.classList.add("card" + ranNums[8]);
        cardCompare.push(ranNums[8]);
        console.log(cardCompare);
    }
    var getCard9 = document.querySelector(".board div:nth-child(9)");
    getCard9.addEventListener("click", function (event) {
        showCard9();
    }, {
        once: true
    });

    //karta 10
    // function showCard10() {
    //     getCard10.classList.add("card" + ranNums[9]); 
    // }
    // var getCard10 = document.querySelector(".board div:nth-child(10)");
    // getCard10.addEventListener("click", showCard10);

    function showCard10() {
        getCard10.classList.add("card" + ranNums[9]);
        cardCompare.push(ranNums[9]);
        console.log(cardCompare);
    }
    var getCard10 = document.querySelector(".board div:nth-child(10)");
    getCard10.addEventListener("click", function (event) {
        showCard10();
    }, {
        once: true
    });


    //karta 11
    // function showCard11() {
    //     getCard11.classList.add("card" + ranNums[10]); 
    // }
    // var getCard11 = document.querySelector(".board div:nth-child(11)");
    // getCard11.addEventListener("click", showCard11);


    function showCard11() {
        getCard11.classList.add("card" + ranNums[10]);
        cardCompare.push(ranNums[10]);
        console.log(cardCompare);
    }
    var getCard11 = document.querySelector(".board div:nth-child(11)");
    getCard11.addEventListener("click", function (event) {
        showCard11();
    }, {
        once: true
    });

    //karta 12
    // function showCard12() {
    //     getCard12.classList.add("card" + ranNums[11]); 
    // }
    // var getCard12 = document.querySelector(".board div:nth-child(12)");
    // getCard12.addEventListener("click", showCard12);

    function showCard12() {
        getCard12.classList.add("card" + ranNums[11]);
        cardCompare.push(ranNums[11]);
        console.log(cardCompare);
    }
    var getCard12 = document.querySelector(".board div:nth-child(12)");
    getCard12.addEventListener("click", function (event) {
        showCard12();
    }, {
        once: true
    });

    //karta 13
    // function showCard13() {
    //     getCard13.classList.add("card" + ranNums[12]);
    // }
    // var getCard13 = document.querySelector(".board div:nth-child(13)");
    // getCard13.addEventListener("click", showCard13);

    function showCard13() {
        getCard13.classList.add("card" + ranNums[12]);
        cardCompare.push(ranNums[12]);
        console.log(cardCompare);
    }
    var getCard13 = document.querySelector(".board div:nth-child(13)");
    getCard13.addEventListener("click", function (event) {
        showCard13();
    }, {
        once: true
    });


    //karta 14
    // function showCard14() {
    //     getCard14.classList.add("card" + ranNums[13]);
    // }
    // var getCard14 = document.querySelector(".board div:nth-child(14)");
    // getCard14.addEventListener("click", showCard14);

    function showCard14() {
        getCard14.classList.add("card" + ranNums[13]);
        cardCompare.push(ranNums[13]);
        console.log(cardCompare);
    }
    var getCard14 = document.querySelector(".board div:nth-child(14)");
    getCard14.addEventListener("click", function (event) {
        showCard14();
    }, {
        once: true
    });


    //karta 15
    // function showCard15() {
    //     getCard15.classList.add("card" + ranNums[14]);
    // }
    // var getCard15 = document.querySelector(".board div:nth-child(15)");
    // getCard15.addEventListener("click", showCard15);

    function showCard15() {
        getCard15.classList.add("card" + ranNums[14]);
        cardCompare.push(ranNums[14]);
        console.log(cardCompare);
    }
    var getCard15 = document.querySelector(".board div:nth-child(15)");
    getCard15.addEventListener("click", function (event) {
        showCard15();
    }, {
        once: true
    });


    //karta 16
    // function showCard16() {
    //     getCard16.classList.add("card" + ranNums[15]);
    // }
    // var getCard16 = document.querySelector(".board div:nth-child(16)");
    // getCard16.addEventListener("click", showCard16);

    function showCard16() {
        getCard16.classList.add("card" + ranNums[15]);
        cardCompare.push(ranNums[15]);
        console.log(cardCompare);
    }
    var getCard16 = document.querySelector(".board div:nth-child(16)");
    getCard16.addEventListener("click", function (event) {
        showCard16();
    }, {
        once: true
    });

    //karta 17
    // function showCard17() {
    //     getCard17.classList.add("card" + ranNums[16]);
    // }
    // var getCard17 = document.querySelector(".board div:nth-child(17)");
    // getCard17.addEventListener("click", showCard17);

    function showCard17() {
        getCard17.classList.add("card" + ranNums[16]);
        cardCompare.push(ranNums[16]);
        console.log(cardCompare);
    }
    var getCard17 = document.querySelector(".board div:nth-child(17)");
    getCard17.addEventListener("click", function (event) {
        showCard17();
    }, {
        once: true
    });

    //karta 18
    // function showCard18() {
    //     getCard18.classList.add("card" + ranNums[17]);
    // }
    // var getCard18 = document.querySelector(".board div:nth-child(18)");
    // getCard18.addEventListener("click", showCard18);

    function showCard18() {
        getCard18.classList.add("card" + ranNums[17]);
        cardCompare.push(ranNums[17]);
        console.log(cardCompare);
    }
    var getCard18 = document.querySelector(".board div:nth-child(18)");
    getCard18.addEventListener("click", function (event) {
        showCard18();
    }, {
        once: true
    });

    //karta 19
    // function showCard19() {
    //     getCard19.classList.add("card" + ranNums[18]);
    // }
    // var getCard19 = document.querySelector(".board div:nth-child(19)");
    // getCard19.addEventListener("click", showCard19);

    function showCard19() {
        getCard19.classList.add("card" + ranNums[18]);
        cardCompare.push(ranNums[18]);
        console.log(cardCompare);
    }
    var getCard19 = document.querySelector(".board div:nth-child(19)");
    getCard19.addEventListener("click", function (event) {
        showCard19();
    }, {
        once: true
    });

    //karta 20
    // function showCard20() {
    //     getCard20.classList.add("card" + ranNums[19]);
    // }
    // var getCard20 = document.querySelector(".board div:nth-child(20)");
    // getCard20.addEventListener("click", showCard20);

    function showCard20() {
        getCard20.classList.add("card" + ranNums[19]);
        cardCompare.push(ranNums[19]);
        console.log(cardCompare);
    }
    var getCard20 = document.querySelector(".board div:nth-child(20)");
    getCard20.addEventListener("click", function (event) {
        showCard20();
    }, {
        once: true
    });


    //karta 21
    // function showCard21() {
    //     getCard21.classList.add("card" + ranNums[20]);
    // }
    // var getCard21 = document.querySelector(".board div:nth-child(21)");
    // getCard21.addEventListener("click", showCard21);

    function showCard21() {
        getCard21.classList.add("card" + ranNums[20]);
        cardCompare.push(ranNums[20]);
        console.log(cardCompare);
    }
    var getCard21 = document.querySelector(".board div:nth-child(21)");
    getCard21.addEventListener("click", function (event) {
        showCard21();
    }, {
        once: true
    });


    //karta 22
    // function showCard22() {
    //     getCard22.classList.add("card" + ranNums[21]);
    // }
    // var getCard22 = document.querySelector(".board div:nth-child(22)");
    // getCard22.addEventListener("click", showCard22);

    function showCard22() {
        getCard22.classList.add("card" + ranNums[21]);
        cardCompare.push(ranNums[21]);
        console.log(cardCompare);
    }
    var getCard22 = document.querySelector(".board div:nth-child(22)");
    getCard22.addEventListener("click", function (event) {
        showCard22();
    }, {
        once: true
    });

    //karta 23
    // function showCard23() {
    //     getCard23.classList.add("card" + ranNums[22]);
    // }
    // var getCard23 = document.querySelector(".board div:nth-child(23)");
    // getCard23.addEventListener("click", showCard23);

    function showCard23() {
        getCard23.classList.add("card" + ranNums[22]);
        cardCompare.push(ranNums[22]);
        console.log(cardCompare);
    }
    var getCard23 = document.querySelector(".board div:nth-child(23)");
    getCard23.addEventListener("click", function (event) {
        showCard23();
    }, {
        once: true
    });

    //karta 24
    // function showCard24() {
    //     getCard24.classList.add("card" + ranNums[23]);
    // }
    // var getCard24 = document.querySelector(".board div:nth-child(24)");
    // getCard24.addEventListener("click", showCard24);

    function showCard24() {
        getCard24.classList.add("card" + ranNums[23]);
        cardCompare.push(ranNums[23]);
        console.log(cardCompare);
    }
    var getCard24 = document.querySelector(".board div:nth-child(24)");
    getCard24.addEventListener("click", function (event) {
        showCard24();
    }, {
        once: true
    });

}

game()