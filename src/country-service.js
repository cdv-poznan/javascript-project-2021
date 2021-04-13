import { Country } from './country';

export class CountryService {
  countries = [];

  async fetch(name) {
    if (!name) {
      return fetch('https://restcountries.eu/rest/v2/all')
        .then(result => result.json())
        .then(result => {
          this.countries = result.map(countryData => {
            return new Country(countryData);
          });
        })
        .catch(this.handleError);
    }

    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(result => result.json())
      .then(result => {
        this.countries = result.map(countryData => {
          return new Country(countryData);
        });
      })
      .catch(this.handleError);
  }

  handleError = () => {
    this.countries = [];
  };

  get countries() {
    return this.countries;
  }
}
