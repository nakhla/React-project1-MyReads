# MyReads Project

 My Reads is an application for categorizing books as Currently reading, Want to read  and Read, Users of the app has the ability to search -remoted database on udacity via a supplied API -for books and add them to their own shelves. Books displayed in the homepage under the shelf name with Title, Thumbnail and Author(s) -if available- . 


## Project Setup

* install Node.js for your operating system.
* clone repo `git clone https://github.com/nakhla/React-project1-MyReads.git`
* install all project dependencies `npm install`
* start the development server `npm start`
* open browser and navigate to  `localhost:3000`

## Project Features

* allow users to search for books using as you type search.
* add book to a shelf
* move books between shelves in the homepage as well as search page
* remove book from a shelf

## Project files
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, .
│   └── index.html # DO NOT MODIFY
└── src
    ├── components # folder for all created components 
    │   ├── Book.js # Book componenet used to view book card in search and shelves 
    │   ├── ListBooks.js # ListBooks compoenent which propagates shelves and assigned books in the homepage
    │   ├── ListSearchedBooks.js #ListSearchedBooks compoenent which List books in the search page
    │   ├── SearchBooks.js # component which call search method in the API and hold the state of result books
    │   └── Shelf.js #component which render books according to its shelf using shelves Array.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # calls the getall method once it is mounted and have the route paths using react-router-dom
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Backend Server

A backend server is provided by Udacity, [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
