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
