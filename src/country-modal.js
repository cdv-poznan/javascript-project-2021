export class CountryModal {
  countryDetails;
  el;

  constructor(data) {
    this.countryDetails = data;
    this.el = document.createElement('div');
    this.container = document.querySelector('.modal');
  }

  show() {
    this.container.appendChild(this.el);
    this.container.classList.remove('hidden');
  }

  hide() {
    this.container.classList.add('hidden');
    this.container.innerHTML = '';
  }

  render() {
    this.el.innerHTML = `<div class="modal-container">
  <div class="country-name">${this.countryDetails.name}</div>
  <div class="country-name">${this.countryDetails.capital}</div>
  <div class="country-name">${this.countryDetails.currencies[0]}</div>
  <div class="country-name">${this.countryDetails.borders}</div>
  </div>`;
  }
}
