import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import ListSearchedBooks from './ListSearchedBooks'

export default class SearchBooks extends Component {

    state = {
        query: '' ,
        resultBooks: []
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }));
        if(query === '') {
            this.setState(() => ({
                resultBooks : [],
            }))
            return;
        }
        BooksAPI.search(query)
        .then((resultBooks) => {
            if(resultBooks.length === undefined || resultBooks.length === 0) {
                this.setState(() => ({
                    resultBooks : [],
                }))
                //console.log('Empty Result')
                return;
            }
            const shelfedBooksIntersectionResult = this.props.books.filter(sb => resultBooks.find(rb => (sb.id === rb.id)));
            resultBooks = resultBooks.filter(rb => !shelfedBooksIntersectionResult.find(sb => (sb.id === rb.id ) ));

            resultBooks = [...resultBooks, ...shelfedBooksIntersectionResult];
            this.setState(() => ({
                resultBooks : resultBooks,
                // query: query
            }))
            //console.log(resultBooks)
        }).catch(err => {
            this.setState(() => ({
                resultBooks : [],
                // query: ''
            }))
            console.log(err);

        })


    }
    

    
        render() {
        const { query } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search" >Close</button>
                    </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                        onChange={(event) => this.updateQuery(event.target.value)}
                        value={query}
                    />
                </div>
                </div>
                <ListSearchedBooks shelves={this.props.shelves} books={this.state.resultBooks} onUpdateBook={this.props.onUpdateBook} > </ListSearchedBooks>
            </div>
        )
    }
}
