const login = () => {
  const emailInput = document.querySelector('[type="email"');
  const passwordInput = document.querySelector('[type="password"');
  const registerText = document.querySelector('.textWrapper__register');
  const formButton = document.querySelector('.formWrapper__button');

  const logInWrapper = document.querySelector('.formWrapper');
  const stockSite = document.querySelector('.stock');

  // used while logging in
  const userStock = document.querySelector('.userData__name');
  const walletStock = document.querySelector('.userData__amount');
  const userProfile = document.querySelector('.userData__nameData');
  const emailProfile = document.querySelector('.userData__emailData');
  const walletProfile = document.querySelector('.userData__walletData');

  const accounts = [
    { id: 10222, mail: 'asd@asd', password: 'asd', wallet: 100 },
  ];

  // for loginFunction
  const wrongLogin = () => {
    alert('Wrong email or password');
    emailInput.value = '';
    passwordInput.value = '';
  };

  // log in
  const loginFunction = e => {
    e.preventDefault();
    const accountId = accounts.findIndex(
      item => item.mail === emailInput.value,
    );
    if (accounts[accountId] !== undefined) {
      if (accounts[accountId].password === passwordInput.value) {
        stockSite.classList.toggle('visible');
        logInWrapper.classList.toggle('visible');
        sessionStorage.setItem('user', `user${accounts[accountId].id}`);
        sessionStorage.setItem('email', `${accounts[accountId].mail}`);
        sessionStorage.setItem('password', `${accounts[accountId].password}`);
        sessionStorage.setItem('wallet', `${accounts[accountId].wallet}`);
        userStock.innerHTML = sessionStorage.getItem('user');
        walletStock.innerHTML = sessionStorage.getItem('wallet');
        userProfile.innerHTML = sessionStorage.getItem('user');
        emailProfile.innerHTML = sessionStorage.getItem('email');
        walletProfile.innerHTML = sessionStorage.getItem('wallet');
      } else {
        wrongLogin();
      }
    } else {
      wrongLogin();
    }
  };

  // register
  const registerFunction = e => {
    e.preventDefault();
    const newEmail = emailInput.value;
    const newPassword = passwordInput.value;
    const accountId = accounts.findIndex(
      item => item.mail === emailInput.value,
    );
    // if email exist
    if (accountId !== -1) {
      alert('This email is already used!');
      emailInput.value = '';
      passwordInput.value = '';
      // if password is too short or too long
    } else if (newPassword.length < 6 || newPassword.length > 32) {
      alert('Password must have at least 6 and max 32 signs.');
    }
    // correct email and password
    else if (newEmail.includes('@')) {
      // creatingID originalID
      let newId;
      do {
        newId = Math.floor(Math.random() * 100000);
      } while (accounts.findIndex(user => user.id === newId) !== -1);
      // creating account
      const newAccount = {
        id: newId,
        mail: newEmail,
        password: newPassword,
        wallet: 100,
      };
      accounts.push(newAccount);
      alert('Account created!');
      emailInput.value = '';
      passwordInput.value = '';
      registerText.classList.toggle('registerActive');
      formButton.innerHTML = 'Log in';
      // email wrong
    } else {
      alert('Email should includes "@"');
    }
  };

  // log in / register change
  const registerInit = e => {
    e.preventDefault();
    registerText.classList.toggle('registerActive');
    formButton.innerHTML === 'Log in'
      ? (formButton.innerHTML = 'Register')
      : (formButton.innerHTML = 'Log in');
  };

  // initializing registration or logging in
  const formInit = e => {
    formButton.innerHTML === 'Log in' ? loginFunction(e) : registerFunction(e);
  };

  formButton.addEventListener('click', formInit);
  registerText.addEventListener('click', registerInit);
};
export default login;
