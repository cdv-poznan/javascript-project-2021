import { fetchRecipesIds } from '../util/fetchData';
import { RECIPES } from '../util/globalData';

export const getDataFromLocalStorage = type => {
  const localStorageData = localStorage.getItem(`${type}`);
  const data = localStorageData ? localStorageData.split(',') : [];
  return data;
};

export const fetchRecipesByIngredients = async () => {
  const data = getDataFromLocalStorage('ingredients');
  if (data) {
    const isPantryIgnored = $('#checkbox').is(':checked') ? true : false;
    const recipesIds = await fetchRecipesIds(data, isPantryIgnored);
    RECIPES.ids = recipesIds;
  }
};

export const checkIfExists = (el, arr) => {
  return arr.indexOf(el) === -1 ? false : true;
};

export const addLiToTheList = (item, listType, id = '') => {
  if (Array.isArray(item)) {
    item.map(el => {
      return $(`ul.${listType}__list`).append(`<li>${el}</li>`);
    });
  } else {
    return $(`ul.${listType}__list`).append(`<li id="${id}">${item}</li>`);
  }
};

export const capitalizeName = name =>
  name.charAt(0).toUpperCase() + name.slice(1);
