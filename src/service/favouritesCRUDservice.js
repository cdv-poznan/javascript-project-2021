import { fetchExactRecipe } from '../util/fetchData';
import {
  addLiToTheList,
  checkIfExists,
  getDataFromLocalStorage,
} from './service';
import { showNotification } from '../components/notification';

// read

export const showFavourites = async () => {
  const favourites = getDataFromLocalStorage('favourites');
  $('ul.favourites__list').empty();
  for (const id of favourites) {
    const data = await fetchExactRecipe(id);
    addLiToTheList(data.title, 'favourites', data.id);
  }
};

// create

export const addNewFavourite = () => {
  const id = $('.plate').attr('id');
  const title = $('.recipe__title').text();
  const ownedIngs = $('.recipe__ings--owned span').text();
  const missedIngs = $('.recipe__ings--missed span').text();
  if (!id) {
    showNotification(`Find recipe first!`);
    return;
  }
  const favourites = getDataFromLocalStorage('favourites');
  const ifExists = checkIfExists(id, favourites);
  if (ifExists) {
    showNotification(`${title} is already on your favourites list!`);
    return;
  }
  favourites.push(id);
  localStorage.setItem('favourites', favourites);
  localStorage.setItem(id, `${ownedIngs}-${missedIngs}`);
  addLiToTheList(title, 'favourites', id);
  showNotification(`Saved as a favourite!`);
};

// delete

export const deleteFavourite = () => {
  const favourites = getDataFromLocalStorage('favourites');
  const deletedItemId = $('.plate').attr('id');
  const newFavouritesList = favourites.filter(item => item !== deletedItemId);
  localStorage.setItem('favourites', newFavouritesList);
  localStorage.removeItem(deletedItemId);
  $(`li[id=${deletedItemId}]`).remove();

  if ($('#mystyle')[0]) {
    $('#mystyle').remove();
  }

  $('.recipe__note').attr('id', '');
  $('.plate').attr('id', '');
  $('.recipe__title').text(`Recipe's name`);
  $('.recipe__ings--owned span').text('');
  $('.recipe__ings--missed span').text('');
  $('.recipe__text').text('Here you will find recipe and hints.');
  $('.recipe__text').css('text-align', 'center');
  $('.recipe__note').css('display', 'none');

  $('i#vegan').css('color', '#ddd');
  $('p.vegan').text('Not vegan');
  $('i#vegetarian').css('color', '#ddd');
  $('p.vegetarian').text('Not vegetarian');
  $('i#glutenFree').css('color', '#ddd');
  $('p.glutenFree').text('Not gluten free');
  $('i#servings').css('color', '#ddd');
  $('p.servings').text('No data about servings');
  $('i#min').css('color', '#ddd');
  $('p.min').text('No data about time');
};
