import { fetchExactRecipe } from '../util/fetchData';

export const addLitoTheList = li => {
  $('ul.favourites__list').append(`<li>${li}</li>`);
};

const displayFavourites = async () => {
  const localStorageData = localStorage.getItem('favourites');
  if (!localStorageData) {
    return;
  }
  const favourites = localStorageData.split(',');
  $('ul.favourites__list').empty();
  for (const fav of favourites) {
    const data = await fetchExactRecipe(fav);
    addLitoTheList(data.title);
  }
};

$(document).ready(() => {
  displayFavourites();
});
