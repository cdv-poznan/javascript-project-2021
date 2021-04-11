/* eslint-disable prettier/prettier */
$(document).ready(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container"><p>Hi! My name is Yana. I am a professional hair stylist who has been putting order on my client`s heads (and sometimes in their heads ;-) ) for more than 8 years.</p><p>I understand that you want to dye your hair, so I will be happy to share my experience with you.</p><h3>Shall we begin?</h3><button type="button" id="okForJs" class="btn btn-info">OK</button></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "110%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
  });
  
  //function, which make next 2 buttons
 $(function () {
    var shown = true;
    $("#okForJs").on("click", function () {
      $("#video").hideBalloon();
      shown = !shown;
    });
  });
  
  //explanation of what is natural and colored hair
  $("#naturalHair").mouseenter(function () {
    $("#naturalHairButton").balloon({
      html: true,
      position: "top left",
      contents:
        '<div class="container"><p>Natural hair is those that have never been dyed or those that have completely grown back after a previous coloring</p></div>',
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "120%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
        opacity: "0.7",
      },
    });
  });
  
  $("#coloredHair").mouseenter(function () {
    $("#coloredHairButton").balloon({
      html: true,
      position: "top right",
      contents:
        '<div class="container"><p>Colored hair is one that has been colored or discolored at least once. Sometimes even the use of toning shampoo, mask, foam and other toning products is important</p></div>',
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "120%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
        opacity: "0.7",
      },
    });
  });
  
  //explanation of hair tones
  $("#blondHair, #brownHair, #brunette").mouseover(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><p>So, let`s determine what your hair color tone is.</p><p>10-7 - this is blonde hair;</p><p>6 - this is a transition shade between blonde hair and brown hair, the result of coloring is closer to brown hair;</p><p>5-4 - this is brown hair;</p><p>3 - this is a transition shade between brown hair and dark hair, the result of coloring is closer to dark hair;</p><p>2-1  - brunette (dark hair).</p><h5>Let`s look at the tone levels and determine which one you have.</h5><a href="#note" target="_self" id="clickLink">OK</a></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#clickLink").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
        $("#blondHair, #brownHair, #brunette").unbind("mouseover");
      });
    });
  });
  
  //the function of closing colored hair
  $("#coloredHair").click(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><p>Listen, if you want to somehow radically change your hair color, even if you just change the shade, it is better to consult a hairdresser beforehand, so that you do not accidentally get a green color at the exit.</p><p><h5>To correctly explain to the stylist what products you applied to your hair, I recommend going to</h5><a href="#note1" target="_self" id="clickLink">Classification of coloring substances</a></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#clickLink").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
      });
    });
  });
  
  //explanation of hair dye and powder
  
  $("#dyeHairDiv, #dyeToBlond, #dyeToBlondBrunette").mouseenter(function () {
    $("#hairDye, #dyeToBlondBrown, #dyeToBlondBrunette").balloon({
      html: true,
      position: "top left",
      contents:
        '<div class="container"><p>Hair dye can discolor by 1-3 tones, usually gives a yellowish or yellow-orange shade, which is quite difficult to remove</p></div>',
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
        opacity: "0.7",
      },
    });
  });
  
  $("#powderDiv, #powderToBlond, #powderToBlondBrunette").mouseenter(function () {
    $(
      "#bleachingPowder, #powderToBlondBrown, #powderToBlondBrunetteButton"
    ).balloon({
      html: true,
      position: "top right",
      contents:
        '<div class="container"><p>One of the most harmful hair products, but it allows you to discolor from 3 to 5 tones or more. Usually the hair gets a yellow, yellow-orange shade, which is easily eliminated due to the subsequent toning of the hair</p></div>',
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
        opacity: "0.7",
      },
    });
  });
  
  //the function of closing dyeBlond hair
  $("#dyeHairDiv").click(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><h5>WOW!</h5><p>My hair has become lighter! So there is a slightly yellowish tint, but this is a great option if you want to achieve warm shades.</p><h5>And now you can see what else is on the page or refresh it and try again</h5><button type="button" id="ok1" class="btn btn-info">OK, thanks</button></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#ok1").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
      });
    });
  });
  
  //the function of closing powderBlond hair
  $("#powderDiv").click(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><h5>WOW!</h5><p>Cool ultra-light blonde - this is exactly what I wanted!<h5>And now you can see what else is on the page or refresh it and try again</h5><button type="button" id="ok1" class="btn btn-info">OK, thanks</button></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#ok1").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
      });
    });
});
  
  //explanation of hair dye for brown hair
  
  $("#dyeHairOneButton, #dyeBrownOneButton").mouseenter(function () {
    $("#hairDyeOneBrown, #hairDyeOneBrunette, #dyeToBrunetteBrown").balloon({
      html: true,
      position: "top left",
      contents:
        '<div class="container"><p>If we want to dye our hair in a dark color, hair dye will perfectly cope with this</p></div>',
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
        opacity: "0.7",
      },
    });
  });
  
  //the function of closing dye hair blond to brown
  $("#dyeHairOneButton").click(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><h5>WOW!</h5><p>How easy it is to become from blonde to brunette or brown-haired! But it will not be very easy to return back: only with the help of discoloration or wait for the hair to grow back... But that`s why I`m a girl, so that sometimes I can do unpredictable things!</p><h5>And now you can see what else is on the page or refresh it and try again</h5><button type="button" id="ok1" class="btn btn-info">OK, thanks</button></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#ok1").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
      });
    });
  });
  
  //the function of closing dye Brown To Blond hair
  $("#dyeToBlond, #dyeToBlondBrunette").click(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><h5>WTF!</h5><p>Something definitely went wrong! Although this is a predictable result, because we used hair dye, which discolors from 1 to 3 tones, and can still give an undesirable yellow-orange shade. I`d better go to the hairdresser...</p><h5>And now you can see what else is on the page or refresh it and try again</h5><button type="button" id="ok1" class="btn btn-info">OK, thanks</button></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#ok1").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
      });
    });
  });
  
  //the function of closing powder Brown/Brunette To Blond hair
  $("#powderToBlond, #powderToBlondBrunette").click(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><h5>WOW!</h5><p>Now I have a dark blonde. After 1-1.5 months, I can repeat the procedure to maintain the quality of the hair, and I will be completely blonde.</p><h5>And now you can see what else is on the page or refresh it and try again</h5><button type="button" id="ok1" class="btn btn-info">OK, thanks</button></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#ok1").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
      });
    });
  });
  
  //the function of closing dyeBrown hair
  $("#dyeBrownOneButton").click(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><h5>WOW!</h5><p>How easy it is to become from brown-hared to brunette! But it will not be very easy to return back: only with the help of discoloration or wait for the hair to grow back... But that`s why I`m a girl, so that sometimes I can do unpredictable things!</p><h5>And now you can see what else is on the page or refresh it and try again</h5><button type="button" id="ok1" class="btn btn-info">OK, thanks</button></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#ok1").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
      });
    });
  });
  
  //explanation of hair dye for brunette
  
  $("#dyeBrunetteOneButton").mouseenter(function () {
    $("#dyeBrunetteBrownButton").balloon({
      html: true,
      position: "top left",
      contents:
        '<div class="container"><p>If we want to dye our hair in a brown color, hair dye will perfectly cope with this, because hair dye can discolor up to 3 tones</p></div>',
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
        opacity: "0.7",
      },
    });
  });
  
  //the function of closing dyeBrunette hair
  $("#dyeBrunetteOneButton").click(function () {
    $("#video").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container" id="WTF"><h5>WOW!</h5><p>Now I have beautiful brown hair. I went to conquer this world!</p><h5>And now you can see what else is on the page or refresh it and try again</h5><button type="button" id="ok1" class="btn btn-info">OK, thanks</button></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#ok1").on("click", function () {
        $("#video").hideBalloon();
        shown = !shown;
      });
    });
  });
  
  //the function of closing product
  $(document).ready(function () {
    $("#video2").showBalloon({
      html: true,
      position: "right",
      contents:
        '<div class="container"><p>The composition of hair care products is very important, so you need to make sure that they do not contain such components as, for example, Ammonium Lauryl sulfate, Ammonium Laurethl sulfate, Sodium Lauryl sulfate, Sodium Laureth sulfate, formaldehydes and others. So here you can see the compositions and choose the right one for yourself.</p><p><button type="button" id="ok1" class="btn btn-info">OK, thanks</button></p></div>',
      showDuration: 1000,
      hideDuration: 0,
      tipSize: 20,
      css: {
        border: "solid 2px #755248",
        padding: "2px",
        fontSize: "100%",
        lineHeight: "1,5",
        backgroundColor: "#F79B77",
        color: "#4B4345",
        font: "Roboto",
        textAlign: "center",
      },
    });
    $(function () {
      var shown = true;
      $("#ok1").on("click", function () {
        $("#video2").hideBalloon();
        shown = !shown;
      });
    });
  });
  