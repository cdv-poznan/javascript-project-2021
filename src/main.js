import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

async function fetchTimeseriesData(dataOd, status) {
  const url = `https://api.covid19api.com/live/country/Poland/status/${status}/date/${dataOd}`;
  const response = await fetch(url);
  const json = await response.json();

  return {
    labels: json.map(element => new Date(element.Date).toLocaleDateString()),
    datasets: [
      {
        label: `Liczba chorych na covid od ${dataOd} do dziś`,
        data: json.map(element => element[status]),
        borderColor: 'rgba(255, 193, 7, 0.8)',
      },
    ],
  };
}

async function fetchSummary() {
  const url = `https://api.covid19api.com/summary`;
  const response = await fetch(url);
  const json = await response.json();

  console.log(json);
  document.getElementById('NewConfirmed').innerHTML = json.Global.NewConfirmed;
  document.getElementById('TotalConfirmed').innerHTML =
    json.Global.TotalConfirmed;
  document.getElementById('NewDeaths').innerHTML = json.Global.NewDeaths;
  document.getElementById('TotalDeaths').innerHTML = json.Global.TotalDeaths;
  document.getElementById('NewRecovered').innerHTML = json.Global.NewRecovered;
  document.getElementById('TotalRecovered').innerHTML =
    json.Global.TotalRecovered;
  document.getElementById('Date').innerHTML = new Date(
    json.Date,
  ).toLocaleDateString();
  return json;
}

const updateSummary = document.getElementById('updateSummary');

updateSummary.addEventListener('click', async () => {
  fetchSummary();
});

async function updateCovidData() {
  const dataOd = document.getElementById('data-od').value;
  const status = document.getElementById('status').value;

  return await fetchTimeseriesData(dataOd, status);
}

async function setUpCovidChart() {
  const canvas = document.getElementById('covid-canvas');

  const options = {
    type: 'line',
    data: await updateCovidData(),
  };

  const chart = new Chart(canvas, options);

  const dataOd = document.getElementById('data-od');
  const confirmed = document.getElementById('statusConfirmed');
  const recovered = document.getElementById('statusRecovered');
  const deaths = document.getElementById('statusDeath');

  dataOd.addEventListener('change', async () => {
    chart.config.data = await updateCovidData();
    chart.update();
  });

  confirmed.addEventListener('click', async () => {
    document.getElementById('status').value = 'Confirmed';
    document.getElementById('dropdownMenuButton').innerHTML =
      'Przypadki potwierdzone';
    chart.config.data = await updateCovidData();
    chart.update();
  });

  recovered.addEventListener('click', async () => {
    document.getElementById('status').value = 'Recovered';
    document.getElementById('dropdownMenuButton').innerHTML =
      'Przypadki ozdrowienia';
    chart.config.data = await updateCovidData();
    chart.update();
  });

  deaths.addEventListener('click', async () => {
    document.getElementById('status').value = 'Deaths';
    document.getElementById('dropdownMenuButton').innerHTML =
      'Przypadki śmiertelne';
    chart.config.data = await updateCovidData();
    chart.update();
  });
}

setUpCovidChart();
fetchSummary();
