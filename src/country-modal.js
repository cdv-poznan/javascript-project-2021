export class CountryModal {
  countryDetails;
  el;

  constructor(data) {
    this.countryDetails = data;
    this.el = document.createElement('div');
    this.container = document.querySelector('#container');
    this.modal = document.querySelector('.modal');
    this.modalBody = document.querySelector('.modal-body');
    this.body = document.querySelector('body');
  }

  show() {
    this.render();
    this.modalBody.classList.remove('hidden');
    this.modal.classList.remove('hidden');
    this.modal.appendChild(this.el);
    this.body.style.overflow = 'hidden';
    this.initializeEvents();
  }

  hide() {
    this.modalBody.classList.add('hidden');
    this.body.style.overflow = 'scroll';
    this.modal.innerHTML = '';
  }

  render() {
    this.el.innerHTML = `
    <div class="ui compact black message">
      <h2 class="ui header">
        <img class="ui circular image" src="${this.countryDetails.flag}">
    ${this.countryDetails.name}
      </h2>
      <div class="country-details">
        <div>Capital: ${this.countryDetails.capital}</div>
        <div>Region: ${this.countryDetails.region}</div>
        <div>Subregion: ${this.countryDetails.subregion}</div>
        <div>Area: ${this.countryDetails.area}</div>
        <div>Population: ${this.countryDetails.population}</div>
        <div>Main currency: ${this.renderCurrencies()}</div>
        <div>Main language: ${this.renderLanguages()}</div>
        <button class="negative ui button close-button">x</button>
      </div>
  </div>
  `;
  }

  initializeEvents() {
    document.querySelector('.close-button').addEventListener('click', () => {
      this.hide();
    });
  }

  renderLanguages() {
    return this.countryDetails.languages
      .map(lang => `<div>${lang.name}, ${lang.nativeName}</div>`)
      .join('');
  }

  renderCurrencies() {
    return this.countryDetails.currencies
      .map(cur => `<div>${cur.name}, ${cur.code}, ${cur.symbol}</div>`)
      .join('');
  }
}
