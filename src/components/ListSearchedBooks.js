import React, { Component } from 'react'
import Book from './Book'


export default class ListSearchedBooks extends Component {
    render() {
        const { shelves,  books, onUpdateBook } = this.props

        return (
            <div className="search-books-results">
                { (books.length === 0)?
                        <span>No books found</span>
                    
                    :
                
                    <ol className="books-grid">
                        {books
                            .map(book => 

                        <Book key={book.id} book={book} shelves={shelves} onUpdateBook={onUpdateBook}/> 
                        )}
                    </ol>

                }
            </div>
        )
    }
}
