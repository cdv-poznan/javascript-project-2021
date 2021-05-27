export const showModal = txt => {
  $('.backdrop').css('display', 'block');
  $('.modal').css('display', 'block');
  $('.modal__text').text(txt);

  $('.closeModalBtn').click(() => {
    $('.backdrop').css('display', 'none');
    $('.modal').css('display', 'none');
    $('.modal__text').text('');
    $('.modal .calendar').css('display', 'none');
  });
};
