import { displayRecipe, getRecipeData } from '../service/dishesService';
import { addNewFavourite } from '../service/favouritesCRUDservice';

$('.findBtn').click(async () => {
  const data = await getRecipeData();
  if (!data) {
    return;
  }
  $('.recipe__note').css('display', 'none');
  displayRecipe(data);
});

$('.heart').click(() => {
  addNewFavourite();
});

$('i')
  .mouseenter(e => {
    $(`#${e.target.id} ~ p`).css('display', 'flex');
  })
  .mouseleave(e => {
    $(`#${e.target.id} ~ p`).css('display', 'none');
  });
