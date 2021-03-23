// move buttons except formWrapper__button

const moveButton = () => {
  const profileButton = document.querySelector('.userData__profile');
  const marketButton = document.querySelector('.market');

  const stockSite = document.querySelector('.stock');
  const profileSite = document.querySelector('.profile');

  profileButton.addEventListener('click', () => {
    profileSite.classList.toggle('visible');
    stockSite.classList.toggle('visible');
  });

  marketButton.addEventListener('click', () => {
    stockSite.classList.toggle('visible');
    profileSite.classList.toggle('visible');
  });
};
export default moveButton;
