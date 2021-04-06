export const fetchRecipesIds = async (
  ingredients,
  ranking = 1,
  isPantryIgnored = true,
  maxNmberOfRecipes = 3,
) => {
  // Ranking - Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
  // isPantryIgnored - Whether to ignore typical pantry items, such as water, salt, flour, etc.

  const settings = {
    async: true,
    crossDomain: true,
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&number=${maxNmberOfRecipes}&ranking=${ranking}&ignorePantry=${isPantryIgnored}`,
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e1e27bda5fmshfefbc5216c53ce7p1e1e69jsn14e3044f98b5',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  };

  await $.ajax(settings).done(function (response) {
    let recipesIds = [];
    for (const item of response) {
      recipesIds.push(item.id);
    }
    console.log(recipesIds);
    return recipesIds;
  });
};
