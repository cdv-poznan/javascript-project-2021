import { displayRecipe } from '../service/dishesService';
import { showFavourites } from '../service/favouritesCRUDservice';
import { fetchExactRecipe } from '../util/fetchData';

$('ul.favourites__list').on('click', 'li', async e => {
  $('.recipe__note').css('display', 'block');
  $('.recipe__note').attr('id', 'saved');

  let data;
  try {
    data = await fetchExactRecipe(e.target.id);
  } catch (err) {
    console.log(err);
    showModal('Something went wrong...');
    return;
  }
  if (!data) {
    return;
  }

  const ingredients = localStorage.getItem(e.target.id).split('-');
  const ownedIngs = ingredients[0];
  const missedIngs = ingredients[1];

  displayRecipe(data, ownedIngs, missedIngs);
});

$(document).ready(() => {
  showFavourites();
});
