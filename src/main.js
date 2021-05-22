'use strict'

let searchInput // input where user write book name
let searchIcon // button to find books
let searchResults // show find results
let btnAdd // button add book to favourite
let bookCover // currently book cover
let bookAuthor // currently book author
let bookTitle // currently book title
let bookDescription // currently book description
let url // url to google api book
let favouriteContainer // box with favourite books
let btnBuy // button buy book



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
        searchResults.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }
}

const removeFavourite = (event) => {
    const book = event.target.closest('div')
    if(event.target.closest('button')){
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
            for (const element of data.items){
                if(element.volumeInfo.imageLinks !== undefined){
                    let temp = document.createElement('a')
                    temp.setAttribute('id', element.id)
                    temp.innerHTML= `
                        <div class="find-item-bgc">
                            <img class="find-item-book" src="${element.volumeInfo.imageLinks?.thumbnail}"></img>
                        </div>
                        `
                    searchResults.appendChild(temp)
                }
                else{
                    continue
                }
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
        if (data.items[0].volumeInfo.description !== undefined){
            bookDescription.innerText = data.items[0].volumeInfo.description
        }
        else{
            bookDescription.innerText = "This book havn't desrciption"
        }
        bookCover.style.backgroundImage = `url(${data.items[0].volumeInfo.imageLinks.thumbnail})`
        sessionStorage.setItem('bookCover', `${data.items[0].volumeInfo.imageLinks.thumbnail}`)
        sessionStorage.setItem('buyLink', `${data.items[0].saleInfo.buyLink}`)
        bookCover.scrollIntoView({behavior: "smooth", block: "start"})
    })  
    .catch(error => console.log(error))
}

const addNewFavourite = () => {
    let temp = document.createElement('div')
    temp.innerHTML= `
                <a class="fav-item" id=${sessionStorage.getItem('id')}>
                    <div class="fav-item-bgc">
                        <img class="fav-item-book" src='${sessionStorage.getItem('bookCover')}'></img>
                    </div>
                </a>
                <button class="btn-remove">remove</button>
    `
    favouriteContainer.appendChild(temp)
}

document.addEventListener('DOMContentLoaded', main)