export const showModal = txt => {
  $('.backdrop').css('display', 'block');
  $('.modal').css('display', 'flex');
  $('.modal p').text(txt);

  $('.closeModalBtn').click(() => {
    $('.backdrop').css('display', 'none');
    $('.modal').css('display', 'none');
    $('.modal p').text('');
  });
};
