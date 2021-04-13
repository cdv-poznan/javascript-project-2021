export class CountryList {
  countryService;
  el;

  constructor(countryService) {
    this.countryService = countryService;
    this.el = document.createElement('div');
  }

  async initialize() {
    await this.countryService.fetch();
    this.render();
    this.initializeEvents();
  }

  initializeEvents() {
    document.querySelector('#search').addEventListener('keyup', async event => {
      await this.countryService.fetch(event.target.value);
      this.render();
    });
  }

  async render() {
    if (this.countryService.countries.length === 0) {
      document.querySelector('.container').innerHTML =
        '<div>Name not found</div>';
      return;
    }

    const container = document.querySelector('.container');
    container.innerHTML = '';
    this.countryService.countries.forEach(country => {
      country.render();
      container.appendChild(country.el);
      country.initializeEvents();
    });
  }
}
