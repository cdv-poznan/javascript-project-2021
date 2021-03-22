const addToWallet = () => {
  const buttons = document.querySelectorAll('.deposit__topUp');
  const buttonPay = document.querySelector('.deposit__pay');
  let walletAdd = 0;
  const walletStock = document.querySelector('.userData__amount');
  const walletProfile = document.querySelector('.userData__walletData');

  const chooseTopUp = (e, count) => {
    e.preventDefault();
    walletAdd = Number(count);
    buttons.forEach(button => {
      button.classList.remove('activePayment');
      if (button.dataset.count === count) {
        button.classList.add('activePayment');
      }
    });
  };

  // top up
  const topUp = e => {
    e.preventDefault();
    if (walletAdd !== 0) {
      const prevValue = Number(sessionStorage.getItem('wallet'));
      walletAdd = walletAdd + prevValue;
      sessionStorage.setItem('wallet', walletAdd);
      walletStock.innerHTML = sessionStorage.getItem('wallet');
      walletProfile.innerHTML = sessionStorage.getItem('wallet');
      walletAdd = 0;
      buttons.forEach(button => {
        button.classList.remove('activePayment');
      });
    } else {
      alert('Choose option');
    }
  };

  buttons.forEach(button =>
    button.addEventListener('click', e => chooseTopUp(e, button.dataset.count)),
  );
  buttonPay.addEventListener('click', topUp);
};
export default addToWallet;
