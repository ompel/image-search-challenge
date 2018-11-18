import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home container-fluid">
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

export default Home;
