export class CountryList {
  countryService;

  constructor(countryService) {
    this.countryService = countryService;
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

    const countriesMarkup = this.countryService.countries
      .map(country => country.render())
      .join('');
    document.querySelector('.container').innerHTML = countriesMarkup;
  }
}
