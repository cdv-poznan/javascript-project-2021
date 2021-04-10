import {
  addLiToTheList,
  checkIfExists,
  getDataFromLocalStorage,
} from './service';

// create

export const addNewIngredient = () => {
  const ingredients = getDataFromLocalStorage('ingredients');

  const newIngredient = $('.ingredients__input').val();
  $('.ingredients__input').val('');
  const ifExists = checkIfExists(newIngredient, ingredients);
  if (ifExists) {
    return;
  }
  ingredients.push(newIngredient);
  const ingredientsList = ingredients.join(',');
  localStorage.setItem('ingredients', ingredientsList);
  addLiToTheList([newIngredient], 'ingredients');
};

// delete

export const deleteIngredient = e => {
  const ingredients = getDataFromLocalStorage('ingredients');
  const newIngredientsList = ingredients.filter(
    value => value !== e.target.innerText,
  );
  localStorage.setItem('ingredients', newIngredientsList);
  e.target.closest('li').remove();
};
