const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const apiKey = 'd6757a541d18a652d2c8fbfe1f8265b0';
const date1 = document.querySelector('.date1');
const temp1 = document.querySelector('.temp1');
const date2 = document.querySelector('.date2');
const temp2 = document.querySelector('.temp2');
const date3 = document.querySelector('.date3');
const temp3 = document.querySelector('.temp3');
const date4 = document.querySelector('.date4');
const temp4 = document.querySelector('.temp4');

button.addEventListener('click', function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue.value}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const nameValue = data['city']['name'];
      const tempValue = Math.trunc(data['list'][0]['main']['temp']);
      const descValue = data['list'][0]['weather'][0]['description'];
      const dateValue1 = data['list'][8]['dt_txt'];
      const tempValue1 = Math.trunc(data['list'][8]['main']['temp']);
      const dateValue2 = data['list'][16]['dt_txt'];
      const tempValue2 = Math.trunc(data['list'][16]['main']['temp']);
      const dateValue3 = data['list'][24]['dt_txt'];
      const tempValue3 = Math.trunc(data['list'][24]['main']['temp']);
      const dateValue4 = data['list'][32]['dt_txt'];
      const tempValue4 = Math.trunc(data['list'][32]['main']['temp']);

      city.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = tempValue;
      document.querySelector('.celsius').innerHTML = '°C';

      date1.innerHTML = dateValue1.slice(5, 10);
      temp1.innerHTML = tempValue1;
      document.querySelector('.celsius1').innerHTML = '°C, ';
      date2.innerHTML = dateValue2.slice(5, 10);
      temp2.innerHTML = tempValue2;
      document.querySelector('.celsius2').innerHTML = '°C, ';
      date3.innerHTML = dateValue3.slice(5, 10);
      temp3.innerHTML = tempValue3;
      document.querySelector('.celsius3').innerHTML = '°C, ';
      date4.innerHTML = dateValue4.slice(5, 10);
      temp4.innerHTML = tempValue4;
      document.querySelector('.celsius4').innerHTML = '°C';
    })

    .catch((err) => alert('Wrong city name!'));
});

const balance = document.getElementById('balance');
const expenses = document.getElementById('expenses');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }
}

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  item.classList.add(transaction.amount < 0 ? 'expense' : 'budget');

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  expenses.innerText = `$${expense}`;
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();

  init();
}

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);
