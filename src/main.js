//get random background and change it after 5 minuter
const background = document.querySelector('.main-screen');
const backgroundsArray = [
  "url('./assets/ajai-arif-a_nu2fRoqwI-unsplash.jpg')",
  "url('./assets/antonio-grosz-Wc-1sAv4cn4-unsplash.jpg')",
  "url('./assets/dave-hoefler-jdgfzZF8PMs-unsplash.jpg')",
  "url('./assets/dave-hoefler-4pvfpUkmR6I-unsplash.jpg')",
  "url('./assets/dave-hoefler-JZKl9ZjSjWA-unsplash.jpg')",
  "url('./assets/dave-hoefler-lsIBgbLQSsQ-unsplash.jpg')",
  "url('./assets/dave-hoefler-oZxutmdh5dE-unsplash.jpg')",
  "url('./assets/jonatan-pie-OPOg0fz5uIs-unsplash.jpg')",
  "url('./assets/marco-mons--_3HeEkP-fE-unsplash.jpg')",
  "url('./assets/ricardo-gomez-angel-ZCPwkmfsHNY-unsplash.jpg')",
];
const getRandomNumber = () => {
  return Math.floor(Math.random() * (9 - 0 + 1)) + 0;
};
const getRandomBackground = () => {
  setInterval(() => {
    const randomNumber = getRandomNumber();
    background.style.backgroundImage = backgroundsArray[randomNumber];
  }, 300000);
};
//random quote api
const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author');
const getQuoteBtn = document.querySelector('.get-quote-btn');
const getQuote = () => {
  fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
      const index = Math.round(Math.random() * 1643);
      quoteText.innerHTML = data[index].text;
      quoteAuthor.innerHTML = data[index].author;
    })
    .catch(err => {
      console.log(err);
    });
};
getQuoteBtn.addEventListener('click', getQuote);
//get date function
const clockNumbers = document.querySelector('.clock-numbers');
const clockDate = document.querySelector('.clock-date');
let greeting;
const greetingText = document.querySelector('.greeting');
const greetingIcon = document.querySelector('.greeting-icon');
//set time for digital clock
const getDate = () => {
  setInterval(() => {
    //getting time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    currentMinute = (currentMinute < 10 ? '0' : '') + currentMinute;
    const currentTimeText = currentHour + ':' + currentMinute;
    clockNumbers.innerHTML = currentTimeText;
    //getting date
    let currentDay = currentTime.getDate();
    let currentMonth = currentTime.getMonth();
    const currentYear = currentTime.getFullYear();
    currentDay = (currentDay < 10 ? '0' : '') + currentDay;
    currentMonth = (currentMonth < 10 ? '0' : '') + currentMonth;
    const currentDateText = currentDay + '.' + currentMonth + '.' + currentYear;
    clockDate.innerHTML = currentDateText;
    //check if you should say morning/afternoon/evening
    if (currentHour === 24) {
      greeting = 'good morning,';
      greetingText.innerHTML = greeting;
      greetingIcon.classList.add('fa-coffee');
    } else if (currentHour >= 1 && currentHour < 13) {
      greeting = 'good morning,';
      greetingText.innerHTML = greeting;
      greetingIcon.classList.add('fa-coffee');
    } else if (currentHour >= 13 && currentHour < 17) {
      greeting = 'good afternoon,';
      greetingText.innerHTML = greeting;
      greetingIcon.classList.add('fa-sun');
    } else {
      greeting = 'good evening,';
      greetingText.innerHTML = greeting;
      greetingIcon.classList.add('fa-moon');
    }
  }, 1000);
};
//get date for analog clock
const degree = 6;
const hrLine = document.querySelector('#hr');
const minLine = document.querySelector('#mn');
const scLine = document.querySelector('#sc');
const getDateForAnalog = () => {
  setInterval(() => {
    const analogDate = new Date();
    const hour = analogDate.getHours() * 30;
    const min = analogDate.getMinutes() * degree;
    const sec = analogDate.getSeconds() * degree;
    hrLine.style.transform = `rotateZ(${hour + min / 12}deg)`;
    minLine.style.transform = `rotateZ(${min}deg)`;
    scLine.style.transform = `rotateZ(${sec}deg)`;
  });
};
//using switch to display digital/analog clock
const digitalClock = document.querySelector('.digital-clock');
const analogClock = document.querySelector('.analog-clock');
const switchBtn = document.querySelector('.switch');
const displayClock = () => {
  digitalClock.classList.toggle('invisible');
  analogClock.classList.toggle('invisible');
};
switchBtn.addEventListener('change', displayClock);
//weather api
const secondaryScreen = document.querySelector('.secondary-screen');
const todayTempText = document.querySelector('.today-temp');
const tomorrowTempText = document.querySelector('.tomorrow-temp');
const overmorrowTempText = document.querySelector('.overmorrow-temp');
const todayDescText = document.querySelector('.today-desc');
const tomorrowDescText = document.querySelector('.tomorrow-desc');
const overmorrowDescText = document.querySelector('.overmorrow-desc');
const todayIcon = document.querySelector('.today-icon');
const tomorrowIcon = document.querySelector('.tomorrow-icon');
const overmorrowIcon = document.querySelector('.overmorrow-icon');
//setting correct icon for weather
const weatherIconArray = [
  "url('./assets/cloud.png')",
  "url('./assets/rain.png')",
  "url('./assets/snowflake.png')",
  "url('./assets/sun.png')",
];
const setWeatherIcon = (fieldName, desc) => {
  if (desc.includes('clouds')) {
    fieldName.style.backgroundImage = weatherIconArray[0];
  } else if (desc.includes('rain')) {
    fieldName.style.backgroundImage = weatherIconArray[1];
  } else if (desc.includes('snow')) {
    fieldName.style.backgroundImage = weatherIconArray[2];
  } else {
    fieldName.style.backgroundImage = weatherIconArray[3];
  }
};
//assign weather data to text boxes
const assignWeatherData = weatherData => {
  const todayData = weatherData[0];
  const tomorrowData = weatherData[1];
  const overmorrowData = weatherData[2];
  const todayDesc = todayData.weather[0].description;
  const tomorrowDesc = tomorrowData.weather[0].description;
  const overmorrowDesc = overmorrowData.weather[0].description;
  todayTempText.innerHTML = Math.round(Number(todayData.main.temp)) + '°C';
  todayDescText.innerHTML = todayDesc;
  tomorrowTempText.innerHTML =
    Math.round(Number(tomorrowData.main.temp)) + '°C';
  tomorrowDescText.innerHTML = tomorrowDesc;
  overmorrowTempText.innerHTML =
    Math.round(Number(overmorrowData.main.temp)) + '°C';
  overmorrowDescText.innerHTML = overmorrowDesc;
  setWeatherIcon(todayIcon, todayDesc);
  setWeatherIcon(tomorrowIcon, tomorrowDesc);
  setWeatherIcon(overmorrowIcon, overmorrowDesc);
};
//get weather based on device location
const getWeather = (lat, lon) => {
  let weatherData;
  const APIkey = '477f8b9f91e57252f7371ae3951b14d4';
  const weatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
  fetch(weatherApi)
    .then(res => res.json())
    .then(data => {
      weatherData = data.list;
      assignWeatherData(weatherData);
    })
    .catch(err => {
      console.log(err);
    });
};
//get device location
function showPosition(position) {
  const lat = Math.round(position.coords.latitude);
  const lon = Math.round(position.coords.longitude);
  getWeather(lat, lon);
}
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
};
//get weather based on device location
const getWeatherByCity = userLocation => {
  let weatherDataLocation;
  const APIkey = '477f8b9f91e57252f7371ae3951b14d4';
  const weatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${userLocation}&units=metric&appid=${APIkey}`;
  fetch(weatherApi)
    .then(res => res.json())
    .then(data => {
      weatherDataLocation = data.list;
      assignWeatherData(weatherDataLocation);
    })
    .catch(err => {
      console.log(err);
    });
};
//get weather based on given by user location
const form = document.querySelector('.search-form');
const errMsg = document.querySelector('.err-msg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const searchLocation = form['search-input'].value.toLowerCase();
  if (searchLocation === '') {
    errMsg.innerHTML = 'Please add name';
    form.reset;
  } else {
    errMsg.innerHTML = '';
    getWeatherByCity(searchLocation);
  }
});
//start all functions after load
const startPage = () => {
  getRandomBackground();
  getQuote();
  getDate();
  getDateForAnalog();
  getLocation();
};
document.addEventListener('load', startPage());
