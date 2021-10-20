import React, { Component } from 'react'

export default class Book extends Component {

    onOptionChange = (event) => {
        this.props.onUpdateBook( this.props.book , event.target.value);
    }

    render() {
        let selectedShelf = 'none';
        let bookThumbnail = '';
        if(this.props.book.shelf !== null && this.props.book.shelf !== undefined) 
            selectedShelf = this.props.book.shelf;
        if(this.props.book.imageLinks !== undefined && this.props.book.imageLinks.thumbnail !== undefined ){
            bookThumbnail = this.props.book.imageLinks.thumbnail;
        }

        //console.log(this.props.book.shelf)    
        return (
 
            <li >
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookThumbnail} )` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.onOptionChange} value={selectedShelf}>
                            <option value="move" disabled>Move to...</option>
                            {this.props.shelves.map(shelf => <option value={shelf.ID} key={shelf.ID}>{shelf.title}</option> )}
                            <option value="none" >None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    { (this.props.book.authors !== undefined ) &&
                    this.props.book.authors.map(author =>
                    <div className="book-authors" key={author}>{author}</div>
                    )}
                 </div>
            </li>
        )
    }
}
