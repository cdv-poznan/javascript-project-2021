import {
  addNewIngredient,
  deleteIngredient,
} from '../service/ingredientsCRUDservice';
import {
  addLiToTheList,
  fetchRecipesByIngredients,
  getDataFromLocalStorage,
} from '../service/service';
import { CURRENT } from '../util/globalData';

$('.saveIngsBtn').click(() => {
  CURRENT.setIndex = 0;
  fetchRecipesByIngredients();
  $('.findBtn').trigger('click');
});

$('.addIngBtn').click(() => {
  addNewIngredient();
});

$('.ingredients__input').keypress(e => {
  const keycode = e.keyCode ? e.keyCode : e.which;
  if (keycode === 13) {
    addNewIngredient();
  }
});

$('ul.ingredients__list').on('click', 'li', deleteIngredient);

$(document).ready(function () {
  addLiToTheList(getDataFromLocalStorage('ingredients'), 'ingredients');
});
