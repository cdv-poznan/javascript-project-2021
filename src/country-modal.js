export class CountryModal {
  countryDetails;
  el;

  constructor(data) {
    this.countryDetails = data;
    this.el = document.createElement('div');
    this.container = document.querySelector('.modal');
  }

  show() {
    this.render();
    this.container.classList.remove('hidden');
    document.querySelector('.modal-body').classList.remove('hidden');
    this.container.appendChild(this.el);
    document.querySelector('.container').classList.add('noscroll');
    this.initializeEvents();
  }

  hide() {
    this.container.classList.add('hidden');
    document.querySelector('.modal-body').classList.add('hidden');
    document.querySelector('.container').classList.remove('noscroll');
    this.container.innerHTML = '';
  }

  render() {
    this.el.innerHTML = `
  <div class="country-name">${this.countryDetails.name}</div>
  <div class="country-name">${this.countryDetails.capital}</div>
  <button class="close-button">Click</button>
  `;
  }

  initializeEvents() {
    document.querySelector('.close-button').addEventListener('click', () => {
      this.hide();
    });
  }
}
