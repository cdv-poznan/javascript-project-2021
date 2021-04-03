'use strict';

const searchBtn = document.querySelector('#search-btn');
const mealList = document.querySelector('#meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.querySelector('#recipe-close-btn');
const searchControl = document.querySelector('.search-control');
const overlay = document.querySelector('.overlay');

// Functions
const removeModal = () => {
  mealDetailsContent.parentElement.classList.remove('showRecipe');
  overlay.classList.add('hidden');
};

const mealRecipeModal = function (meal) {
  console.log(meal);
  meal = meal[0];
  let html = '';
  html += `
  <h2 class="recipe-title">${meal.strMeal}</h2>
  <p class="recipe-category">${meal.strCategory}</p>
  <div class="recipe-instruct">
    <h3>Instructions:</h3>
    <p>${meal.strInstructions}</p>
  </div>
  <div class="recipe-meal-img">
    <img src="${meal.strMealThumb}" alt="" />
  </div>
  <div class="recipe-link">
    <a href="${meal.strYoutube}" target="_blank">Watch Video!</a>
  </div>
  `;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add('run-fast-animation');
  mealDetailsContent.parentElement.classList.add('showRecipe');
};

const getMealList = function () {
  mealList.classList.remove('run-slow-animation');
  void mealList.offsetWidth;
  mealList.classList.add('run-slow-animation');
  if (document.querySelector('#notFound')) {
    document.querySelector('#notFound').id = 'meal';
  }
  let searchInputText = document.querySelector('#search-input').value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`,
  )
    .then(response => response.json())
    .then(data => {
      let html = '';
      if (data.meals) {
        data.meals.forEach(meal => {
          html += `
          <div class="meal-item" data-id="${meal.idMeal}">
            <div class="meal-img">
              <img src="${meal.strMealThumb}" alt="food" />
            </div>
            <div class="meal-name">
              <h3>${meal.strMeal}</h3>
              <a href="#" class="recipe-btn">Get recipe!</a>
            </div>
          </div>
        `;
        });
      } else {
        mealList.classList.remove('run-slow-animation');
        html =
          'Please give us only one ingredient! Make sure you wrote it correctly!';
        mealList.id = 'notFound';
      }
      mealList.innerHTML = html;
    });
  searchControl.value = '';
};

const getMealRecipe = function (e) {
  e.preventDefault();
  if (e.target.classList.contains('recipe-btn')) {
    overlay.classList.remove('hidden');
    let mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`,
    )
      .then(response => response.json())
      .then(data => {
        mealRecipeModal(data.meals);
      });
  }
};

// Event Handlers
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', removeModal);
overlay.addEventListener('click', removeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') removeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') getMealList();
});
