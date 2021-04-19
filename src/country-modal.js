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
    <div class="ui message">   
      <div class="modal-header">
        <h2>${this.countryDetails.name}</h2>
        <img class="ui circular small image" src="${this.countryDetails.flag}">
      </div>
      <div class="country-details">
      <table class="ui very basic table">
      <tbody>
        <tr>
          <td>
            <h4 class="ui image header">
               <i class="icon city"></i>
              <div class="content">Capital</div>
          </h4></td>
          <td>${this.countryDetails.capital}</td>
        </tr>
       <tr>
         <td>
           <h4 class="ui image header">
              <i class="icon map"></i>
             <div class="content">Region</div>
         </h4></td>
         <td>${this.countryDetails.subregion}</td>
       </tr>
       <tr>
         <td>
           <h4 class="ui image header">
              <i class="icon compress arrows alternate"></i>
             <div class="content">Area</div>
         </h4></td>
         <td>${this.countryDetails.area.toLocaleString()}</td>
       </tr>
       <tr>
         <td>
           <h4 class="ui image header">
              <i class="icon users"></i>
             <div class="content">Population</div>
         </h4></td>
         <td>${this.countryDetails.population.toLocaleString()}</td>
       </tr>
       <tr>
        <td>
          <h4 class="ui image header">
            <i class="icon flag"></i>
            <div class="content">Language</div>
        </h4></td>
        <td>${this.renderLanguages()}</td>
      </tr>
      <tr>
        <td>
          <h4 class="ui image header">
            <i class="icon money"></i>
            <div class="content">Currency</div>
        </h4></td>
        <td>${this.renderCurrencies()}</td>
      </tr>
      </tbody>
  </table>
      <button class="negative circular ui icon button close-button">
      <i class="icon times"></i>
      </button>
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
      .map(lang => `<span>${lang.name} </span`)
      .join('');
  }

  renderCurrencies() {
    return this.countryDetails.currencies
      .map(cur => `<p>${cur.name}/${cur.code} </p>`)
      .join('');
  }
}
