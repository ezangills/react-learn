import React, { Component } from 'react';
import './App.css';
import BooksRow from './BooksRow';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {rows: []};
    this.performSearch();
  }

  performSearch(searchKey) {
    const urlString = 'https://api.itbook.store/1.0/search/' + searchKey;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const books = searchResults.books;
        var bookRows = [];
        if (books) {
          books.forEach(book => {
            bookRows.push(<BooksRow key={book.isbn13} book={book}/>)
          });
        }
        this.setState({rows: bookRows});
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    })
  }

  searchChangeHandler(event) {
    this.performSearch(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app_icon" width="50" src="movies-search-logo.svg" />
              </td>
              <td width="10" />
              <td>
                <h2>Books Search</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <input className='inputSearch' placeholder='Enter search term' onChange={this.searchChangeHandler.bind(this)}/>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
