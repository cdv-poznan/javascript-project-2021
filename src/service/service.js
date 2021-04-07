import { fetchRecipesIds } from '../util/fetchData';
import { RECIPES } from '../util/globalData';

export const fetchRecipesByIngredients = async () => {
  const localStorageData = localStorage.getItem('ingredients');
  if (localStorageData) {
    const recipesIds = await fetchRecipesIds(localStorageData);
    RECIPES.ids = recipesIds;
  }
};
