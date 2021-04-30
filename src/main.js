import { auth, db } from './firebase';
const notloggedContainer = document.querySelector('.notlogged-container');
const loggedContainer = document.querySelector('.logged-container');
let loggedIn = false;

//hide or show landing page
const hideContainer = () => {
  if (loggedIn === true) {
    notloggedContainer.style.display = 'none';
    loggedContainer.style.display = 'block';
    loggedContainer.classList.add('visible');
  } else {
    notloggedContainer.style.display = 'flex';
    loggedContainer.style.display = 'none';
    loggedContainer.classList.remove('visible');
  }
};

hideContainer();

const getIntoApp = () => {
  loggedIn = true;
  hideContainer();
};

//register
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = registerForm['name'].value;
  const email = registerForm['register-email'].value.trim();
  const password = registerForm['register-password'].value;
  registerForm.reset();
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      return db
        .collection('users')
        .doc(cred.user.uid)
        .set({
          Name: name,
          Email: email,
          Password: password,
        })
        .then(() => {
          console.log('success');
          $('#loginModal').modal('hide');
          getIntoApp();
        })
        .catch(err => {
          console.log(err.message);
          const registerError = getElementById('registerError');
          registerError.innerText = err.message;
        });
    })
    .catch(err => {
      console.log(err.message);
      registerError.innerText = err.message;
    });
});

//login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const loginEmail = loginForm['login-email'].value;
  const loginPassword = loginForm['login-password'].value;
  // console.log(loginEmail, loginPassword);
  auth
    .signInWithEmailAndPassword(loginEmail, loginPassword)
    .then(() => {
      console.log('login success');
      $('#loginModal').modal('hide');
      getIntoApp();
    })
    .catch(err => {
      const loginError = document.getElementById('loginError');
      loginError.innerText = err.message;
    });
});

//logout
const logoutButton = document.querySelector('.logout-btn');
console.log(logoutButton);
const logout = () => {
  auth.signOut();
  loggedIn = false;
  location.reload();
};
logoutButton.addEventListener('click', logout);

//adding incomes and expenses
let balance = 0;
const balanceText = document.querySelector('.balance-text');
// const setBalance = () => {
//   // balanceText.innerText = balance;
//   if (balance === 0) {
//     balanceText.style.color = '#000';
//   } else if (balance < 0) {
//     balanceText.style.color = '#dc3545';
//   } else {
//     balanceText.style.color = '#198754';
//   }
// };
// setBalance();

//adding expenses and incomes on list
const financesContainer = document.querySelector('.finances-container');
const renderData = individualDoc => {
  if (individualDoc.balance === undefined) {
    balanceText.innerText = 0;
  } else {
    balanceText.innerText = individualDoc.balance;
  }
  if (balance === 0) {
    balanceText.style.color = '#000';
  } else if (balance < 0) {
    balanceText.style.color = '#dc3545';
  } else {
    balanceText.style.color = '#198754';
  }
  //parent element
  const parentDiv = document.createElement('div');
  parentDiv.className = 'container finance-box';
  parentDiv.setAttribute('data-id', individualDoc.id);
  //to-do div
  const financeDiv = document.createElement('div');
  financeDiv.textContent = individualDoc.data().amount;
  //button to delete todos
  const trash = document.createElement('button');
  //font awesome icon
  const i = document.createElement('i');
  i.className = 'fas fa-trash';
  // appending
  trash.appendChild(i);

  parentDiv.appendChild(financeDiv);
  parentDiv.appendChild(trash);
  financesContainer.appendChild(parentDiv);

  trash.addEventListener('click', e => {
    // eslint-disable-next-line prefer-const
    let id = e.target.parentElement.parentElement.getAttribute('data-id');
    auth.onAuthStateChanged(user => {
      if (user) {
        db.collection(user.uid).doc(id).delete();
      }
    });
  });
};

//Adding finance to db function
const addFinanceToDb = (amount, id, balance) => {
  console.log('id' + id + 'amount' + amount);
  auth.onAuthStateChanged(user => {
    if (user) {
      db.collection(user.uid)
        .doc('_' + id)
        .set({
          id: '_' + id,
          amount: amount,
          balance: balance,
        })
        .then(() => {
          console.log('finance added');
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  });
};

//getting values from incomes form
const incomeForm = document.getElementById('income-form');
const date = new Date();
const time = date.getTime();
let counter = time;
incomeForm.addEventListener('submit', e => {
  e.preventDefault();
  // eslint-disable-next-line prefer-const
  let amount = Number(incomeForm['income-amount'].value);
  // eslint-disable-next-line prefer-const
  let id = (counter += 1);
  console.log(id);
  balance = balance + amount;
  amount = amount + ' pln';
  // setBalance(id);
  incomeForm.reset();
  $('#addIncomeModal').modal('hide');
  addFinanceToDb(amount, id, balance);
});

//getting values from expenses form
const expenseForm = document.getElementById('expense-form');
expenseForm.addEventListener('submit', e => {
  e.preventDefault();
  // eslint-disable-next-line prefer-const
  let amount = Number(expenseForm['expense-amount'].value);
  const expenseType = expenseForm['finance-select'].value;
  // eslint-disable-next-line prefer-const
  let id = (counter += 1);
  balance = balance - amount;
  amount = amount + ' pln - expense type: ' + expenseType;
  // setBalance(id);
  expenseForm.reset();
  addFinanceToDb(amount, id, balance);
});

// event listeners for adding and removing
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection(user.uid).onSnapshot(snapshot => {
      const changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          renderData(change.doc);
        } else if (change.type === 'removed') {
          const li = financesContainer.querySelector(
            '[data-id=' + change.doc.id + ']',
          );
          financesContainer.removeChild(li);
        }
      });
    });
  }
});
