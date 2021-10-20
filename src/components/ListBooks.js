import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Shelf from './Shelf'

export default class ListBooks extends Component {
    render() {

        const {shelves, books, onUpdateBook}  = this.props
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map(shelf  =>  
                <Shelf key={shelf.ID} shelf={shelf} shelves={shelves} books={books}
                onUpdateBook={onUpdateBook}/>
                )}
 
              </div>
            </div>
            <div className="open-search">
                <Link to='/search'>
                    <button  >Add a book</button>
                </Link>
            </div>
        </div>
        )
    }
}
