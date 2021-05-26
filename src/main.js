const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

const searchBtn = document.getElementById('search-btn');
const mealList = document.querySelector('.meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');
const flukeBtn = document.querySelector('.fluke');

function getMealList() {
  const searchInputTxt = document.getElementById('search-input').value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`,
  )
    .then(response => response.json())
    .then(data => {
      let html = '';
      if (data.meals) {
        data.meals.forEach(meal => {
          html += `
              <div class="meal-item" data-id ="${meal.idMeal}">
                <div class="meal-img">
                  <img src="${meal.strMealThumb}" alt="food" />
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
        html = 'Sorry, what do you mean?';
        mealList.classList.add('not-found');
      }
      mealList.innerHTML = html;
    });
}

function mealRecipeModal(meal) {
  meal = meal[0];
  const html = `
  
    <div class="recipe-meal-img">
      <img src="${meal.strMealThumb}" alt="" />
    </div>
    <h2 class="recipe-title">${meal.strMeal}</h2>
    <div class="ingredients">
      <div class="box">
        ${meal.strIngredient1} ${meal.strMeasure1}<br />
        ${meal.strIngredient2} ${meal.strMeasure2}<br />
        ${meal.strIngredient3} ${meal.strMeasure3}<br />
        ${meal.strIngredient4} ${meal.strMeasure4}<br />
        ${meal.strIngredient5} ${meal.strMeasure5}<br />
        ${meal.strIngredient6} ${meal.strMeasure6}<br />
        ${meal.strIngredient7} ${meal.strMeasure7}<br />
        ${meal.strIngredient8} ${meal.strMeasure8}<br />
        ${meal.strIngredient9} ${meal.strMeasure9}<br />
        ${meal.strIngredient10} ${meal.strMeasure10}<br />
      </div>
      <div class="box">
        ${meal.strIngredient11} ${meal.strMeasure11}<br />
        ${meal.strIngredient12} ${meal.strMeasure12}<br />
        ${meal.strIngredient13} ${meal.strMeasure13}<br />
        ${meal.strIngredient14} ${meal.strMeasure14}<br />
        ${meal.strIngredient15} ${meal.strMeasure15}<br />
        ${meal.strIngredient16} ${meal.strMeasure16}<br />
        ${meal.strIngredient17} ${meal.strMeasure17}<br />
        ${meal.strIngredient18} ${meal.strMeasure18}<br />
        ${meal.strIngredient19} ${meal.strMeasure19}<br />
        ${meal.strIngredient20} ${meal.strMeasure20}<br />
      </div>
    </div>
   <hr class="result-line">
    <div class="recipe-instruct">
      <p>${meal.strInstructions}</p>
      
    </div>
    
    `;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add('show-recipe');
}

function getMealRecipe(e) {
  e.preventDefault();
  if (e.target.classList.contains('recipe-btn')) {
    const mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`,
    )
      .then(response => response.json())
      .then(data => mealRecipeModal(data.meals));
  }
}

function fluckMeal() {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let html = '';
      if (data.meals) {
        data.meals.forEach(meal => {
          html += ` <div class="recipe-meal-img">
              <img src="${meal.strMealThumb}" alt="" />
            </div>
            <h2 class="recipe-title">${meal.strMeal}</h2>
          <div class="ingredients">
      <div class="box">
        ${meal.strIngredient1} ${meal.strMeasure1}<br />
        ${meal.strIngredient2} ${meal.strMeasure2}<br />
        ${meal.strIngredient3} ${meal.strMeasure3}<br />
        ${meal.strIngredient4} ${meal.strMeasure4}<br />
        ${meal.strIngredient5} ${meal.strMeasure5}<br />
        ${meal.strIngredient6} ${meal.strMeasure6}<br />
        ${meal.strIngredient7} ${meal.strMeasure7}<br />
        ${meal.strIngredient8} ${meal.strMeasure8}<br />
        ${meal.strIngredient9} ${meal.strMeasure9}<br />
        ${meal.strIngredient10} ${meal.strMeasure10}<br />
      </div>
      <div class="box">
        ${meal.strIngredient11} ${meal.strMeasure11}<br />
        ${meal.strIngredient12} ${meal.strMeasure12}<br />
        ${meal.strIngredient13} ${meal.strMeasure13}<br />
        ${meal.strIngredient14} ${meal.strMeasure14}<br />
        ${meal.strIngredient15} ${meal.strMeasure15}<br />
        ${meal.strIngredient16} ${meal.strMeasure16}<br />
        ${meal.strIngredient17} ${meal.strMeasure17}<br />
        ${meal.strIngredient18} ${meal.strMeasure18}<br />
        ${meal.strIngredient19} ${meal.strMeasure19}<br />
        ${meal.strIngredient20} ${meal.strMeasure20}<br />
      </div>
    </div>
            <hr class="result-line"> 
            <div class="recipe-instruct">
              <p>${meal.strInstructions}</p>
              
            </div>
                 
            `;
        });
      }
      mealDetailsContent.innerHTML = html;
      mealDetailsContent.parentElement.classList.add('show-recipe');
    });
}

searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
flukeBtn.addEventListener('click', fluckMeal);
recipeCloseBtn.addEventListener('click', () => {
  mealDetailsContent.parentElement.classList.remove('show-recipe');
});
