import React, { Component } from 'react'

import Book from './Book'
export default class Shelf extends Component {
 
    
    render() {
        const { shelf , shelves,  books, onUpdateBook } = this.props

        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.title}</h2>
                  <div className="bookshelf-books">
                   
                    <ol className="books-grid">
 

                    {books
                        .filter((book) => book.shelf ===  shelf.ID  )
                        .map(book => 

                    <Book key={book.id} book ={book} shelves={shelves} onUpdateBook={onUpdateBook}/> 
                    )}

                      
                    </ol>
                  </div>
                </div>
        )
    }
}
