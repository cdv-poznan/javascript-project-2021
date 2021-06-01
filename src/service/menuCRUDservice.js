import { showNotification } from '../components/notification';
import { fetchExactRecipe } from '../util/fetchData';
import {
  addLiToTheList,
  capitalizeName,
  checkIfExists,
  getDataFromLocalStorage,
} from './service';

//read

export const fetchMenu = async dayName => {
  const menu = getDataFromLocalStorage(dayName.long);
  $(`.calendar__${dayName.long}__list`).empty();
  for (const id of menu) {
    const data = await fetchExactRecipe(id);
    addLiToTheList(data.title, `calendar__${dayName.long}`, data.id);
  }
};

// create

export const addToMenu = e => {
  const recipeId = $('.plate').attr('id');
  if (!recipeId) {
    showNotification(`There is no dish on a plate!`);
    return;
  }
  const recipesForADay = getDataFromLocalStorage(e.data.dayName.long);
  if (recipesForADay.length > 4) {
    showNotification(
      `Menu for this day is full. Delete one recipe or select another day`,
    );
    return;
  }
  if (checkIfExists(recipeId, recipesForADay)) {
    showNotification(`That recipe is already on that list`);
    return;
  }
  recipesForADay.push(recipeId);
  localStorage.setItem(e.data.dayName.long, recipesForADay);
  const title = $('.recipe__title').text();
  addLiToTheList(title, `calendar__${e.data.dayName.long}`, recipeId);
  showNotification(`Saved for a ${capitalizeName(e.data.dayName.long)}`);
};

// delete

export const deleteItemFromMenu = e => {
  const menu = getDataFromLocalStorage(e.data.dayName.long);
  const deletedRecipeId = e.target.id;
  const newMenuList = menu.filter(item => item !== deletedRecipeId);
  localStorage.setItem(e.data.dayName.long, newMenuList);
  e.target.closest('li').remove();
  showNotification(`The dish was removed from the menu`);
};
