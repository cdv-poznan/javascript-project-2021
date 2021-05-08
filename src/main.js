const url = "https://holidays.abstractapi.com/v1/?api_key=f12d8eae0def42a096ad807365e937ca";
const monthField = document.querySelector('#holidayMonth');
const dayField = document.querySelector('#holidayDay');
const submit = document.querySelector('#holidaySubmit');
const clear = document.querySelector('#holidayClear');
const dateField = document.getElementById("holidayDate");
const nameField = document.getElementById("holidayName");

const submittedMonth = document.getElementById("dayOffMonth");
const submittedDay = document.getElementById("dayOffDay");
const submittedYear = document.getElementById("dayOffYear");
const timer = document.getElementById("countdownTimer");
const submitDay = document.querySelector('#dayOffSubmit');
const clearDay = document.querySelector('#dayOffClear');

const submitPick = document.querySelector('#jokeSubmit');
const responseArea = document.querySelector('#joke_selected');
const clearJoke = document.querySelector('#jokeClear');


// The functions for Holiday Checker.

const displayResults = (event) => {
    event.preventDefault();
  
    secureFields();
  }; 
  
const secureFields = () => {
    if (monthField.value === '' || dayField.value === '') {
      dateField.textContent = 'Please, fill all the fields.';
    }
    else {
        getResults();
    }
  };  

const getResults = () => {
    const monthQuery = monthField.value.toString();
    const dayQuery = dayField.value.toString();
    const endpoint = url + '&country=PL' + '&year=2021' + '&month=' + monthQuery + '&day=' + dayQuery;

    fetch(endpoint).then(response => response.json())
    .then(response => {
        const getDate = response[0].date;
        const getName = response[0].name;
        dateField.textContent = getDate;
        nameField.textContent = getName;
    }).catch((error) => {
      console.error('Error:', error);
            })
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

const checkFields = () => {
  if (submittedDay.value === '' || submittedYear.value === '') {
    timer.textContent = 'Please, fill all the fields.';
  }
  else {
      getFinalDate();
  }
};

function getFinalDate(){
  const parsedMonth = submittedMonth.value.toString();  
  const parsedDay = submittedDay.value.toString();
  const parsedYear = submittedYear.value.toString();
  const parsedTime = parsedMonth + ' ' + parsedDay + ', ' + parsedYear;

  let countDownDate = new Date(parsedTime).getTime();
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  timer.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    timer.innerHTML = "A thing of the past.";
  }
  }, 1000);
  }

  const clearDayField = () => {
    submittedMonth.value = '';
    submittedDay.value = '';
    submittedYear.value = '';
    timer.hidden = true;
  }

submitDay.addEventListener('click', checkFields);
clearDay.addEventListener('click', clearDayField);


// The functions for Joke Picker.

const getJoke = () => {

  const address = 'https://icanhazdadjoke.com/';
  const options = {
    headers: {
      Accept: "application/json"
    }
  };
  fetch(address, options).then(response => response.json())
  .then(response => {
      const generateJoke = response.joke;
      document.getElementById("joke_selected").textContent = generateJoke;
      console.log(response);
  }).catch((error) => {
    console.error('Error:', error);
          })
  }

 const displayJokes = (event) => {
 event.preventDefault();

  getJoke();
}

const clearJokeField = () => {
  responseArea.textContent = '';
}

jokeSubmit.addEventListener('click', displayJokes);
clearJoke.addEventListener('click', clearJokeField);

