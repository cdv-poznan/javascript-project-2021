import { Chart } from 'chart.js';

const charts = () => {
  // gold
  const goldBuyInput = document.querySelector('#goldBuyInput');
  const goldSellInput = document.querySelector('#goldSellInput');
  const goldBuyButton = document.querySelector('#goldBuyButton');
  const goldSellButton = document.querySelector('#goldSellButton');
  // usd
  const usdBuyInput = document.querySelector('#usdBuyInput');
  const usdSellInput = document.querySelector('#usdSellInput');
  const usdBuyButton = document.querySelector('#usdBuyButton');
  const usdSellButton = document.querySelector('#usdSellButton');
  // gbp
  const gbpBuyInput = document.querySelector('#gbpBuyInput');
  const gbpSellInput = document.querySelector('#gbpSellInput');
  const gbpBuyButton = document.querySelector('#gbpBuyButton');
  const gbpSellButton = document.querySelector('#gbpSellButton');
  // quantity
  const goldQuantity = document.querySelector('#goldQuantity');
  const usdQuantity = document.querySelector('#usdQuantity');
  const gbpQuantity = document.querySelector('#gbpQuantity');

  const walletStock = document.querySelector('.userData__amount');
  const walletProfile = document.querySelector('.userData__walletData');

  let latestGoldCourse;
  let latestUsdCourse;
  let latestGbpCourse;
  // GOLD
  const showingGoldStats = () => {
    // fetch data gold
    const xAxis = [];
    const yAxis = [];
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.nbp.pl/api/cenyzlota/last/30/?format=json`,
    )
      .then(res => res.json())
      .then(data => {
        data.forEach(element => {
          xAxis.push(element.data);
          yAxis.push(element.cena);
          latestGoldCourse = element.cena;
        });
      });
    // chart
    const goldChart = document.getElementById('goldChart').getContext('2d');
    const goldRateChart = new Chart(goldChart, {
      type: 'line',
      data: {
        labels: xAxis,
        datasets: [
          {
            label: 'Gold Rate',
            data: yAxis,
            backgroundColor: 'transparent',
            borderColor: 'rgb(215,183,64)',
          },
        ],
      },
    });
  };
  // USD
  const showingUSDStats = () => {
    // fetch data usd
    const xAxis = [];
    const yAxis = [];
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.nbp.pl/api/exchangerates/rates/a/usd/last/10/?format=json`,
    )
      .then(res => res.json())
      .then(data => {
        data.rates.forEach(element => {
          xAxis.push(element.effectiveDate);
          yAxis.push(element.mid);
          latestUsdCourse = element.mid;
        });
      });
    // chart
    const usdChart = document.getElementById('usdChart').getContext('2d');
    const usdRateChart = new Chart(usdChart, {
      type: 'line',
      data: {
        labels: xAxis,
        datasets: [
          {
            label: 'USD/PLN',
            data: yAxis,
            backgroundColor: 'transparent',
            borderColor: 'rgb(215,183,64)',
          },
        ],
      },
    });
  };
  // GBP
  const showingGBPStats = () => {
    // fetch data gbp
    const xAxis = [];
    const yAxis = [];
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json`,
    )
      .then(res => res.json())
      .then(data => {
        data.rates.forEach(element => {
          xAxis.push(element.effectiveDate);
          yAxis.push(element.mid);
          latestGbpCourse = element.mid;
        });
      });
    // chart
    const gbpChart = document.getElementById('gbpChart').getContext('2d');
    const gbpRateChart = new Chart(gbpChart, {
      type: 'line',
      data: {
        labels: xAxis,
        datasets: [
          {
            label: 'GBP/PLN',
            data: yAxis,
            backgroundColor: 'transparent',
            borderColor: 'rgb(215,183,64)',
          },
        ],
      },
    });
  };
  // button actions - buying and selling
  // BUYING
  const buyingAction = e => {
    let input;
    let quantity;
    let rate;
    // choosing correct diagram
    if (e.srcElement.id === 'goldBuyButton') {
      input = Number(goldBuyInput.value);
      quantity = goldQuantity.innerHTML;
      rate = Number(latestGoldCourse);
    } else if (e.srcElement.id === 'usdBuyButton') {
      input = Number(usdBuyInput.value);
      quantity = usdQuantity.innerHTML;
      rate = Number(latestUsdCourse);
      console.log(input, quantity, rate);
    } else {
      input = Number(gbpBuyInput.value);
      quantity = gbpQuantity.innerHTML;
      rate = Number(latestGbpCourse);
    }
    if (input >= 5) {
      if (Number(sessionStorage.getItem('wallet')) >= input) {
        quantity = Number(input) / Number(rate) + Number(quantity);
        sessionStorage.setItem(
          'wallet',
          Math.floor(Number(sessionStorage.getItem('wallet')) - input),
        );
        walletStock.innerHTML = sessionStorage.getItem('wallet');
        walletProfile.innerHTML = sessionStorage.getItem('wallet');
        if (e.srcElement.id === 'goldBuyButton') {
          goldBuyInput.value = '';
          goldQuantity.innerHTML = quantity;
        } else if (e.srcElement.id === 'usdBuyButton') {
          usdBuyInput.value = '';
          usdQuantity.innerHTML = quantity;
        } else {
          gbpBuyInput.value = '';
          gbpQuantity.innerHTML = quantity;
        }
      } else {
        alert('Sorry, you have not enough funds in your wallet');
      }
    } else {
      alert('Sorry, the minimum value is $5');
    }
  };

  // SELLING
  const sellingAction = e => {
    let input;
    let quantity;
    let rate;
    // choosing correct diagram
    if (e.srcElement.id === 'goldSellButton') {
      input = Number(goldSellInput.value);
      quantity = goldQuantity.innerHTML;
      rate = Number(latestGoldCourse);
    } else if (e.srcElement.id === 'usdSellButton') {
      input = Number(usdSellInput.value);
      quantity = usdQuantity.innerHTML;
      rate = Number(latestUsdCourse);
      console.log(input, quantity, rate);
    } else {
      input = Number(gbpSellInput.value);
      quantity = gbpQuantity.innerHTML;
      rate = Number(latestGbpCourse);
    }
    if (input > 0) {
      if (quantity >= input) {
        quantity = Number(quantity) - input;
        sessionStorage.setItem(
          'wallet',
          Math.floor(Number(sessionStorage.getItem('wallet')) + rate * input),
        );
        walletStock.innerHTML = sessionStorage.getItem('wallet');
        walletProfile.innerHTML = sessionStorage.getItem('wallet');
        if (e.srcElement.id === 'goldSellButton') {
          goldSellInput.value = '';
          goldQuantity.innerHTML = quantity;
        } else if (e.srcElement.id === 'usdSellButton') {
          usdSellInput.value = '';
          usdQuantity.innerHTML = quantity;
        } else {
          gbpSellInput.value = '';
          gbpQuantity.innerHTML = quantity;
        }
      } else {
        alert('Sorry, operation was rejected');
      }
    } else {
      alert('Please, enter a valid value');
    }
  };

  goldBuyButton.addEventListener('click', buyingAction);
  usdBuyButton.addEventListener('click', buyingAction);
  gbpBuyButton.addEventListener('click', buyingAction);
  goldSellButton.addEventListener('click', sellingAction);
  usdSellButton.addEventListener('click', sellingAction);
  gbpSellButton.addEventListener('click', sellingAction);
  showingGoldStats();
  showingUSDStats();
  showingGBPStats();
};
export default charts;
