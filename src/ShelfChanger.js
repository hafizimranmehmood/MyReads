import React, {Component} from "react";
import PropTypes from "prop-types";

class ShelfChanger extends Component {

    onBookShelfChanged = event => {
        this.props.onBookShelfChanged(this.props.book, event.target.value);
    }

    render() {
        const {books, book} = this.props;
        let shelf = "none";
        for(let b of books){
            if(b.id === book.id){
                shelf = b.shelf;
                break;
            }
        }
        
        return(
            <div className="book-shelf-changer">
                <select onChange={this.onBookShelfChanged} value={shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

ShelfChanger.propType = {
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    onBookShelfChanged: PropTypes.func.isRequired,
}

export default ShelfChanger;
