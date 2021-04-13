export class Country {
  countryDetails;

  constructor(data) {
    this.countryDetails = data;
  }

  render() {
    return `<div class="country-container">
   <div class="country-name">${this.countryDetails.name}</div>
   <img class="country-flag" src="${this.countryDetails.flag}"></img>
   <div class="country-name">${this.countryDetails.capital}</div>
   </div>`;
  }
}
