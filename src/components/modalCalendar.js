import {
  addToMenu,
  deleteItemFromMenu,
  fetchMenu,
} from '../service/menuCRUDservice';
import { DAYS_NAMES } from '../util/globalData';

const daysNames = DAYS_NAMES.getNames;

export const showMenu = () => {
  for (const dayName of daysNames) {
    fetchMenu(dayName);
    $(`#${dayName.short}`).on('click', addToMenu.bind(null, dayName));
    $(`#${dayName.short}`).on('click', 'li', e => {
      e.stopPropagation();
    });

    $(`#${dayName.short}`).on(
      'click',
      'li',
      { dayName: dayName },
      deleteItemFromMenu,
    );
  }
};
