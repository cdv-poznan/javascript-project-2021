import { showModal } from '../components/modal';
import { fetchExactRecipe } from '../util/fetchData';
import { RECIPES, CURRENT } from '../util/globalData';

export const getRecipeData = async () => {
  if (RECIPES.all.length === CURRENT.getIndex) {
    showModal('Please add or remove ingredients to get new recipes.');
    return;
  }
  let data;
  try {
    data = await fetchExactRecipe(RECIPES.all[CURRENT.getIndex].id);
    CURRENT.setIndex = +1;
  } catch (err) {
    console.log(err);
    return;
  }

  if (!data.instructions) {
    return getRecipeData();
  }
  return data;
};

export const displayRecipe = (data, ownedIngs = '', missedIngs = '') => {
  $('.recipe__title').text(data.title);
  $('.recipe__text').text(data.instructions);
  if (data.image) {
    $('head').append(
      `<style id="mystyle" type="text/css"> .plate::before {background-image: url('${data.image}'); box-shadow: inset 7px 7px 10px 3px #888, inset 0 0 15px 20px #fff;} </style>`,
    );
    $('.plate').attr('id', data.id);
  }

  if (ownedIngs || missedIngs) {
    $('.recipe__ings--owned span').text(ownedIngs);
    $('.recipe__ings--missed span').text(missedIngs);
  } else {
    $('.recipe__ings--owned span').text(
      RECIPES.all[CURRENT.getIndex - 1].usedIngredients[0].name,
    );
    $('.recipe__ings--missed span').text(
      RECIPES.all[CURRENT.getIndex - 1].missedIngredients[0].name,
    );
  }
};
