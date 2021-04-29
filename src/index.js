import { reset } from './styles/reset.scss';
import { style } from './styles/style.scss';
import logo from './assets/img/logo.png';
import sun from './assets/img/sun.png';

//social icon taken form flaticon.com
import facebook from './assets/img/facebook.png';
import gmail from './assets/img/gmail.png';
import github from './assets/img/github.png';
import flickr from './assets/img/flickr.png';

var $ = require('jquery');

const logoIcon = new Image();
logoIcon.src = logo;
$('#logo').append(logoIcon);
$('#logo').addClass('logo');

const facebookIcon = new Image();
facebookIcon.src = facebook;
$('#facebook-icon').append(facebookIcon);
$('#facebook-icon').addClass('social-icons');

const gmailIcon = new Image();
gmailIcon.src = gmail;
$('#gmail-icon').append(gmailIcon);
$('#gmail-icon').addClass('social-icons');

const githubIcon = new Image();
githubIcon.src = github;
$('#github-icon').append(githubIcon);
$('#github-icon').addClass('social-icons');

const flickrIcon = new Image();
flickrIcon.src = flickr;
$('#flickr-icon').append(flickrIcon);
$('#flickr-icon').addClass('social-icons');

// background gradients
var steps = new Array();
steps = [
  0.003,
  0.006,
  0.009,
  0.015,
  0.024,
  0.039,
  0.063,
  0.102,
  0.165,
  0.267,
  0.432,
  0.568,
  0.733,
  0.835,
  0.898,
  0.937,
  0.961,
  0.976,
  0.985,
  0.991,
  0.994,
  0.997,
];

var gradients = new Array();
gradients = [
  'linear-gradient(to bottom, #020111 85%, #191621 100%)',
  'linear-gradient(to bottom, #020111 60%, #20202c 100%)',
  'linear-gradient(to bottom, #020111 10%, #3a3a52 100%)',
  'linear-gradient(to bottom, #20202c 0%, #515175 100%)',
  'linear-gradient(to bottom, #40405c 0%, #6f71aa 80%, #8a76ab 100%)',
  'linear-gradient(to bottom, #4a4969 0%, #7072ab 50%, #cd82a0 100%)',
  'linear-gradient(to bottom, #757abf 0%, #8583be 60%, #eab0d1 100%)',
  'linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)',
  'linear-gradient(to bottom, #94c5f8 1%, #a6e6ff 70%, #b1b5ea 100%)',
  'linear-gradient(to bottom, #b7eaff 0%, #94dfff 100%)',
  'linear-gradient(to bottom, #9be2fe 0%, #67d1fb 100%)',
  'linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%)',
  'linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%)',
  'linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%)',
  'linear-gradient(to bottom, #2473ab 0%, #1e528e 70%, #5b7983 100%)',
  'linear-gradient(to bottom, #1e528e 0%, #265889 50%, #9da671 100%)',
  'linear-gradient(to bottom, #1e528e 0%, #728a7c 50%, #e9ce5d 100%)',
  'linear-gradient(to bottom, #154277 0%, #576e71 30%, #e1c45e 70%, #b26339 100%)',
  'linear-gradient(to bottom, #163C52 0%, #4F4F47 30%, #C5752D 60%, #B7490F 80%, #2F1107 100%)',
  'linear-gradient(to bottom, #071B26 0%, #071B26 30%, #8A3B12 80%, #240E03 100%)',
  'linear-gradient(to bottom, #010A10 30%, #59230B 80%, #2F1107 100%)',
  'linear-gradient(to bottom, #090401 50%, #4B1D06 100%)',
];

// sliders
var slideTime = 1000;

$(document).ready(function () {
  $('#solarDataDown').attr('disabled', true);
  $('#azimuthsUp').attr('disabled', true);
  $('#otherUp').attr('disabled', true);
});
function solarDataUp() {
  $('#solarData').slideUp(slideTime);
  $('#solarDataUp').attr('disabled', true);
  $('#solarDataDown').attr('disabled', false);
}
function solarDataDown() {
  $('#solarData').slideDown(slideTime);
  $('#solarDataUp').attr('disabled', false);
  $('#solarDataDown').attr('disabled', true);
}
function azimuthsUp() {
  $('#azimuths').slideUp(slideTime);
  $('#azimuthsUp').attr('disabled', true);
  $('#azimuthsDown').attr('disabled', false);
}
function azimuthsDown() {
  $('#azimuths').slideDown(slideTime);
  $('#azimuthsUp').attr('disabled', false);
  $('#azimuthsDown').attr('disabled', true);
}
function otherUp() {
  $('#otherData').slideUp(slideTime);
  $('#otherUp').attr('disabled', true);
  $('#otherDown').attr('disabled', false);
}
function otherDown() {
  $('#otherData').slideDown(slideTime);
  $('#otherUp').attr('disabled', false);
  $('#otherDown').attr('disabled', true);
}
$('#solarDataUp').click(function () {
  solarDataUp();
  azimuthsDown();
});
$('#azimuthsUp').click(function () {
  azimuthsUp();
  otherDown();
});
$('#otherUp').click(function () {
  otherUp();
  azimuthsDown();
});
$('#solarDataDown').click(function () {
  solarDataDown();
  azimuthsUp();
  otherUp();
});
$('#azimuthsDown').click(function () {
  azimuthsDown();
  solarDataUp();
  otherUp();
});
$('#otherDown').click(function () {
  otherDown();
  solarDataUp();
  azimuthsUp();
});

// other

function displayHour(id, hour) {
  if (hour >= 24) {
    hour = hour - 24;
    $(id).text('0' + hour);
  } else if (hour >= 10 && hour < 24) {
    $(id).text(hour);
  } else if (hour > 0 && hour < 10) {
    $(id).text('0' + hour);
  } else if (hour === 0) {
    $(id).text('00');
  } else if (hour < 0) {
    hour = hour + 24;
    $(id).text(hour);
  } else {
    $(id).text(hour);
  }
}

function displayMinuteSecond(id, MinuteSecond) {
  if (MinuteSecond < 10 && MinuteSecond > 0) {
    $(id).text('0' + MinuteSecond);
  } else if (MinuteSecond === 0) {
    $(id).text('00');
  } else {
    $(id).text(MinuteSecond);
  }
}

// GET POSITION
function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  function calculatePosition(direction, id1, id2, plusSgn, minusSgn) {
    if (direction >= 0) {
      $(id1).html(direction.toFixed(6));
      var directionDegree = Math.floor(direction);
      var directionMinutes = Math.floor((direction - directionDegree) * 60);
      var directionSeconds = (
        ((direction - directionDegree) * 60 - directionMinutes) *
        60
      ).toFixed(2);
      $(id2).html(
        plusSgn +
          directionDegree +
          `° ` +
          directionMinutes +
          `' ` +
          directionSeconds +
          `''`,
      );
    } else {
      direction = Math.abs(direction);
      $(id1).html(-direction.toFixed(6));
      // eslint-disable-next-line no-redeclare
      var directionDegree = Math.floor(direction);
      // eslint-disable-next-line no-redeclare
      var directionMinutes = Math.floor((direction - directionDegree) * 60);
      // eslint-disable-next-line no-redeclare
      var directionSeconds = (
        ((direction - directionDegree) * 60 - directionMinutes) *
        60
      ).toFixed(2);
      $(id2).html(
        minusSgn +
          directionDegree +
          `° ` +
          directionMinutes +
          `' ` +
          directionSeconds +
          `''`,
      );
    }
  }

  calculatePosition(
    latitude,
    '#latitudeDecimal',
    '#latitudeRadial',
    'N ',
    'S ',
  );
  calculatePosition(
    longitude,
    '#longitudeDecimal',
    '#longitudeRadial',
    'E ',
    'W ',
  );

  // SOLAR DATA REQUEST
  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.sunrise-sunset.org/json?lat=' +
      latitude +
      '&lng=' +
      longitude +
      '&formatted=0',
    true,
  );
  xhr.onload = function (e) {
    var response = xhr.responseText;
    var answer = JSON.parse(response);
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log(answer.results);
      } else {
        // console.error(xhr.statusText);
      }
    }

    // DISPLAY DAILY SOLAR DATA
    var actualDate = new Date();
    var actualYear = actualDate.getFullYear();
    var actualMonth = actualDate.getMonth();
    var actualDay = actualDate.getDate();

    // time zone correction
    var actualTimeZone = actualDate.getTimezoneOffset();
    var timeZoneHours = Math.floor(actualTimeZone / 60);
    var timeZoneMinutes = actualTimeZone - timeZoneHours * 60;

    function timeZoneCorrection(hour, minute) {
      if (minute < 0) {
        hour = hour - 1;
        minute = minute + 60;
      } else if (minute > 60) {
        hour = hour + 1;
        minute = minute - 60;
      }
    }

    // sunriseDate
    var sunriseHour =
      parseInt(answer.results.sunrise.slice(11, 13), 10) - timeZoneHours;
    if (sunriseHour >= 24) {
      sunriseHour = sunriseHour - 24;
    } else if (sunriseHour < 0) {
      sunriseHour = sunriseHour + 24;
    }

    var sunriseMinute =
      parseInt(answer.results.sunrise.slice(14, 16), 10) - timeZoneMinutes;
    var sunriseSecond = parseInt(answer.results.sunrise.slice(17, 19), 10);

    timeZoneCorrection(sunriseHour, sunriseMinute);

    var sunriseDate = new Date(
      actualYear,
      actualMonth,
      actualDay,
      sunriseHour,
      sunriseMinute,
      sunriseSecond,
    );

    displayHour('#sunriseHour', sunriseHour);
    displayMinuteSecond('#sunriseMinute', sunriseMinute);
    displayMinuteSecond('#sunriseSecond', sunriseSecond);

    // noonDate
    var noonHour =
      parseInt(answer.results.solar_noon.slice(11, 13), 10) - timeZoneHours;
    if (noonHour >= 24) {
      noonHour = noonHour - 24;
    } else if (noonHour < 0) {
      noonHour = noonHour + 24;
    }
    var noonMinute =
      parseInt(answer.results.solar_noon.slice(14, 16), 10) - timeZoneMinutes;
    var noonSecond = parseInt(answer.results.solar_noon.slice(17, 19), 10);

    timeZoneCorrection(noonHour, noonMinute);

    var noonDate = new Date(
      actualYear,
      actualMonth,
      actualDay,
      noonHour,
      noonMinute,
      noonSecond,
    );

    displayHour('#noonHour', noonHour);
    displayMinuteSecond('#noonMinute', noonMinute);
    displayMinuteSecond('#noonSecond', noonSecond);

    // sunsetDate
    var sunsetHour =
      parseInt(answer.results.sunset.slice(11, 13), 10) - timeZoneHours;
    if (sunsetHour >= 24) {
      sunsetHour = sunsetHour - 24;
    } else if (sunsetHour < 0) {
      sunsetHour = sunsetHour + 24;
    }
    var sunsetMinute =
      parseInt(answer.results.sunset.slice(14, 16), 10) - timeZoneMinutes;
    var sunsetSecond = parseInt(answer.results.sunset.slice(17, 19), 10);

    timeZoneCorrection(sunsetHour, sunsetMinute);

    var sunsetDate = new Date(
      actualYear,
      actualMonth,
      actualDay,
      sunsetHour,
      sunsetMinute,
      sunsetSecond,
    );

    displayHour('#sunsetHour', sunsetHour);
    displayMinuteSecond('#sunsetMinute', sunsetMinute);
    displayMinuteSecond('#sunsetSecond', sunsetSecond);

    // dayLength
    var dayLength = parseInt(answer.results.day_length, 10);

    var dayLengthHours = Math.floor(dayLength / 3600);
    var dayLengthMinutes = Math.floor(dayLength / 60 - dayLengthHours * 60);
    var dayLengthSeconds = Math.floor(
      dayLength - (dayLengthHours * 3600 + dayLengthMinutes * 60),
    );

    displayHour('#dayLengthHours', dayLengthHours);
    displayMinuteSecond('#dayLengthMinutes', dayLengthMinutes);
    displayMinuteSecond('#dayLengthSeconds', dayLengthSeconds);

    // COMPUTE  AZIMUTHS

    function computeAzimuth(azimuthDate, id) {
      // CURRENT SUN DECLINATION:
      var yearBegin = new Date(actualYear, 0, 1, 0, 0, 0, 0);
      var N = (azimuthDate - yearBegin) / (24 * 60 * 60 * 1000);
      var deltaAux1 =
        0.98565 * (N + 10) +
        1.914 * Math.sin((0.98565 * (N - 2) * Math.PI) / 180);
      var delta =
        -Math.asin(0.39779 * Math.cos(deltaAux1 * (Math.PI / 180))) *
        (180 / Math.PI);
      // console.log('sun declination (delta): ' + '\n' + delta + '°');

      // LOCAL LATITUDE:
      var phi = latitude;
      // console.log('local latitude (phi): ' + '\n' + phi + '°');

      // HOUR ANGLE:
      if (azimuthDate !== noonDate) {
        var h = ((360 / 24) * (azimuthDate - noonDate)) / (60 * 60 * 1000);
      } else {
        // eslint-disable-next-line no-redeclare
        var h = 0;
      }
      // console.log('hour angle (h): ' + '\n' + h + '°');

      // SOLAR ZENITH ANGLE:
      var thetaSun1Aux = Math.sin(phi * (Math.PI / 180));
      var thetaSun2Aux = Math.sin(delta * (Math.PI / 180));
      var thetaSun3Aux = Math.cos(phi * (Math.PI / 180));
      var thetaSun4Aux = Math.cos(delta * (Math.PI / 180));
      var thetaSun5Aux = Math.cos(h * (Math.PI / 180));
      var thetaSun6Aux =
        thetaSun1Aux * thetaSun2Aux +
        thetaSun3Aux * thetaSun4Aux * thetaSun5Aux;
      var thetaSun = Math.acos(thetaSun6Aux) * (180 / Math.PI);
      // console.log('solar zenith angle (theta): ' + '\n' + thetaSun + '°');

      // SOLAR AZIMUTH ANGLE:
      var phiSun1Aux = thetaSun2Aux;
      var phiSun2Aux = thetaSun3Aux;
      var phiSun3Aux = thetaSun5Aux;
      var phiSun4Aux = thetaSun4Aux;
      var phiSun5Aux = thetaSun1Aux;
      var phiSun6Aux = Math.sin(thetaSun * (Math.PI / 180));

      var phiSun8Aux =
        (phiSun1Aux * phiSun2Aux - phiSun3Aux * phiSun4Aux * phiSun5Aux) /
        phiSun6Aux;
      var phiSun = Math.acos(phiSun8Aux) * (180 / Math.PI);
      // console.log('actual azimuth (1st formula): ' + '\n' + phiSun + '°');

      if (azimuthDate >= noonDate) {
        var charAzimuth = (360 - phiSun).toFixed(1);
      } else if (azimuthDate < noonDate) {
        // eslint-disable-next-line no-redeclare
        var charAzimuth = phiSun.toFixed(1);
      }
      $(id).text(`${charAzimuth}°`);
    }

    computeAzimuth(sunriseDate, '#sunriseAzimuth');
    computeAzimuth(noonDate, '#noonAzimuth');
    computeAzimuth(sunsetDate, '#sunsetAzimuth');

    // COMPUTE SHADOW LENGTH

    function shadowLength() {
      // CURRENT SUN DECLINATION:
      // eslint-disable-next-line no-shadow
      var actualDate = new Date();
      var yearBegin = new Date(actualYear, 0, 1, 0, 0, 0, 0);
      var N = (actualDate - yearBegin) / (24 * 60 * 60 * 1000);
      var deltaAux1 =
        0.98565 * (N + 10) +
        1.914 * Math.sin((0.98565 * (N - 2) * Math.PI) / 180);
      var delta =
        -Math.asin(0.39779 * Math.cos(deltaAux1 * (Math.PI / 180))) *
        (180 / Math.PI);

      // HOUR ANGLE:
      if (actualDate !== noonDate) {
        var h = ((360 / 24) * (actualDate - noonDate)) / (60 * 60 * 1000);
      } else {
        // eslint-disable-next-line no-redeclare
        var h = 0;
      }

      var sunAltAux1 = Math.cos(latitude * (Math.PI / 180));
      var sunAltAux2 = Math.cos(delta * (Math.PI / 180));
      var sunAltAux3 = Math.cos(h * (Math.PI / 180));
      var sunAltAux4 = Math.sin(latitude * (Math.PI / 180));
      var sunAltAux5 = Math.sin(delta * (Math.PI / 180));
      var sunAltAux6 =
        sunAltAux1 * sunAltAux2 * sunAltAux3 + sunAltAux4 * sunAltAux5;
      var sunAlt = Math.asin(sunAltAux6) * (180 / Math.PI);
      // eslint-disable-next-line no-shadow
      var shadowLength = 1 / Math.tan(sunAlt * (Math.PI / 180));

      $('#sunAlt').text(`${sunAlt.toFixed(1)}°`);
      $('#shadowLenght').text(`${shadowLength.toFixed(2)} m`);
    }

    // ALL INTERVAL THINGS

    setInterval(function () {
      // eslint-disable-next-line no-shadow
      var actualDate = new Date();

      // display elapsing and remaining time
      function calculateTime(id1, id2, id3, charDate) {
        var dt = Math.abs(actualDate - charDate);
        var hours = Math.floor(dt / 3600000);
        var minutes = Math.floor(dt / 60000 - hours * 60);
        var seconds = Math.floor(dt / 1000 - (hours * 3600 + minutes * 60));
        displayHour(id1, hours);
        displayMinuteSecond(id2, minutes);
        displayMinuteSecond(id3, seconds);
      }

      if (actualDate > sunriseDate && actualDate < sunsetDate) {
        calculateTime(
          '#hoursSinceSunrise',
          '#minutesSinceSunrise',
          '#secondsSinceSunrise',
          sunriseDate,
        );
        calculateTime(
          '#hoursToSunset',
          '#minutesToSunset',
          '#secondsToSunset',
          sunsetDate,
        );

        // set background gradient
        var actualBackground = (actualDate - sunriseDate) / (dayLength * 1000);
        for (let i = 0; i < steps.length; i++) {
          if (actualBackground > steps[i]) {
            $('body').css({ background: gradients[i] });
          }
        }
      } else if (actualDate > sunriseDate && actualDate > sunsetDate) {
        calculateTime(
          '#hoursSinceSunrise',
          '#minutesSinceSunrise',
          '#secondsSinceSunrise',
          sunriseDate,
        );
      } else if (actualDate < sunriseDate && actualDate < sunsetDate) {
        calculateTime(
          '#hoursToSunset',
          '#minutesToSunset',
          '#secondsToSunset',
          sunsetDate,
        );
      }

      computeAzimuth(actualDate, '#actualAzimuth');
      shadowLength();
    }, 1000);

    // DRAWING THE SUN DATA
    var time = 0;

    function walkingSun() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        // eslint-disable-next-line no-shadow
        const canvas = document.getElementById('canvas-sm');
        // eslint-disable-next-line no-use-before-define
        drawCompass(canvas);
        time = time + 1000;
        if (time === 10000) {
          time = 0;
        }
      } else {
        // eslint-disable-next-line no-shadow
        const canvas = document.getElementById('canvas-lg');
        // eslint-disable-next-line no-use-before-define
        drawCompass(canvas);
        time = time + 1000;
        if (time === 10000) {
          time = 0;
        }
      }
    }
    setInterval(walkingSun, 1000);

    function drawCompass(canvas) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // angles of daily characteristic sun rays
      var sunriseAngle = parseFloat($('#sunriseAzimuth').text()) + 90;
      var noonAngle = parseFloat($('#noonAzimuth').text()) + 90;
      var sunsetAngle = parseFloat($('#sunsetAzimuth').text()) + 90;
      var actualAngle = parseFloat($('#actualAzimuth').text()) + 90;

      // vector of translation for the canvas coordinates to local coordinates (setting canvas center as 0,0)
      var x = canvas.width / 2;
      var y = canvas.height / 2;

      // limit radius for the sun path
      var sunR = 0.75 * x;

      // set elongation out of canvas for sun rays
      var ratio = 10;

      // draw sun path
      (function drawSunPath() {
        var startPoint = (sunriseAngle / 360) * (2 * Math.PI);
        var endPoint = (sunsetAngle / 360) * (2 * Math.PI);
        ctx.beginPath();
        if (latitude >= 0) {
          ctx.arc(x, y, sunR, startPoint, endPoint);
        } else if (latitude < 0) {
          ctx.arc(x, y, sunR, endPoint, startPoint);
        }
        ctx.setLineDash([8, 10]);
        ctx.strokeStyle = 'orange';
        ctx.stroke();
      })();

      // drawing daily characteristic sun rays
      function charRays(charAngle, color) {
        var charAngleX =
          ratio * (sunR * Math.cos((charAngle / 360) * 2 * Math.PI)) + x;
        var charAngleY =
          ratio * (sunR * Math.sin((charAngle / 360) * 2 * Math.PI)) + y;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(charAngleX, charAngleY);
        ctx.setLineDash([1, 0]);
        ctx.strokeStyle = color;
        ctx.stroke();
      }
      charRays(sunriseAngle, 'green');
      charRays(noonAngle, 'black');
      charRays(sunsetAngle, 'red');
      charRays(actualAngle, 'orange');

      // drawing sun icon
      var sunX = sunR * Math.cos((actualAngle / 360) * 2 * Math.PI) + x;
      var sunY = sunR * Math.sin((actualAngle / 360) * 2 * Math.PI) + y;
      var sunImg = new Image();
      sunImg.src = sun;
      sunImg.onload = function () {
        ctx.drawImage(sunImg, sunX - this.width / 2, sunY - this.height / 2);
      };
    }
  };

  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}

$(document).ready(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});

// actual time
$(document).ready(
  setInterval(function () {
    var actualDate = new Date();
    var actualHour = actualDate.getHours();
    var actualMinute = actualDate.getMinutes();
    var actualSecond = actualDate.getSeconds();
    displayHour('#actualHour', actualHour);
    displayMinuteSecond('#actualMinute', actualMinute);
    displayMinuteSecond('#actualSecond', actualSecond);
  }, 1000),
);
