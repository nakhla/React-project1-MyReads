import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books : books
        }))
      })
  }


  updateBook = (book , shelf) => {
    book.shelf = shelf
    this.setState((currentState) => ({
      books: currentState.books.filter((b) => {
        return b.id !== book.id
      }).concat([book])
    }))


    BooksAPI.update(book , shelf)
  }

  shelves = [
      { ID : 'currentlyReading',
          title : 'Currently Reading'
      },
      { ID : 'wantToRead',
          title : 'Want to Read'
      },
      { ID : 'read',
          title : 'Read'
      }     
  ];
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }

  render() {
    return (
      <div className="app">
          <Route path='/search' render={({ history }) => (
            <SearchBooks onUpdateBook={this.updateBook} books={this.state.books}  shelves={this.shelves} ></SearchBooks>
          )} />
          
          <Route exact path='/' render={() => (
            <ListBooks shelves={this.shelves} books={this.state.books} onUpdateBook={this.updateBook} >

            </ListBooks>
          )} />
      </div>
    )
  }
}

export default BooksApp
