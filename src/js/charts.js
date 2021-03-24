import { Chart } from 'chart.js';

const charts = () => {
  // gold
  const goldBuyInput = document.querySelector('#goldBuyInput');
  const goldSellInput = document.querySelector('#goldSellInput');
  const goldBuyButton = document.querySelector('#goldBuyButton');
  const goldSellButton = document.querySelector('#goldSellButton');
  let latestGoldCourse;
  // GOLD
  const showingGoldStats = () => {
    // fetch data gold
    const xAxisGold = [];
    const yAxisGold = [];
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.nbp.pl/api/cenyzlota/last/30/?format=json`,
    )
      .then(res => res.json())
      .then(data => {
        data.forEach(element => {
          xAxisGold.push(element.data);
          yAxisGold.push(element.cena);
          latestGoldCourse = element.cena;
        });
      });
    // chart
    const goldChart = document.getElementById('goldChart').getContext('2d');
    const goldRateChart = new Chart(goldChart, {
      type: 'line',
      data: {
        labels: xAxisGold,
        datasets: [
          {
            label: 'Gold Rate',
            data: yAxisGold,
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
    const xAxisGold = [];
    const yAxisGold = [];
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.nbp.pl/api/exchangerates/rates/a/usd/last/10/?format=json`,
    )
      .then(res => res.json())
      .then(data => {
        data.rates.forEach(element => {
          xAxisGold.push(element.effectiveDate);
          yAxisGold.push(element.mid);
          latestGoldCourse = element.mid;
        });
      });
    // chart
    const goldChart = document.getElementById('usdChart').getContext('2d');
    const goldRateChart = new Chart(goldChart, {
      type: 'line',
      data: {
        labels: xAxisGold,
        datasets: [
          {
            label: 'USD/PLN',
            data: yAxisGold,
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
    const xAxisGold = [];
    const yAxisGold = [];
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json`,
    )
      .then(res => res.json())
      .then(data => {
        data.rates.forEach(element => {
          xAxisGold.push(element.effectiveDate);
          yAxisGold.push(element.mid);
          latestGoldCourse = element.mid;
        });
      });
    // chart
    const goldChart = document.getElementById('gbpChart').getContext('2d');
    const goldRateChart = new Chart(goldChart, {
      type: 'line',
      data: {
        labels: xAxisGold,
        datasets: [
          {
            label: 'GBP/PLN',
            data: yAxisGold,
            backgroundColor: 'transparent',
            borderColor: 'rgb(215,183,64)',
          },
        ],
      },
    });
  };
  showingGoldStats();
  showingUSDStats();
  showingGBPStats();
};
export default charts;
