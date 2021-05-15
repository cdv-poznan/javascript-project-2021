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
