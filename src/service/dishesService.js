import { showModal } from '../components/modal';
import { fetchExactRecipe } from '../util/fetchData';
import { RECIPES, CURRENT } from '../util/globalData';
import { extractDataFromArrayInObj } from './service';

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
    showModal('Something went wrong...');
    return;
  }

  if (!data.instructions) {
    return getRecipeData();
  }
  return data;
};

export const displayRecipe = (
  data,
  ownedIngs = '',
  missedIngs = '',
  allIngs = '',
) => {
  $('.recipe__title').text(data.title);
  $('.recipe__text').text(data.instructions);
  $('.recipe__text').css('text-align', 'left');
  if (data.image) {
    const newStyle = `<style id="mystyle" type="text/css"> .plate::before {background-image: url('${data.image}'); box-shadow: inset 7px 7px 10px 3px #888, inset 0 0 15px 20px #fff;} </style>`;

    if ($('#mystyle')[0]) {
      $('#mystyle').replaceWith(newStyle);
    } else {
      $('head').append(newStyle);
    }

    $('.plate').attr('id', data.id);
  }

  if (allIngs.length > 0) {
    $('p.recipe__ings--owned').css('display', 'none');
    $('p.recipe__ings--missed').css('display', 'none');
    $('p.recipe__ings--all').css('display', 'block');
    $('.recipe__ings--all span').text(allIngs.join(', '));
  } else if (ownedIngs || missedIngs) {
    $('p.recipe__ings--owned').css('display', 'block');
    $('p.recipe__ings--missed').css('display', 'block');
    $('p.recipe__ings--all').css('display', 'none');
    $('.recipe__ings--owned span').text(ownedIngs);
    $('.recipe__ings--missed span').text(missedIngs);
  } else {
    $('p.recipe__ings--owned').css('display', 'block');
    $('p.recipe__ings--missed').css('display', 'block');
    $('p.recipe__ings--all').css('display', 'none');

    const ownedIngList = extractDataFromArrayInObj(
      RECIPES.all[CURRENT.getIndex - 1].usedIngredients,
      'name',
    );
    const missedIngList = extractDataFromArrayInObj(
      RECIPES.all[CURRENT.getIndex - 1].missedIngredients,
      'name',
    );

    $('.recipe__ings--owned span').text(ownedIngList.join(', '));
    $('.recipe__ings--missed span').text(missedIngList.join(', '));
  }

  $('i#vegan').css('color', data.vegan ? '#222' : '#ddd');
  $('p.vegan').text(data.vegan ? 'Vegan' : 'Not vegan');
  $('i#vegetarian').css('color', data.vegetarian ? '#222' : '#ddd');
  $('p.vegetarian').text(data.vegetarian ? 'Vegetarian' : 'Not vegetarian');
  $('i#glutenFree').css('color', data.glutenFree ? '#222' : '#ddd');
  $('p.glutenFree').text(data.glutenFree ? 'Gluten free' : 'Not gluten free');
  $('i#servings').css('color', data.servings ? '#222' : '#ddd');
  $('p.servings').text(
    data.servings ? `${data.servings} servings` : 'No data about servings',
  );
  $('i#min').css('color', data.readyInMinutes ? '#222' : '#ddd');
  $('p.min').text(
    data.readyInMinutes ? `${data.readyInMinutes} min` : 'No data about time',
  );
};
