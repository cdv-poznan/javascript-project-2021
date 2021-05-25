'use strict'

let searchInput // input where user write book name
let searchIcon // button to find books
let searchResults // show find results
let btnAdd // button add book to favourite
let bookCover // currently book cover
let bookAuthor // currently book author
let bookTitle // currently book title
let bookDescription // currently book description
let favouriteContainer // box with favourite books
let btnBuy // button buy book
let alertFavourite // alert -  adding the same book second time
let alertResults // alert no results
let alertMessage // message of alert
let btnCloseBF // button closed popup in section BOOK-FIND
let btnCloseNav // button closed popup in navigation
const url = 'https://www.googleapis.com/books/v1/volumes?q=' // url to google api book
const favouriteArray = [] // array including id favourite books

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
    favouriteContainer  = document.querySelector('#fav-items')
    btnBuy = document.querySelector('#btn-buy') 
    alertFavourite = document.querySelector('#alert-favourite')
    alertResults = document.querySelector('#alert-navigation') 
    alertMessage = document.querySelector('#alert-message')
    btnCloseBF = document.querySelector('#close-popup-bookfind')
    btnCloseNav = document.querySelector('#close-popup-navigation')
}

const prepareDOMEvents = () => {
    searchIcon.addEventListener('click', finder)
    searchInput.addEventListener('keyup', checkKeyEnter)
    searchResults.addEventListener('click', finderDetails)
    btnAdd.addEventListener('click', addNewFavourite)
    favouriteContainer.addEventListener('click', removeFavourite)
    favouriteContainer.addEventListener('click', finderDetails)
    btnBuy.addEventListener('click', buyBook)
    btnCloseBF.addEventListener('click', closePopupFav)
    btnCloseNav.addEventListener('click', closePopupNav)
}

// scroll into view
const scrolling = (element) =>{
    element.scrollIntoView({behavior: "smooth", block: "center"})
}

// open new card in browser with buy option or show popup
const buyBook = (event) => {
    if(event.target.closest('button').classList.contains('btn-buy-book')){
        if(sessionStorage.getItem('buyLink') !== 'undefined'){

            window.open(`${sessionStorage.getItem('buyLink')}`, '_blank')
        }
        else{
            showAlert(alertFavourite)
            alertMessage.innerText = 'You cannot buy this book'
        }
    }
}

// run finder function after click "enter"
const checkKeyEnter = (event) => {
    if (event.key === 'Enter'){
        finder()
    }
}

// remove book from favourite
const removeFavourite = (event) => {
    const book = event.target.closest('div')
    if(event.target.closest('button')){
        book.remove()
    }
}

// showing popup
const showAlert = (element) => {
    element.classList.remove('alert-hidden')
    element.classList.add('alert-visibilty')
}

// hiding popup
const hideAlert = (element) => {
    element.classList.add('alert-hidden')
    element.classList.remove('alert-visibilty')
}

// close popup in book-find section
const closePopupFav = (event) => {
    if(event.target.closest('button').classList.contains('btn-close')){
        hideAlert(alertFavourite)
    }
}

// close popup in navgation
const closePopupNav = (event) => {
    if(event.target.closest('button').classList.contains('btn-close')){
        hideAlert(alertResults)
    }
}

// find books and display results
const finder = () =>{
    while (searchResults.firstChild) {
        searchResults.firstChild.remove()
    }
    fetch(url+searchInput.value+'&maxResults=15')
        .then(res => res.json())
        .then(data => {
            // loop check and show only books witch cover image
            for (const element of data.items){
                if(element.volumeInfo.imageLinks !== undefined){
                    let newElement = document.createElement('a')
                    newElement.setAttribute('id', element.id)
                    newElement.innerHTML= `
                        <div class="find-item-bgc">
                            <img class="find-item-book" src="${element.volumeInfo.imageLinks?.thumbnail}"></img>
                        </div>
                        `
                    searchResults.appendChild(newElement)
                }
                else{
                    continue
                }
            }
            scrolling(searchResults)
        })
        .catch(error => {
            console.log(error)
            showAlert(alertResults)
        })
}

// find clicked book, and display details
const finderDetails = (event) =>{
    const bookId = event.target.closest('a').id
    fetch(url+bookId)
    .then(res => res.json())
    .then(data => {
        const dataApi = data.items[0]
        sessionStorage.setItem('id', bookId)
        bookAuthor.innerText = dataApi.volumeInfo.authors
        bookTitle.innerText = dataApi.volumeInfo.title
        if (dataApi.volumeInfo.description !== undefined){
            bookDescription.innerText = dataApi.volumeInfo.description
        }
        else{
            bookDescription.innerText = "This book havn't desrciption"
        }
        bookCover.style.backgroundImage = `url(${dataApi.volumeInfo.imageLinks.thumbnail})`
        sessionStorage.setItem('bookCover', `${dataApi.volumeInfo.imageLinks.thumbnail}`)
        sessionStorage.setItem('buyLink', `${dataApi.saleInfo.buyLink}`)
        scrolling(bookAuthor)
    })  
    .catch(error => console.log(error))
}

// adding book to favourite
const addNewFavourite = () => {
    const storageId = sessionStorage.getItem('id')
    if (favouriteArray.includes(`${storageId}`) === false){
        let newElement = document.createElement('div')
        newElement.innerHTML= `
                    <a class="fav-item" id=${storageId}>
                        <div class="fav-item-bgc">
                            <img class="fav-item-book" src='${sessionStorage.getItem('bookCover')}'></img>
                        </div>
                    </a>
                    <button class="btn-remove">remove</button>
        `
        favouriteContainer.appendChild(newElement)
        favouriteArray.push(`${storageId}`)
    }
    else{
        showAlert(alertFavourite)
        alertMessage.innerText = 'This book is already added to favourite !'
    }
}

document.addEventListener('DOMContentLoaded', main)