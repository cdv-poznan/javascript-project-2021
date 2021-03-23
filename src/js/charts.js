import { Chart } from 'chart.js';

const charts = () => {



  
  const goldArrayDate = [];
  // getting current date
  var date = new Date();
  const mm = () => {
    if (date.getMonth() + 1 < 10) {
      return '0' + Number(date.getMonth() + 1);
    }
  };
  const mmOld = () => {
    if (date.getMonth() < 10) {
      return '0' + date.getMonth();
    }
  };
  const dd = () => {
    if (Number(date.getDate()) < 10) {
      return '0' + date.getDate();
    } else {
      return date.getDate();
    }
  };
  const currentDate = date.getFullYear() + '-' + mm() + '-' + dd();
  const oldDate = date.getFullYear() + '-' + mmOld() + '-' + dd();
  // fetch data
  async function fetchGoldPrices(dateFrom, dateTo) {
    const url = `https://api.nbp.pl/api/cenyzlota/${dateFrom}/${dateTo}?format=json`;
    const response = await fetch(url);
    const json = await response.json();
    return {
      // eslint-disable-next-line array-callback-return
      labels: json.map(element => {
        goldArrayDate.push(element);
        element.data;
      }),
    };
  }
  const goldChart = document.getElementById('goldChart').getContext('2d');
  const goldRateChart = new Chart(goldChart, {
    type: 'line',
    data: {
      labels: [goldArrayDate.map(day => day.data)],
      datasets: [
        {
          label: 'Gold Rate',
          data: [goldArrayDate.map(day => day.cena)],
          backgroundColor: 'rgb(215,183,64)',
        },
      ],
    },
  });
  // silver rate
};
export default charts;
