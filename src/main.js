const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const searchBtn = document.getElementById('search-btn');
const mealList = document.querySelector('.meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

function getMealList() {
  const searchInputText = document.getElementById('search-input').value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`,
  )
    .then(response => response.json())
    .then(data => {
      let recipe = '';
      if (data.meals) {
        data.meals.forEach(meal => {
          recipe += `
              <div class="meal-item" data-id - '${meal.idMeal}'>
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="" />
              </div>
              <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe</a>
              </div>
            </div>
              `;
        });
        mealList.classList.remove('not-found');
      } else {
        recipe = 'Maybe something different?';
        mealList.classList.add('not-found');
      }
      mealList.innerHTML = recipe;
    });
}

searchBtn.addEventListener('click', getMealList);
