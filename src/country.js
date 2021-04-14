import { CountryModal } from './country-modal';

export class Country {
  countryDetails;
  modal;
  el;

  constructor(data) {
    this.countryDetails = data;
    this.modal = new CountryModal(data);
    this.el = document.createElement('div');
  }

  render() {
    this.el.innerHTML = `<div class="country-container">
   <div class="country-name">${this.countryDetails.name}</div>
   <img id="${this.countryDetails.alpha2Code}-flag" class="country-flag" src="${this.countryDetails.flag}"></img>
   <div class="country-name">${this.countryDetails.capital}</div>
   </div>`;
  }

  initializeEvents() {
    document
      .querySelector(`#${this.countryDetails.alpha2Code}-flag`)
      .addEventListener('click', event => {
        console.log(event.target);
        this.modal.show();
      });
  }
}
