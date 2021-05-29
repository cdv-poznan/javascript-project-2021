export const fetchRecipesIds = async (
  ingredients,
  isPantryIgnored,
  ranking = 1,
  maxNmberOfRecipes = 10,
) => {
  // Ranking - Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
  // isPantryIgnored - Whether to ignore typical pantry items, such as water, salt, flour, etc.

  const settings = {
    async: true,
    crossDomain: true,
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${encodeURIComponent(
      ingredients,
    )}&number=${maxNmberOfRecipes}&ranking=${ranking}&ignorePantry=${isPantryIgnored}`,
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': process.env.API_HOST,
    },
  };

  return await $.ajax(settings);
};

export const fetchExactRecipe = async recipeId => {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': process.env.API_HOST,
    },
  };

  return await $.ajax(settings);
};

export const fetchIngredientsOnly = async recipeId => {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/ingredientWidget.json`,
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': process.env.API_HOST,
    },
  };

  return await $.ajax(settings);
};
