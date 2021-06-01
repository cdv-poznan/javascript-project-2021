const localData = JSON.parse(localStorage.getItem('saved')) || [];
const appEl = document.getElementById('app');
const searchEl = document.getElementById('search');

const app = async query => {
  appEl.innerHTML = 'Loading…';
  const data = await getData(query);
  appEl.innerHTML = '';

  if (!Array.isArray(data)) {
    appEl.innerHTML = `Nothing found for '${query}' :(`;
    return;
  }

  [...localData, ...data].forEach(data => {
    const item = createItem(data);
    appEl.appendChild(item);
    appEl.appendChild(document.createElement('hr'));
  });
};

const getData2 = async query => {
  const url = query
    ? 'https://apodapi.herokuapp.com/search/?number=5&search_query=' + query
    : 'https://apodapi.herokuapp.com/api/?count=5';

  try {
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};

const getData = async query => {
  try {
    const request = query
      ? await fetch(
          'https://apodapi.herokuapp.com/search/?number=5&search_query=' + query
        )
      : await fetch('https://apodapi.herokuapp.com/api/?count=5');
    const data = await request.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};

const createItem = data => {
  const itemEl = document.createElement('article');

  const imgEl = document.createElement('img');
  const titleEl = document.createElement('h1');
  const descriptionEl = createDescription(data.description);

  titleEl.innerText = data.title;
  imgEl.src = data.url;

  lightbox(imgEl);

  itemEl.appendChild(imgEl);
  itemEl.appendChild(titleEl);
  itemEl.appendChild(descriptionEl);

  return itemEl;
};

const lightbox = imgEl => {
  imgEl.addEventListener('click', () => {
    const lightboxEl = document.createElement('img');

    lightboxEl.src = imgEl.src;
    lightboxEl.className = 'lightbox';

    document.body.appendChild(lightboxEl);

    lightboxEl.addEventListener('click', () => {
      document.body.removeChild(lightboxEl);
    });
  });
};

const createDescription = text => {
  const descriptionEl = document.createElement('p');
  const smallText = text.slice(0, 300) + '… Read More';
  descriptionEl.innerHTML = smallText;

  let isSmall = true;

  descriptionEl.addEventListener('click', () => {
    descriptionEl.innerText = isSmall ? text : smallText;
    isSmall = !isSmall;
  });

  return descriptionEl;
};

searchEl.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.query;
  app(query.value);
});

app();

const a = () => {
  let click = true;

  if (click) {
  } else {
  }

  click = !click;
};

const t = [1, 2, 3, 4, 5];
const obj1 = { a: 5 };

const obj2 = { ...obj1, b: 6 };

console.log(obj2);

const e = JSON.parse(localStorage.getItem('apods')) || [];
