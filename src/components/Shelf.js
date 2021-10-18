import React, { Component } from 'react'

import Book from './Book'
export default class Shelf extends Component {
 
    
    render() {
        const { shelf , shelves,  books, onUpdateBook } = this.props
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
                  <div className="bookshelf-books">
                   
                    <ol className="books-grid">
 

                    {this.props.books
                        .filter((book) => book.shelf ===  this.props.shelf.ID  )
                        .map(book => 

                    <Book  book ={book} shelves={this.props.shelves}
                                onUpdateBook={ onUpdateBook}/> 
                    )}

                      
                    </ol>
                  </div>
                </div>
        )
    }
}
