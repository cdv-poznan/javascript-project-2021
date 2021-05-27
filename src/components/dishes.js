import { displayRecipe, getRecipeData } from '../service/dishesService';
import {
  addNewFavourite,
  deleteFavourite,
} from '../service/favouritesCRUDservice';
import { showNotification } from '../components/notification';
import { showModal } from '../components/modal';
import { showMenu } from '../components/modalCalendar';

$('.findBtn').click(async () => {
  $('.recipe__note').attr('id', '');
  const data = await getRecipeData();
  if (!data) {
    return;
  }
  $('.recipe__note').css('display', 'none');
  displayRecipe(data);
});

$('.recipe__calendar').click(() => {
  $('.modal .calendar').css('display', 'block');
  showModal();
  showMenu();
});

$('.plate').hover(() => {
  const plateAttr = $('.plate').attr('id');
  if (plateAttr && typeof plateAttr !== 'undefined' && plateAttr !== false) {
    const recipeAttr = $('.recipe__note').attr('id');
    if (recipeAttr === 'saved') {
      $('.heart').css('display', 'none');
      $('.bin').css('display', 'block');
    } else {
      $('.heart').css('display', 'block');
      $('.bin').css('display', 'none');
    }
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
  showNotification(`Recipe deleted from favourites list!`);
});

$('.icon i')
  .mouseenter(e => {
    $(`#${e.target.id} ~ p`).css('display', 'flex');
  })
  .mouseleave(e => {
    $(`#${e.target.id} ~ p`).css('display', 'none');
  });
