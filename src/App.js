import React from 'react'
import * as BooksAPI from "./BooksAPI";
import './App.css'
import {Route} from "react-router-dom";
import Search from "./Search";
import BookList from "./BookList";

const shelves = [
		{ 
				type: 'currentlyReading', 
				title: 'Currently Reading' 
		},
    {
    		type: 'wantToRead', 
    		title: 'Want to Read' 
    },
    {
    		type: 'read', 
    		title: 'Read'
    }
];

class BooksApp extends React.Component {
		state = {
				books: [] 
		}

		componentDidMount(){
				this.loadBooks();
		}

		loadBooks = () => {
				BooksAPI.getAll().then(books => {
				 		this.setState({books}); 
				});
		}

		onBookShelfChanged = (book, shelf) => {
				BooksAPI.update(book, shelf).then(res => {
						this.loadBooks();
				})
		}

	render(){
			const {books} = this.state;
			return(
					<div>
        			<Route exact path='/' render={() => (
          				<BookList
            					books={books}
            					shelves={shelves}
            					onBookShelfChanged={this.onBookShelfChanged}
          				/>
        			)} />
        			<Route exact path="/search" render={() => (
                    <Search onBookShelfChanged={this.onBookShelfChanged} myReadBooks={books}/>
              )} />
              
          </div>  
			);
	}
}

export default BooksApp
