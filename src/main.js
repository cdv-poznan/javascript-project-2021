const allCatsView = document.querySelector('.allCats');
const addNewCatView = document.querySelector('.addNewCat');
const toggleView = () => {
  allCatsView.style.display =
    getComputedStyle(allCatsView).display === 'none' ? 'block' : 'none';
  addNewCatView.style.display =
    getComputedStyle(addNewCatView).display === 'none' ? 'block' : 'none';
};

const clearForm = () => {
  document.getElementById('inputNewName').value = '';
  document.getElementById('inputNewAge').value = '';
  document.getElementById('inputNewColour').value = '';
  document.getElementById('inputNewDescription').value = '';
  findAnotherCat();
};

document.querySelector('#goToHome').addEventListener('click', () => {
  clearForm();
  toggleView();
});
document
  .querySelector('#addNewCatBtn')
  .addEventListener('click', () => toggleView());

let actualURL = '';

function fetchData() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      if (!response.ok) {
        throw Error('error');
      }
      return response.json();
    })
    .then(data => {
      actualURL = data[0].url;
      const html = `<image src=${data[0].url} class="">`;
      document.querySelector('#catImage').innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });
}

function findAnotherCat() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      if (!response.ok) {
        throw Error('error');
      }
      return response.json();
    })
    .then(data => {
      actualURL = data[0].url;
      const html = `<image src=${data[0].url} class="">`;
      document.querySelector('#catImage').innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });
}

fetchData();

let cats = [];

function init() {
  fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      cats = data.cats;
      const html = cats
        .map(cat => {
          return `
      <div class="col-md-4">
        <div class="card mb-3">
            <img src="${cat.url}">
            <div class="card-body" id="picture">
                <p class="card-text" id="cats">Name: ${cat.name}</p>
                <p class="card-text" id="cats">Colour: ${cat.colour}</p>
                <p class="card-text" id="cats">Age: ${cat.age}</p>
                <p class="card-text" id="cats">Description: ${cat.description}</p>
            </div>
        </div>
      </div>
      `;
        })
        .join('');
      document
        .querySelector('.allCats .row')
        .insertAdjacentHTML('afterbegin', html);
    })
    .catch(error => {
      console.log(error);
    });
}

init();

document.querySelector('#saveBtn').addEventListener('click', () => {
  if (!checkIfEmpty()) {
    const newCat = {
      name: document.getElementById('inputNewName').value,
      age: document.getElementById('inputNewAge').value,
      colour: document.getElementById('inputNewColour').value,
      description: document.getElementById('inputNewDescription').value,
      url: actualURL,
    };

    cats.push(newCat);

    const html = `
      <div class="col-md-4">
        <div class="card mb-3">
            <img src="${newCat.url}">
            <div class="card-body" id="picture">
                <p class="card-text" id="cats">Name: ${newCat.name}</p>
                <p class="card-text" id="cats">Colour: ${newCat.colour}</p>
                <p class="card-text" id="cats">Age: ${newCat.age}</p>
                <p class="card-text" id="cats">Description: ${newCat.description}<p>
            </div>
        </div>
      `;

    document
      .querySelector('.allCats .row')
      .insertAdjacentHTML('afterbegin', html);

    clearForm();
    toggleView();
  }
});

function checkIfEmpty() {
  if (document.getElementById('inputNewName').value.trim() == '') {
    document.getElementById('inputNewName').style.borderColor = 'red';
    return true;
  }
  return false;
}
