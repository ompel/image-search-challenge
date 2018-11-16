import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar d-flex ">
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="searchField"
              placeholder="Enter your query..."
            />
            <button type="submit" className="btn btn-primary ml-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
