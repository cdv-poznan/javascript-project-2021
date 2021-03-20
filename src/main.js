let $todoInput; // miejsce na wpisanie treści
let $alertInfo; // info o braku zadania / konieczność dodania 
let $addBtn; // przycisk ADD - dodaje nowe elementy
let $ulList; // lista zadań
let $newTask; // nowo dodany Li, nowe zadanie
let $toolsPanel; // panel z narzędziami
let $completBtn; //przycisk niebieski ok
let $editBtn; // przycisk edycji
let $deleteBtn; // przycisk usuwania

let $popup; //pobrany popup
let $popupInfo; // alert w popupie przy dodaniu pustego tekstu
let $editedTodo; // edytowanyt Todo
let $popupInput; // tekst wpisywany w inputa
let $addPopupBtn; //przycisk zatwierdz w pupapie
let $closeTodoBtn; // przycisk od zamykania popupa

let $acceptPanel; // panel akceptacji oferty
let $editedPanelinfo; // edytowanyt Todo
let $acceptPanelInfo; // tekst wpisany w panelu
let $acceptPanelBtn; //przycisk zatwierdz w pupapie
let $closeAcceptPanelBtn; // zamykanie accteptPanel

let $currency; // walutra transakcji 
let $tenor; // okres
let $margin; // marża
let $percentage; //prowizja
let $insurance; // ubezpieczenie


let items = []; // tablica do wartość by przekazać do localStora

let $idNumber = 0;
let $allTask;

const endpoint = "http://api.nbp.pl/api/exchangerates/tables/a/last/1?format=json"; // API kursów walutów NBP
const currencyArr = []; //tablica w wynikami kursów walut


const $itemsStorage = JSON.parse(localStorage.getItem('itemsStorage')) || [];

const main = () => {
    prepareDOMElemenst();
    prepareDOMEvents();
    // addlocalStorEvent();
    
};


//pobranie elementów
const prepareDOMElemenst = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo= document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');

    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
    $allTask = $ulList.getElementsByTagName('li');

    $acceptPanel= document.querySelector('.acceptPanel');
    $acceptPanelInfo = document.querySelector('.acceptPanelInfo');
    $acceptPanelInput = document.querySelector('.acceptPanelInput');
    $acceptPanelBtn = document.querySelector('.accPanel');
    $closeAcceptPanelBtn = document.querySelector('.cancelPanel');


    $currency = document.querySelector('.currency');
    $tenor = document.querySelector('.tenor');
    $margin = document.querySelector('.margin');
    $percentage = document.querySelector('.percentage');
    $insurance = document.querySelector(`.insurance input[type='checkbox']`);





};

// nadajemy nasłuchiwanie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    // $addBtn.addEventListener('click', addlocalStorEvent);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
    $todoInput.addEventListener('keyup', enterCheck);
    $closeAcceptPanelBtn.addEventListener('click', closeAcceptPanel);
    $acceptPanelBtn.addEventListener('click',acceptBtn);

    searchInput.addEventListener("change", displayMatches);
    searchInput.addEventListener("keyup", displayMatches);


};
///////////////////////////////////////////////////////////////////////

const addNewTask = () => {
    if($todoInput.value !== ''){
        $idNumber++;
      
    
        let currencyValues = [].filter
        .call($currency.options, option => option.selected)
        .map(option => option.text);


        let currencyTenor = [].filter
        .call($tenor.options, option => option.selected)
        .map(option => option.text);
  

         let currencyMargin = [].filter
          .call($margin.options, option => option.selected)
          .map(option => option.text);

        let currencyPercentage = [].filter
          .call($percentage.options, option => option.selected)
          .map(option => option.text);

          const localLi = {
            value: $todoInput.value,
            currency: currencyValues,
            tenor: currencyTenor,
            margin: currencyMargin
        };
      

        // items.push(localLi);
        // populateList(items, localLi);
        // console.log(items);

        // function populateList(plates =[],platesList){
        //     platesList.innerHTML = plates.map((plate, i) => {
        //         return `
        //         <li>
        //         
        //         <label for=""${plate.text}</lable>
        //         </li>
        //         `;
        //     }).join('');
        // }
        // populateList(items, localLi);

      

        $newTask = document.createElement('li');
        // $newTask.innerText ='Twoja oferta: ' + $todoInput.value + currencyValues +' na okres: '+ currencyTenor +' z oprocentowaniem: '+ currencyMargin;
        $newTask.innerText = ` Twoja oferta to:  ${localLi.value}  ${localLi.currency}  na okres:  ${localLi.tenor}  z oprocentowaniem: ${localLi.margin}`;
        $newTask.setAttribute('id',`todo-${$idNumber}`)
        $ulList.appendChild($newTask);
     

        // $newTask.setItem('itemsStorage', JSON.stringify($newTask));

        $todoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
  
     
        
    } else {
        $alertInfo.innerText ='Wpisz kwotę!';

    }
};
//////////////////////////FUNCKCJA LOCALSTORGE/////////////////////////////////////////////

// const addlocalStorEvent = () =>{
//     const localtext = $ulList.innerText;
//     $itemsStorage.push(localtext);
//     console.log(localtext);
//     console.log($itemsStorage);

//     localStorage.setItem('itemsStorage', JSON.stringify($itemsStorage));
//     // addNewTask(localtext);

//     $itemsStorage.forEach(item =>{
    
//       $newTask = document.createElement('li');
//       $newTask.innerText = item;
//       $newTask.setAttribute('id',`todo-${$idNumber}`)
//       $ulList.appendChild($newTask);
   
//       $todoInput.value = '';
//       $alertInfo.innerText = '';
//       createToolsArea();

//     })

// };




///////////////////////////////////////////////////////////////////////

const enterCheck = () => {
    if(event.keyCode === 13){
        addNewTask();
        // addlocalStorEvent();
    }
};

///////////////////////////////////////////////////////////////////////

const createToolsArea = () => {
    $toolsPanel = document.createElement('div');
    $toolsPanel.classList.add('tools');
    $newTask.appendChild($toolsPanel);

    $completBtn = document.createElement('button');
    $completBtn.classList.add('complete');
    $completBtn.innerHTML ='<i class="fas fa-check"></i>';
    $toolsPanel.appendChild($completBtn);

    $editBtn = document.createElement('button');
    $editBtn.classList.add('edit');
    $editBtn.innerHTML="EDIT";
    $toolsPanel.appendChild($editBtn);

    $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete');
    $deleteBtn.innerHTML='<i class="fas fa-times"></i>';
    $toolsPanel.appendChild($deleteBtn);

    $userBtn = document.createElement('button');
    $userBtn.classList.add('userBtn');
    $userBtn.innerHTML='<i class="far fa-user"></i>';
    $toolsPanel.appendChild($userBtn);
};

/////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////

const checkClick = (e) => {

    if(e.target.closest('button').classList.contains('complete')){

      e.target.closest('li').classList.toggle('completed');
      e.target.closest('button').classList.toggle('completed');

     
      OpenAcceptPanel(e);
      console.log('okejkowo');

    } else if(e.target.closest('button').className === 'edit'){
        editTask(e);
        console.log('ok edit');

    } else if(e.target.closest('button').className === 'delete'){
        deleteTask(e);
        console.log('delete');
    }


};

///////////////////////////////////////////////////////////////////////////////////
// edycja zadania 
const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value =$editedTodo.firstChild.textContent;

    console.log('ok edit');
    $popup.style.display = 'flex';
};

// zmiana tekstu
const changeTodo = ()=> {
    if($popupInput.value !==''){
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = 'To się uda!';   
    } else{
        $popupInfo.innerText = "Musisz dodać zadanie!";
    }
};

// zamykanie popupa
const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText = '';     
};

//Usuwanie elementów
const deleteTask = (e) => {
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();

    if ($allTask.lenght === 0){
        $alertInfo.innerText = 'Aktualnie brak ofert!';
    };
};

// zamykanie acceptPanel

const closeAcceptPanel = () => {
    $acceptPanel.style.display = 'none';  
};

// otwierdzanie AccpetPanel
const OpenAcceptPanel = (e) => {
$acceptPanel.style.display = 'flex';
const oldTodo = e.target.closest('li').id;
$editedPanelinfo = document.getElementById(oldTodo);
$acceptPanelInfo.innerHTML =$editedPanelinfo.firstChild.textContent;
};

//  Akceptacja oferty

const acceptBtn = (e) => {
    $acceptPanel.style.display = 'none';  
};


//  Wyszukiwanei waluty

      const prom = fetch(endpoint);

      fetch(endpoint)
        .then((blob) => blob.json())
        .then((data) => currencyArr.push(...data));

      function findMatches(wordToMatch, currencyArr) {
        return currencyArr[0].rates.filter((place) => {
          const regex = new RegExp(wordToMatch, "gi");
          return place.currency.match(regex) || place.code.match(regex);
        });
      }


      function displayMatches() {
        console.log(this.value);
        const matchArray = findMatches(this.value, currencyArr);
        console.log(matchArray);

        const html = matchArray
          .map((place) => {
            const regex = new RegExp(this.value, "gi");
            const currencyName = place.currency.replace(
              regex,
              `<span class="hlcurrencyArr">${this.value}</span>`
            );
            const codeName = place.code.replace(
              regex,
              `<span class="hlcurrencyArr">${this.value}</span>`
            );
            return `
          <li>
            <span class="Waluta:">${currencyName}, ${codeName}</span>
            <span class="Obecny kurs:">${place.mid}</span>
          </li>
        `;
          })
          .join("");
        suggestions.innerHTML = html;
      }







const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");


document.addEventListener('DOMContentLoaded', main);