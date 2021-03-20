import { Chart } from 'chart.js';
import { camelCase, snakeCase, kebabCase } from 'lodash';
import Push from 'push.js';

function setUpGraph() {
  const canvas = document.getElementById('chart-canvas');

  const options = {
    type: 'line',
    data: {
      labels: ['a', 'b', 'c', 'd', 'e'],
      datasets: [
        {
          label: 'dataset 1',
          data: [3, 1, 2, 4, 5],
          borderColor: 'rgba(40, 167, 69, 0.8)',
        },
        {
          label: 'dataset 2',
          data: [3, 4, 2, 2, 1],
          borderColor: 'rgba(220, 53, 69, 0.8)',
        },
        {
          label: ' dataset 3',
          borderColor: 'rgba(255, 193, 7, 0.8)',
          data: [5, 3, 4, 1, 2],
        },
      ],
    },
  };

  const chart = new Chart(canvas, options);
}

async function fetchGoldPrices(dateFrom, dateTo) {
  const url = `http://api.nbp.pl/api/cenyzlota/${dateFrom}/${dateTo}?format=json`;
  const response = await fetch(url);
  const json = await response.json();

  return {
    labels: json.map(element => element.data),
    datasets: [
      {
        label: 'Ceny 1g złota [PLN]',
        data: json.map(element => element.cena),
        borderColor: 'rgba(255, 193, 7, 0.8)',
      },
    ],
  };
}

async function updateGoldData() {
  const dateFrom = document.getElementById('date-from').value;
  const dateTo = document.getElementById('date-to').value;
  return await fetchGoldPrices(dateFrom, dateTo);
}

async function setUpGoldChart() {
  const canvas = document.getElementById('gold-canvas');

  const options = {
    type: 'line',
    data: await updateGoldData(),
  };

  const chart = new Chart(canvas, options);

  const dateFromInput = document.getElementById('date-from');
  const dateToInput = document.getElementById('date-to');

  dateFromInput.addEventListener('change', async () => {
    chart.config.data = await updateGoldData();
    chart.update();
  });

  dateToInput.addEventListener('change', async () => {
    chart.config.data = await updateGoldData();
    chart.update();
  });
}

function setUpCases() {
  const inputCase = document.getElementById('input-case');
  const selectCase = document.getElementById('select-case');
  const caseOutput = document.getElementById('case-output');

  selectCase.addEventListener('change', $event => {
    const inputText = inputCase.value;
    let output = '';
    switch ($event.target.value) {
      case 'camel': {
        output = camelCase(inputText);
        break;
      }
      case 'snake': {
        output = snakeCase(inputText);
        break;
      }
      case 'kebab': {
        output = kebabCase(inputText);
        break;
      }
    }
    caseOutput.innerText = output;
  });
}

function setUpPush() {
  document.getElementById('notify').addEventListener('click', () => {
    Push.create('Hello world!', {
      body: "How's it hangin'?",
      icon: 'assets/icon.png',
      timeout: 4000,
      onClick: function () {
        window.focus();
        this.close();
      },
    });
  });
}

setUpCases();
setUpGraph();
setUpGoldChart();
setUpPush();
