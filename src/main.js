document.addEventListener('DOMContentLoaded', () => {
  function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setViewportHeight();

  window.addEventListener('resize', () => {
    setTimeout(setViewportHeight, 100);
  });

  const keys = document.querySelectorAll('.key');
  const images = document.querySelectorAll('img');
  const keyboardBtns = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'k', 'l'];

  function playSound(key) {
    const soundAudio = document.getElementById(key.dataset.note);
    soundAudio.currentTime = 0;
    soundAudio.loop = true;
    soundAudio.play();
    key.classList.add('active');
    soundAudio.addEventListener('ended', () => {
      key.classList.remove('active');
    });
  }

  function stopSound(key) {
    const soundAudio = document.getElementById(key.dataset.note);
    soundAudio.loop = false;
    soundAudio.pause();
    soundAudio.currentTime = 0;
    key.classList.remove('active');
  }

  keys.forEach(key => {
    key.addEventListener('click', e => {
      key = e.target;
      playSound(key);
    });
  });

  document.addEventListener('dblclick', e => {
    key = e.target;
    stopSound(key);
  });

  keys.forEach(key => {
    key.addEventListener('touchstart', e => {
      if (e.repeat) {
        return;
      }
      key = e.target;
      playSound(key);
    });
  });

  keys.forEach(key => {
    key.addEventListener('touchend', e => {
      e.preventDefault();
      key = e.target;
      stopSound(key);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.repeat) {
      return;
    }
    const key = e.key;
    const keyboardBtnsIndex = keyboardBtns.indexOf(key);
    if (keyboardBtnsIndex > -1) {
      playSound(keys[keyboardBtnsIndex]);
    }
  });

  document.addEventListener('keyup', e => {
    e.preventDefault();
    const key = e.key;
    const keyboardBtnsIndex = keyboardBtns.indexOf(key);
    stopSound(keys[keyboardBtnsIndex]);
  });
});
