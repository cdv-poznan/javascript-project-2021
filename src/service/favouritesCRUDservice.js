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
  for (const fav of favourites) {
    const data = await fetchExactRecipe(fav);
    addLiToTheList(data.title, 'favourites', data.id);
  }
};

// create

export const addNewFavourite = () => {
  const id = $('.plate').attr('id');
  const title = $('.recipe__title').text();
  if (!id) {
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
  addLiToTheList(title, 'favourites', id);
};

// delete

export const deleteFavourite = e => {
  const favourites = getDataFromLocalStorage('favourites');

  const newFavouritesList = favourites.filter(item => item !== e.target.id);
  localStorage.setItem('favourites', newFavouritesList);
  e.target.closest('li').remove();
};
