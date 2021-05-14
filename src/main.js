'use strict'

let searchInput // input where user write book name
let searchIcon // button to find books
let searchResults // show find results
let btnAdd // add book to favourite
let bookCover // currently book cover
let bookAuthor // currently book author
let bookTitle // currently book title
let bookDescription // currently book description
let url // url to google api book
let favouriteContainer // box with favourite books
let btnBuy // buy book

const randomBook = document.querySelector('#random-book')

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () =>{
    searchInput = document.querySelector('#input-area')
    searchIcon = document.querySelector('#search-icon')
    searchResults = document.querySelector('#find-results')
    btnAdd = document.querySelector('#btn-add')
    bookCover = document.querySelector('#book-cover')
    bookAuthor = document.querySelector('#book-author')
    bookTitle = document.querySelector('#book-title')
    bookDescription = document.querySelector('#book-description')
    url = 'https://www.googleapis.com/books/v1/volumes?q='
    favouriteContainer  = document.querySelector('#fav-items')
    btnBuy = document.querySelector('#btn-buy')  
}

const prepareDOMEvents = () => {
    searchIcon.addEventListener('click', finder)
    searchInput.addEventListener('keyup', checkKeyEnter)
    searchResults.addEventListener('click', finderDetails)
    btnAdd.addEventListener('click', addNewFavourite)
    favouriteContainer.addEventListener('click', removeFavourite)
    favouriteContainer.addEventListener('click', finderDetails)
    btnBuy.addEventListener('click', buyBook)
}



const buyBook = (event) => {
    if(event.target.closest('button').classList.contains('btn-buy-book')){
        window.open(`${sessionStorage.getItem('buyLink')}`, '_blank')
    }
}

const checkKeyEnter = (event) => {
    if (event.key === 'Enter'){
        finder()
    }
}

const removeFavourite = (event) => {
    const book = event.target.closest('a')
    if(event.target.closest('button').classList.contains('btn-remove')){
        book.remove()
    }
}

const finder = () =>{
    while (searchResults.firstChild) {
        searchResults.firstChild.remove()
    }
    fetch(url+searchInput.value)
        .then(res => res.json())
        .then(data => {
            for (let element of data.items){
                let temp = document.createElement('a')
                temp.setAttribute('id', element.id)
                temp.innerHTML= `
                    <div class="find-item-bgc">
                        <img class="find-item-book" src="${element.volumeInfo.imageLinks.thumbnail}"></img>
                    </div>
                    `
                searchResults.appendChild(temp)
            }
        })
        .catch(error => console.log(error))
}

const finderDetails = (event) =>{
    const temp = event.target.closest('a').id
    fetch(url+temp)
    .then(res => res.json())
    .then(data => {
        sessionStorage.setItem('id', temp)
        bookAuthor.innerText = data.items[0].volumeInfo.authors
        bookTitle.innerText = data.items[0].volumeInfo.title
        bookDescription.innerText = data.items[0].volumeInfo.description
        bookCover.style.backgroundImage = `url(${data.items[0].volumeInfo.imageLinks.thumbnail})`
        sessionStorage.setItem('bookCover', `${data.items[0].volumeInfo.imageLinks.thumbnail}`)
        sessionStorage.setItem('buyLink', `${data.items[0].saleInfo.buyLink}`)
    })  
    .catch(error => console.log(error))
}

const addNewFavourite = () => {
    let temp = document.createElement('a')
    temp.setAttribute('id', `${sessionStorage.getItem('id')}`)
    temp.innerHTML= `
                <div class="fav-item">
                    <div class="fav-item-bgc">
                        <img class="fav-item-book" src='${sessionStorage.getItem('bookCover')}'></img>
                    </div>
                    <button class="btn-remove">remove</button>
                </div>
    `
    favouriteContainer.appendChild(temp)
}

document.addEventListener('DOMContentLoaded', main)