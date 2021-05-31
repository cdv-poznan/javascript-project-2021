import './components/dishes';
import './components/favouritesAside';
import './components/ingredientsAside';
import { showMenuInTheAside } from './components/menuAside';
import './components/modalCalendar';
import { fetchRecipesByIngredients } from './service/service';

const navLinks = [
  { button: 'ingsBtn', aside: 'ingredients' },
  { button: 'menuBtn', aside: 'menu' },
  { button: 'favsBtn', aside: 'favourites' },
];

const showCloseAsideBtn = () => {
  $('.active .closeAside').css('display', 'block');
  $('.closeAside').click(() => {
    $('aside').css('display', 'none');
    $('aside').removeClass('active');
  });
  $('aside').css('box-shadow', '0 0 100px 1px #222');
};

for (const link of navLinks) {
  $(`.${link.button}`).click(() => {
    $('aside').css('display', 'none');
    $('aside').removeClass('active');
    $(`.${link.aside}`).css('display', 'block');
    $(`.${link.aside}`).addClass('active');

    if (link.aside === 'menu') {
      showMenuInTheAside();
    }

    if ($(document).width() <= 900) {
      showCloseAsideBtn();
    }
  });
}

$('.logo').click(() => {
  $('aside').css('display', 'none');
  $('aside').removeClass('active');
  $('.ingredients').css('display', 'block');
  $('.ingredients').addClass('active');
});

$(document).ready(() => {
  $('aside').removeClass('active');
  $('.ingredients').css('display', 'block');
  $('.ingredients').addClass('active');
  $('.bin').css('display', 'none');
  $('.heart').css('display', 'none');
  fetchRecipesByIngredients();

  if ($(document).width() <= 900) {
    showCloseAsideBtn();
  }
  $(window).resize(() => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      $('aside').css('display', 'none');
    }
    if (window.matchMedia('(min-width: 900px)').matches) {
      $('aside').css('display', 'none');
      $('.active').css('display', 'block');
      if (!$('aside').hasClass('active')) {
        $('.ingredients').css('display', 'block');
        $('.ingredients').addClass('active');
      }
      $('aside').css('box-shadow', '0 0 15px 1px #ddd');
      $('.closeAside').css('display', 'none');
    }
  });
});
