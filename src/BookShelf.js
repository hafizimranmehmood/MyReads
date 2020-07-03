import React, {Component} from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookShelf extends Component {

	render() {
		const {books, onBookShelfChanged} = this.props;
		
		return (
			<ol className="books-grid">
			{
				books.map(book => (
					<Book key={book.id} book={book} onBookShelfChanged={onBookShelfChanged} books={books} />
				))
			}
			</ol>
		);
	}
}

BookShelf.propTypes = {
	books: PropTypes.array.isRequired,
	onBookShelfChanged: PropTypes.func.isRequired,
}

export default BookShelf;