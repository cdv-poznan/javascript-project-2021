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
  <div class="country-name">Name: ${this.countryDetails.name}</div>
  <div class="country-name">Capital: ${this.countryDetails.capital}</div>
  <div class="country-name">Area: ${this.countryDetails.area}</div>
  <div class="country-name">Population: ${this.countryDetails.population}</div>
  <div class="country-name">Main currency: ${this.renderCurrencies()}</div>
  <div class="country-name">Main language: ${this.renderLanguages()}</div>
  <button class="close-button">Click</button>
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
      .map(cur => `<div>${cur.name}, ${cur.nativeName}</div>`)
      .join('');
  }
}
