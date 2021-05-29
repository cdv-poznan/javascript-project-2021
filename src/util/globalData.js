// export let RECIPES_IDS = [];

export const RECIPES = {
  idsList: [],
  set ids(values) {
    this.idsList = values;
  },
  get all() {
    return this.idsList;
  },
};

export const CURRENT = {
  currentIndex: 0,
  set setIndex(value) {
    if (value === 0) {
      this.currentIndex = value;
    } else {
      this.currentIndex += value;
    }
  },
  get getIndex() {
    return this.currentIndex;
  },
};

export const DAYS_NAMES = {
  daysNames: [
    { short: 'mon', long: 'monday' },
    { short: 'tue', long: 'tuesday' },
    { short: 'wed', long: 'wednesday' },
    { short: 'thu', long: 'thursday' },
    { short: 'fri', long: 'friday' },
    { short: 'sat', long: 'saturday' },
    { short: 'sun', long: 'sunday' },
  ],
  get getNames() {
    return this.daysNames;
  },
};
