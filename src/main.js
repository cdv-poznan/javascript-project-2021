// BEM

import './components/ingredientsAside';
import { fetchRecipesIds } from './util/fetchData';

const navLinks = [
  { button: 'ingsBtn', aside: 'ingredients' },
  { button: 'menuBtn', aside: 'menu' },
  { button: 'favsBtn', aside: 'favourites' },
];

for (const link of navLinks) {
  $(`.${link.button}`).click(() => {
    $('aside').css('display', 'none');
    $(`.${link.aside}`).css('display', 'block');
  });
}

$(document).ready(function () {
  $('.ingredients').css('display', 'block');
  // const localStorageData = localStorage.getItem('ingredients');
  // if (localStorageData) {
  //   fetchRecipesIds(localStorageData);
  // }
});
