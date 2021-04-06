import { fetchRecipesIds } from '../util/fetchData';

const getIngredients = () => {
  const localStorageData = localStorage.getItem('ingredients');

  let ingredients;
  if (localStorageData) {
    ingredients = localStorageData.split(',');
  } else {
    ingredients = [];
  }
  return ingredients;
};

const showIngredients = ingredients => {
  ingredients.map(ing => {
    return $('ul.ingredientsList').append(`<li>${ing}</li>`);
  });
};

const addNewIngredient = () => {
  const ingredients = getIngredients();

  const newIngredient = $('input').val();
  $('input').val('');
  ingredients.push(newIngredient);
  showIngredients([newIngredient]);
  const ingredientsList = ingredients.join(',');
  localStorage.setItem('ingredients', ingredientsList);
};

const deleteIngredient = e => {
  const ingredients = getIngredients();
  const newIngredientsList = ingredients.filter(
    value => value !== e.target.innerText,
  );
  localStorage.setItem('ingredients', newIngredientsList);
  e.target.closest('li').remove();
};

$('.addBtn').click(() => {
  addNewIngredient();
});

$('input').keypress(e => {
  const keycode = e.keyCode ? e.keyCode : e.which;
  if (keycode === 13) {
    addNewIngredient();
  }
});

$('ul.ingredientsList').on('click', 'li', deleteIngredient);

$('.saveIngsBtn').click(() => {
  const localStorageData = localStorage.getItem('ingredients');
  if (localStorageData) {
    fetchRecipesIds(localStorageData);
  }
});

$(document).ready(function () {
  showIngredients(getIngredients());
});
