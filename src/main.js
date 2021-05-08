/* eslint-disable no-inner-declarations */
/* eslint-disable eqeqeq */
const btnMarriage = document.querySelector('#btnMarriage');
const btnDivorce = document.querySelector('#btnDivorce');
const marriage = document.querySelector('#marriage');
const divorce = document.querySelector('#divorce');
const header = document.querySelector('#header');
btnMarriage.addEventListener('click', function () {
  marriage.classList.remove('d-none');
  header.classList.add('d-none');
  header.classList.remove('d-flex');
});

btnDivorce.addEventListener('click', function () {
  divorce.classList.remove('d-none');
  header.classList.add('d-none');
  header.classList.remove('d-flex');
});
//RANDOM FOX PART
const btnRandomFox = document.getElementById('btnRandomFox');
const randomFox = document.getElementById('randomFox');
btnRandomFox.addEventListener('click', function () {
  // eslint-disable-next-line camelcase
  const urlFox = `https://randomfox.ca/floof/`;
  async function getRandomFox() {
    const response = await fetch(urlFox);
    const fox = await response.json();
    document.getElementById(
      'randomFox',
    ).style.backgroundImage = `url(${fox.image})`;
  }
  getRandomFox();
});
// MARRIAGE PART
const submit01 = document.querySelector('#submit01');
const submit02 = document.querySelector('#submit02');
submit01.addEventListener('click', function () {
  if (
    document.querySelector('#goldFineness01').selectedIndex != 0 &&
    document.querySelector('#ringDiameter01').value != '' &&
    document.querySelector('#ringDiameter02').value != '' &&
    document.querySelector('#ringThickness01').value != '' &&
    document.querySelector('#ringThickness02').value != '' &&
    document.querySelector('#ringWidth01').value != '' &&
    document.querySelector('#ringWidth02').value != '' &&
    document.querySelector('#ringDiameter01').value >
      2 * document.querySelector('#ringThickness01').value &&
    document.querySelector('#ringDiameter02').value >
      2 * document.querySelector('#ringThickness02').value
  ) {
    const url = `https://api.nbp.pl/api/cenyzlota//?format=json`;
    async function getPricesMarriage() {
      const ringDiameter01 = document.querySelector('#ringDiameter01').value;
      const ringDiameter02 = document.querySelector('#ringDiameter02').value;
      const ringThickness01 = document.querySelector('#ringThickness01').value;
      const ringThickness02 = document.querySelector('#ringThickness02').value;
      const ringWidth01 = document.querySelector('#ringWidth01').value;
      const ringWidth02 = document.querySelector('#ringWidth02').value;
      const goldFineness04 = document.querySelector('#goldFineness01');
      const goldFineness04Value =
        goldFineness04.options[goldFineness04.selectedIndex].value;
      const response = await fetch(url);
      const goldRate = await response.json();
      const goldPrice = (document.getElementById(
        'goldPriceMarriage',
      ).innerHTML = goldRate[0].cena);
      document.getElementById('marriageResult').classList.add('bg-ring');
      document.querySelector('#alert01').classList.add('d-none');
      document.querySelector('#ringDiameter01').style.backgroundColor = '#fff';
      document.querySelector('#ringThickness01').style.backgroundColor = '#fff';
      document.querySelector('#ringDiameter02').style.backgroundColor = '#fff';
      document.querySelector('#ringThickness02').style.backgroundColor = '#fff';
      document.getElementById(
        'marriageResult',
      ).innerHTML = `<div>Złoto w Waszych obrączkach jest warte: </br> ${Math.round(
        goldFineness04Value *
          ((Math.PI * Math.pow(0.5 * ringDiameter01, 2) * ringWidth01 -
            Math.PI *
              Math.pow(0.5 * (ringDiameter01 - ringThickness01), 2) *
              ringWidth01) *
            0.001 *
            19.3 *
            goldPrice) +
          goldFineness04Value *
            ((Math.PI * Math.pow(0.5 * ringDiameter02, 2) * ringWidth02 -
              Math.PI *
                Math.pow(0.5 * (ringDiameter02 - ringThickness02), 2) *
                ringWidth02) *
              0.001 *
              19.3 *
              goldPrice),
      )} PLN </div>`;
    }
    getPricesMarriage();
  } else if (
    document.querySelector('#ringDiameter01').value <=
      2 * document.querySelector('#ringThickness01').value &&
    document.querySelector('#ringDiameter02').value <=
      2 * document.querySelector('#ringThickness02').value &&
    document.querySelector('#goldFineness01').selectedIndex != 0 &&
    document.querySelector('#ringDiameter01').value != '' &&
    document.querySelector('#ringDiameter02').value != '' &&
    document.querySelector('#ringThickness01').value != ''
  ) {
    document.querySelector('#alert01').classList.remove('d-none');
    document.querySelector('#ringDiameter01').style.backgroundColor = '#d7cca8';
    document.querySelector('#ringThickness01').style.backgroundColor =
      '#d7cca8';
    document.querySelector('#ringDiameter02').style.backgroundColor = '#d7cca8';
    document.querySelector('#ringThickness02').style.backgroundColor =
      '#d7cca8';
  } else if (
    document.querySelector('#ringDiameter01').value <=
      2 * document.querySelector('#ringThickness01').value &&
    document.querySelector('#ringDiameter01').value != '' &&
    document.querySelector('#ringDiameter02').value != ''
  ) {
    document.querySelector('#alert01').classList.remove('d-none');
    document.querySelector('#ringDiameter01').style.backgroundColor = '#d7cca8';
    document.querySelector('#ringThickness01').style.backgroundColor =
      '#d7cca8';
    document.querySelector('#ringDiameter02').style.backgroundColor = '#fff';
    document.querySelector('#ringThickness02').style.backgroundColor = '#fff';
  } else if (
    document.querySelector('#ringDiameter02').value <=
      2 * document.querySelector('#ringThickness02').value &&
    document.querySelector('#ringDiameter02').value != '' &&
    document.querySelector('#ringDiameter02').value != ''
  ) {
    document.querySelector('#alert01').classList.remove('d-none');
    document.querySelector('#ringDiameter02').style.backgroundColor = '#d7cca8';
    document.querySelector('#ringThickness02').style.backgroundColor =
      '#d7cca8';
    document.querySelector('#ringDiameter01').style.backgroundColor = '#fff';
    document.querySelector('#ringThickness01').style.backgroundColor = '#fff';
  } else {
    document.querySelector('#alert01').classList.remove('d-none');
  }
});
submit02.addEventListener('click', function () {
  marriage.classList.add('d-none');
  header.classList.remove('d-none');
  header.classList.add('d-flex');
});
// DIVORCE PART
const oneRing = document.querySelector('#oneRing');
const twoRings = document.querySelector('#twoRings');
const secondRing = document.querySelector('.secondRing');
const submit03 = document.querySelector('#submit03');
const submit04 = document.querySelector('#submit04');
const divorceResultText = document.querySelector('#divorceResultText');
oneRing.addEventListener('click', function () {
  if (oneRing.checked == true) {
    secondRing.classList.add('d-none');
  }
});
twoRings.addEventListener('click', function () {
  if (twoRings.checked == true) {
    secondRing.classList.remove('d-none');
  }
});
// back to the header
submit04.addEventListener('click', function () {
  divorce.classList.add('d-none');
  header.classList.remove('d-none');
  header.classList.add('d-flex');
});
//divorce ring pirce
submit03.addEventListener('click', function () {
  if (
    document.querySelector('#ringWeight01').value != '' &&
    (document
      .querySelector('#option4')
      .parentElement.classList.contains('active') ||
      document
        .querySelector('#option5')
        .parentElement.classList.contains('active') ||
      document
        .querySelector('#option6')
        .parentElement.classList.contains('active')) &&
    oneRing.checked == true
  ) {
    const url = `https://api.nbp.pl/api/cenyzlota//?format=json`;
    async function getPricesDivorceOne() {
      const ringWeight01 = document.querySelector('#ringWeight01').value;
      const goldFineness = document.querySelector('.active>input').value;
      const response = await fetch(url);
      const goldRate = await response.json();
      const goldPrice = (document.getElementById('goldPriceDivorce').innerHTML =
        goldRate[0].cena);
      document.getElementById('divorceResult').classList.remove('bg-two-ring');
      document.getElementById('divorceResult').classList.add('bg-one-ring');
      document.querySelector('#alert02').classList.add('d-none');
      document.getElementById('divorceResult').innerHTML = `
      Za swoją obrączkę otrzumasz: ${Math.round(
        goldFineness * ringWeight01 * goldPrice,
      )} PLN`;
    }
    getPricesDivorceOne(); //pirce for one ring
  } else if (
    document.querySelector('#ringWeight01').value != '' &&
    document.querySelector('#ringWeight02').value != '' &&
    (document
      .querySelector('#option4')
      .parentElement.classList.contains('active') ||
      document
        .querySelector('#option5')
        .parentElement.classList.contains('active') ||
      document
        .querySelector('#option6')
        .parentElement.classList.contains('active')) &&
    twoRings.checked == true
  ) {
    async function getPricesDivorceTwo() {
      const url = `https://api.nbp.pl/api/cenyzlota//?format=json`;
      const ringWeight01 = document.querySelector('#ringWeight01').value;
      const ringWeight02 = document.querySelector('#ringWeight02').value;
      const goldFineness = document.querySelector('.active>input').value;
      const response = await fetch(url);
      const goldRate = await response.json();
      const goldPrice = (document.getElementById('goldPriceDivorce').innerHTML =
        goldRate[0].cena);
      document.getElementById('divorceResult').classList.remove('bg-one-ring');
      document.getElementById('divorceResult').classList.add('bg-two-ring');
      document.querySelector('#alert02').classList.add('d-none');
      document.getElementById(
        'divorceResult',
      ).innerHTML = `<div>Za obie obrączki otrzymasz:</br> ${Math.round(
        goldFineness * ringWeight01 * goldPrice +
          goldFineness * ringWeight02 * goldPrice,
      )} PLN</div>`;
    }
    getPricesDivorceTwo(); //pirce for two rings
  } else {
    document.querySelector('#alert02').classList.remove('d-none');
  }
});
// RELOAD AND RESET
const btnReset01 = document.querySelector('#btnReset01');
const btnReset02 = document.querySelector('#btnReset02');
btnReset01.addEventListener('click', function () {
  document.getElementById('marriageResult').classList.remove('bg-ring');
  document.getElementById('marriageResult').innerHTML = '';
  document.querySelector('#alert01').classList.add('d-none');
  document.querySelector('#ringDiameter01').style.backgroundColor = '#fff';
  document.querySelector('#ringThickness01').style.backgroundColor = '#fff';
  document.querySelector('#ringDiameter02').style.backgroundColor = '#fff';
  document.querySelector('#ringThickness02').style.backgroundColor = '#fff';
});
btnReset02.addEventListener('click', function () {
  document
    .getElementById('divorceResult')
    .classList.remove('bg-two-ring', 'bg-one-ring');
  document.getElementById('divorceResult').innerHTML = '';
  document.querySelector('#alert02').classList.add('d-none');
  document.querySelector('#alert03').classList.add('d-none');
});

submit02.addEventListener('click', function () {
  location.reload();
});
submit04.addEventListener('click', function () {
  location.reload();
});
