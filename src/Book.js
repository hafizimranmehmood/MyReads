import React, {Component} from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import noBookCover from "./no-cover.png";

class Book extends Component {

	render() {
		const {book, onBookShelfChanged, books} = this.props;
		const bookCover = book.imageLinks && book.imageLinks.thumbnail 
			? book.imageLinks.thumbnail
			: noBookCover;

		return (
			<li>
				<div className="book">
            		<div className="book-top">
                		<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${bookCover})`}}></div>
                		<ShelfChanger books={books} book={book} onBookShelfChanged={onBookShelfChanged} />
                	</div>
                	<div className="book-title">{book.title ? book.title : 'Title not available'}</div>
                	{
                		book.authors && book.authors.map(author => (
                			<div className="book-authors" key={author}>{author}</div>
                		))
                	}
            	</div>
            </li>
		);
	}
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onBookShelfChanged: PropTypes.func.isRequired,
}

export default Book;