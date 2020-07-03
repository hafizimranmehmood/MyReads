import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";


class BookList extends Component {

	render() {
		const {shelves, books, onBookShelfChanged} = this.props;
		return(
			<div className="list-books">
				<div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
				{
					shelves.map((shelf, index) => (
						<div className="bookshelf" key={index}>
                 			<h2 className="bookshelf-title">{shelf.title}</h2>
                  			<div className="bookshelf-books">
                  				<BookShelf books={books.filter(book => (shelf.type === book.shelf))} onBookShelfChanged={onBookShelfChanged} />
                  			</div>
                  		</div>
					))
				}
				</div>
				<div className="open-search">
					<Link to="/search">Search Book</Link>
				</div>
			</div>
		);
	}
}

BookList.propTypes = {
	shelves: PropTypes.array.isRequired,
	books: PropTypes.array.isRequired,
	onBookShelfChanged: PropTypes.func.isRequired,
}

export default BookList;