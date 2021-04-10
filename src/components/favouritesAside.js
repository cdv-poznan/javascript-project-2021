import {
  deleteFavourite,
  showFavourites,
} from '../service/favouritesCRUDservice';

$('ul.favourites__list').on('click', 'li', deleteFavourite);

$(document).ready(() => {
  showFavourites();
});
