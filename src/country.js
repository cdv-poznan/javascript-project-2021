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
    this.el.classList.add('ui', 'card');
    this.el.innerHTML = `
    <div class="content">
      <a class="header">${this.countryDetails.name}</a>
    </div>
    <div class="image">
      <img id="${this.countryDetails.alpha2Code}-flag" class=" ui fluid image" src="${this.countryDetails.flag}"></img>
    </div>
  `;
  }

  initializeEvents() {
    document
      .querySelector(`#${this.countryDetails.alpha2Code}-flag`)
      .addEventListener('click', () => {
        this.modal.show();
      });
  }
}
