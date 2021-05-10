const url =
  'https://holidays.abstractapi.com/v1/?api_key=f12d8eae0def42a096ad807365e937ca';
const monthField = document.querySelector('#holiday-month');
const dayField = document.querySelector('#holiday-day');
const submit = document.querySelector('#holiday-submit');
const clear = document.querySelector('#holiday-clear');
const dateField = document.getElementById('holiday-date');
const nameField = document.getElementById('holiday-name');

const submittedMonth = document.getElementById('day-off-month');
const submittedDay = document.getElementById('day-off-day');
const submittedYear = document.getElementById('day-off-year');
const timer = document.getElementById('countdown-timer');
const submitDay = document.querySelector('#day-off-submit');
const clearDay = document.querySelector('#day-off-clear');

const submitPick = document.querySelector('#joke-submit');
const responseArea = document.querySelector('#joke-selected');
const clearJoke = document.querySelector('#joke-clear');

// The functions for Holiday Checker.

const getResults = () => {
  const monthQuery = monthField.value.toString();
  const dayQuery = dayField.value.toString();
  const endpoint =
    url +
    '&country=PL' +
    '&year=2021' +
    '&month=' +
    monthQuery +
    '&day=' +
    dayQuery;

  fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      const getDate = response[0].date;
      const getName = response[0].name;
      dateField.textContent = getDate;
      nameField.textContent = getName;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const secureFields = () => {
  if (monthField.value === '' || dayField.value === '') {
    dateField.textContent = 'Please, fill all the fields.';
  } else {
    getResults();
  }
};

const displayResults = event => {
  event.preventDefault();

  secureFields();
};

const clearResult = () => {
  monthField.textContent = '';
  dayField.textContent = '';
  dateField.textContent = '';
  nameField.textContent = '';
};

holidaySubmit.addEventListener('click', displayResults);
holidayClear.addEventListener('click', clearResult);

// The functions for Day off Countdowner.

function getFinalDate() {
  const parsedMonth = submittedMonth.value.toString();
  const parsedDay = submittedDay.value.toString();
  const parsedYear = submittedYear.value.toString();
  const parsedTime = parsedMonth + ' ' + parsedDay + ', ' + parsedYear;

  const countDownDate = new Date(parsedTime).getTime();
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
      clearInterval(x);
      timer.innerHTML = 'A thing of the past.';
    }
  }, 1000);
}

const checkFields = () => {
  if (submittedDay.value === '' || submittedYear.value === '') {
    timer.textContent = 'Please, fill all the fields.';
  } else {
    getFinalDate();
  }
};

const clearDayField = () => {
  submittedMonth.value = '';
  submittedDay.value = '';
  submittedYear.value = '';
  timer.hidden = true;
};

submitDay.addEventListener('click', checkFields);
clearDay.addEventListener('click', clearDayField);

// The functions for Joke Picker.

const getJoke = () => {
  const address = 'https://icanhazdadjoke.com/';
  const options = {
    headers: {
      Accept: 'application/json',
    },
  };
  fetch(address, options)
    .then(response => response.json())
    .then(response => {
      const generateJoke = response.joke;
      document.getElementById('joke_selected').textContent = generateJoke;
      console.log(response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const displayJokes = event => {
  event.preventDefault();

  getJoke();
};

const clearJokeField = () => {
  responseArea.textContent = '';
};

jokeSubmit.addEventListener('click', displayJokes);
clearJoke.addEventListener('click', clearJokeField);
