// BEM

import './components/dishes';
import './components/favouritesAside';
import './components/ingredientsAside';
import './components/modalCalendar';
import { fetchRecipesByIngredients } from './service/service';

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
$(document).ready(() => {
  $('.ingredients').css('display', 'block');
  $('.bin').css('display', 'none');
  $('.heart').css('display', 'none');
  // fetchRecipesByIngredients();
});
