import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class SearchBook extends Component {

	state = {
		query: '',
		books: []
	}

	searchBooks = event => {
		const query = event.target.value;
		this.setState({query});

		if(query){
			BooksAPI.search(query.trim()).then(books => {
				 this.setState({books: (books.length > 0 ? books : [])});
			})
		}else
			this.setState({books: []});
	}

	render() {
		const {myReadBooks, onBookShelfChanged} = this.props;
		const {query, books} = this.state;
		return (
			<div className="search-books">
            	<div className="search-books-bar">
            		<Link className="close-search" to="/">Close</Link>
            		<div className="search-books-input-wrapper">
            			<input 
            				type="text" 
            				placeholder="Search by title or author"
            				value={query}
            				onChange={this.searchBooks}
            			/>
            		</div>
            	</div>
            	<div className="search-books-results">
            	{
            		books.length > 0 ? (
            			<div>
            				<span>Search returned {books.length} books</span>
            				<ol className="books-grid">
            				{	
            					books.map(book => (
            						<Book key={book.id} book={book} onBookShelfChanged={onBookShelfChanged} books={myReadBooks}/>
            					))
            				}
            				</ol>
            			</div>	
            		) : (
            			<span>No book to show</span>
            		)
            	}
           		</div>
           	</div>	
		);
	}
}

SearchBook.propTypes = {
	myReadBooks: PropTypes.array.isRequired,
	onBookShelfChanged: PropTypes.func.isRequired,
}

export default SearchBook;