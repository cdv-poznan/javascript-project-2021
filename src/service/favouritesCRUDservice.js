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

export const deleteFavourite = e => {
  const favourites = getDataFromLocalStorage('favourites');

  const newFavouritesList = favourites.filter(item => item !== e.target.id);
  localStorage.setItem('favourites', newFavouritesList);
  localStorage.removeItem(e.target.id);
  e.target.closest('li').remove();
};
