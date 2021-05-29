import {
  addToMenu,
  deleteItemFromMenu,
  fetchMenu,
} from '../service/menuCRUDservice';

const daysNames = [
  { short: 'mon', long: 'monday' },
  { short: 'tue', long: 'tuesday' },
  { short: 'wed', long: 'wednesday' },
  { short: 'thu', long: 'thursday' },
  { short: 'fri', long: 'friday' },
  { short: 'sat', long: 'saturday' },
  { short: 'sun', long: 'sunday' },
];

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
