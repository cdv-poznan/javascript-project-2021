const reset = function () {
  console.log('reset');
};

reset();

let cards = document.querySelectorAll('.cards div');
cards = [...cards];
var timeStart = new Date().getTime();
var cardsActive = [];
var pairs = cards.length / 2;
var score = 0;
let start = '';
let click = '';

const goToStart = function () {
  document.querySelector('.start').style.display = 'none';
  document.querySelector('.cards').style.display = 'flex';
  start();
};

const goToStartAgain = function () {
  document.querySelector('.playAgain').style.display = 'none';
  document.querySelector('.cards').style.display = 'flex';
  start();
};

const startGame = function () {
  document.querySelector('.cards').style.display = 'none';
  document.querySelector('.playAgain').style.display = 'none';
  document
    .getElementsByClassName('button')[0]
    .addEventListener('click', goToStart);
};

const playAgain = function () {
  document
    .getElementsByClassName('button')[1]
    .addEventListener('click', goToStartAgain);
};

playAgain();

click = function () {
  // cardsActive = [];
  const cardActive = this;
  cardActive.classList.remove('hidden');

  if (cardsActive.length === 0) {
    cardsActive[0] = cardActive;
  } else {
    cards.forEach(card => {
      card.removeEventListener('click', click);
      //   card.removeEventListener('touchstart', click);
      cardsActive[1] = cardActive;
      setTimeout(function () {
        if (cardsActive[0].innerHTML === cardsActive[1].innerHTML) {
          console.log('wygrana');
          // eslint-disable-next-line no-shadow
          cardsActive.forEach(card => card.classList.add('done'));
          score++;
          if (score === pairs) {
            console.log('Wygrana');
            const timeEnd = new Date().getTime();
            // eslint-disable-next-line no-shadow
            const score = (timeEnd - timeStart) / 1000;
            document
              .getElementsByClassName('cards')[0]
              .classList.add('hiddenClass');
            setTimeout(function () {
              // alert('Your score ' + score);
              //   document.getElementsByClassName('cards')[0].innerHTML = '';
              document.querySelector('.cards').style.display = 'none';
              document.querySelector('.playAgain').style.display = 'flex';
              document.querySelectorAll('.cards div').classList.remove('done');
              reset();
            }, 600);
          }
        } else {
          console.log('przegrana');
          // eslint-disable-next-line no-shadow
          cardsActive.forEach(card => card.classList.add('hidden'));
        }
        cardsActive.length = 0;
        // eslint-disable-next-line no-shadow
        cards.forEach(function (card) {
          card.addEventListener('click', click);
          //   card.addEventListener('touchstart', click);
        });
      }, 500);
    });
  }
};

start = function () {
  const cardsImage = [
    '<img src="./assets/1-2-wink-emoji-png.png" alt="wink">',
    '<img src="./assets/1-2-wink-emoji-png.png" alt="wink">',
    '<img src="./assets/3-2-love-hearts-eyes-emoji-png.png" alt="love-hearts-eyes">',
    '<img src="./assets/3-2-love-hearts-eyes-emoji-png.png" alt="love-hearts-eyes">',
    '<img src="./assets/4-2-smiling-face-with-sunglasses-cool-emoji-png.png" alt="face-with-sunglasses">',
    '<img src="./assets/4-2-smiling-face-with-sunglasses-cool-emoji-png.png" alt="face-with-sunglasses">',
    '<img src="./assets/5-2-face-with-tears-of-joy-emoji-png.png" alt="face-with-tears-of-joy">',
    '<img src="./assets/5-2-face-with-tears-of-joy-emoji-png.png" alt="face-with-tears-of-joy">',
    '<img src="./assets/36778-4-angry-emoji-clipart.png" alt="angry-bird">',
    '<img src="./assets/36778-4-angry-emoji-clipart.png" alt="angry-bird">',
    '<img src="./assets/64941-emoticon-whatsapp-smiley-dog-emoji-free-hq-image_800x800.png" alt="smiley-dog">',
    '<img src="./assets/64941-emoticon-whatsapp-smiley-dog-emoji-free-hq-image_800x800.png" alt="smiley-dog">',
    '<img src="./assets/64947-emoticon-gmail-illustration-smiley-emoji-free-transparent-image-hd.png" alt="rainbow">',
    '<img src="./assets/64947-emoticon-gmail-illustration-smiley-emoji-free-transparent-image-hd.png" alt="rainbow">',
    '<img src="./assets/64956-emoticon-thumb-double-button-smiley-emoji-signal.png" alt="thumb">',
    '<img src="./assets/64956-emoticon-thumb-double-button-smiley-emoji-signal.png" alt="thumb">',
    '<img src="./assets/65080-emoticon-smiley-free-hq-image.png" alt="smiley">',
    '<img src="./assets/65080-emoticon-smiley-free-hq-image.png" alt="smiley">',
    '<img src="./assets/65088-emoticon-piracy-smiley-pirate-emoji-png-image-high-quality.png" alt="pirate">',
    '<img src="./assets/65088-emoticon-piracy-smiley-pirate-emoji-png-image-high-quality.png" alt="pirate">',
    '<img src="./assets/66339-giant-emoji-panda-red-discord-free-hq-image.png" alt="panda">',
    '<img src="./assets/66339-giant-emoji-panda-red-discord-free-hq-image.png" alt="panda">',
    '<img src="./assets/71993-monkey-of-sticker-smiley-poo-pile-whatsapp.png" alt="monkey">',
    '<img src="./assets/71993-monkey-of-sticker-smiley-poo-pile-whatsapp.png" alt="monkey">',
  ];

  cards = '';
  cards = document.querySelectorAll('.cards div');
  cards = [...cards];

  cards.forEach(function (card) {
    const position = Math.floor(Math.random() * cardsImage.length);
    card.innerHTML = cardsImage[position];
    cardsImage.splice(position, 1);
  });
  setTimeout(function () {
    cards.forEach(function (card) {
      card.classList.add('hidden');
      card.addEventListener('click', click);
      //   card.addEventListener('touchstart', click);
    });
  }, 2000);
};

startGame();
// start();
