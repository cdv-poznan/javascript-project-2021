import { displayRecipe } from '../service/dishesService';
import { fetchMenu } from '../service/menuCRUDservice';
import { fetchExactRecipe, fetchIngredientsOnly } from '../util/fetchData';
import { DAYS_NAMES } from '../util/globalData';

export const showMenuInTheAside = async () => {
  const daysNames = DAYS_NAMES.getNames;
  for (const dayName of daysNames) {
    fetchMenu(dayName);
    $(`aside.menu #${dayName.short}-aside`).on('click', 'li', async e => {
      let data;
      try {
        data = await fetchExactRecipe(e.target.id);
      } catch (err) {
        console.log(err);
        return;
      }
      if (!data) {
        return;
      }

      const ingData = await fetchIngredientsOnly(e.target.id);
      const ingredients = ingData.ingredients;
      const ingList = [];
      for (const ing of ingredients) {
        ingList.push(ing.name);
      }
      $('p.recipe__ings--all').css('display', 'block');
      displayRecipe(data, null, null, ingList);
      $('.recipe__ings').css('display', 'none');
    });
  }
};
