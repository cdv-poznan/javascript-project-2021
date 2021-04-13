import { CountryList } from './country-list';
import { CountryService } from './country-service';

const countryList = new CountryList(new CountryService());

document.addEventListener('DOMContentLoaded', async () => {
  countryList.initialize();
});
