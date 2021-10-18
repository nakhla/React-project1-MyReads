import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
 
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail} )` }}></div>
                    <div className="book-shelf-changer">
                        <select>
                        <option value="move" disabled>Move to...</option>
                        {this.props.shelves.map(shelf => <option value={shelf.ID}>{shelf.title}</option> )}

                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {this.props.book.authors.map(author =>
                    <div className="book-authors">{author}</div>
                    )}
                                 <button
                                        onClick={() => this.props.onUpdateBook( this.props.book , 'read')}
                                        className='contact-remove'>
                                        oooooooooooooooooo 
                                    </button>
                </div>
            </li>
        )
    }
}
