import { displayRecipe, getRecipeData } from '../service/dishesService';
import { addNewFavourite, deleteFavourite } from '../service/favouritesCRUDservice';

$('.findBtn').click(async () => {
  $('.recipe__note').attr('id', '');
  const data = await getRecipeData();
  if (!data) {
    return;
  }
  $('.recipe__note').css('display', 'none');
  displayRecipe(data);
});

$('.plate').hover(() => {
  const attr = $('.recipe__note').attr('id');
  if (attr === 'saved') {
    $('.heart').css('display', 'none');
    $('.bin').css('display', 'block');
  } else {
    $('.heart').css('display', 'block');
    $('.bin').css('display', 'none');
  }
});

$('.plate').mouseleave(() => {
  $('.bin').css('display', 'none');
  $('.heart').css('display', 'none');
});

$('.heart').click(() => {
  addNewFavourite();
});

$('.bin').click(() => {
  deleteFavourite();
});

$('.icon i')
  .mouseenter(e => {
    $(`#${e.target.id} ~ p`).css('display', 'flex');
  })
  .mouseleave(e => {
    $(`#${e.target.id} ~ p`).css('display', 'none');
  });
