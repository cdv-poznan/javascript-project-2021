export const showNotification = text => {
  $('.notification p').text(text);
  $('.notification').css('display', 'flex');

  setTimeout(() => {
    $('.notification p').text('');
    $('.notification').css('display', 'none');
  }, 4000);
};
