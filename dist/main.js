const audio = new Audio(
    'https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=%5bSom%5dBa+Dum+Tss!&filename=22/227744-d408e4ab-84bb-4336-b93f-37daf252ef4d.mp3',
  );
  audio.volume = 0.5;
  let haha;
  const showJoke = document.querySelector('.showJoke');
  const showPunchline = document.querySelector('.showPunchline');
  const joke = document.querySelector('.joke');
  const puncH1 = document.querySelector('.puncH1');
  function punchlineFunction() {
    setTimeout(function () {
      joke.innerHTML = '';
    }, 5000);
  }
  function jokeFunction() {
    setTimeout(() => {
      audio.play();
      joke.innerText = haha.punchline;
      punchlineFunction();
    }, 5000);
  }
  showJoke.addEventListener('click', function () {
    axios
      .get('https://official-joke-api.appspot.com/jokes/random')
      .then(response => {
        haha = response.data;
        joke.innerText = haha.setup;
        jokeFunction();
      });
  });
  
  // ---------------------------------------------------------------------------------------------------------------
  
  function getItem() {
    if (localStorage.getItem('data') !== null) {
      getData = JSON.parse(localStorage.getItem('data'));
      console.log('zaladowalo z LS');
      for (let i = 0; i < getData.length; i++) {
        console.log(getData[i]);
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const th = document.createElement('th');
        const button = document.createElement('button');
        button.type = 'button';
        button.classList = 'btn-close';
        button.addEventListener('click', function () {
          // let test = document.querySelector('#tableRow'  + i)
          // test.innerHTML = '';
          // console.log(test)
          getData.splice(i, 1);
          console.log(getData);
          localStorage.setItem('data', JSON.stringify(getData));
          location.reload();
        });
        button.id = 'buttonsId' + i;
        td.textContent = getData[i];
        th.textContent = i + 1;
        tr.id = 'tableRow' + i;
        tr.appendChild(th);
        tr.appendChild(td);
        tr.appendChild(button);
        document.querySelector('#tableBody').appendChild(tr);
      }
    }
  }
  window.addEventListener('load', getItem);
  let inputValue = ' ';
  const buttonValue = document.querySelector('.buttonItem');
  const buttonClean = document.querySelector('.cleanButton');
  
  buttonValue.addEventListener('click', function () {
    inputValue = document.querySelector('.addItem').value;
    document.querySelector('.addItem').value = '';
  
    if (inputValue === '') {
      $('#myModal').modal('show');
      // alert('Musisz coś wpisać, nie da sie niczego nie mieć do roboty ;)')
    } else {
      console.log('Przeszło pierwszego ifa');
      if (localStorage.getItem('data') === null) {
        localStorage.setItem('data', '[]');
      }
      oldData = JSON.parse(localStorage.getItem('data'));
      oldData.push(inputValue);
      localStorage.setItem('data', JSON.stringify(oldData));
      console.log(oldData);
      document.querySelector('#tableBody').textContent = '';
      getItem();
    }
  });
  
  function cleanAllContentFromLSAndList() {
    localStorage.removeItem('data');
    document.querySelector('#tableBody').textContent = '';
  }
  buttonClean.addEventListener('click', cleanAllContentFromLSAndList);
  
  let google = '';
  
  document.getElementById('search').onclick = function () {
    google = document.querySelector('.googleBox').value;
    window.open('http://google.com/search?q=' + google);
  };
  //# sourceMappingURL=main.js.map