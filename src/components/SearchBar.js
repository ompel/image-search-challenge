import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  setCollapseBar,
  setSearchQuery,
  setSearching,
  setErrorText,
} from '../redux/actions/searchBar/actions';
import { setPhotos } from '../redux/actions/photos/actions';
import './SearchBar.css';

const apiPath = 'https://pixabay.com/api/';
const apiKey = '8934401-2d6cd1568430326e62922dd58';

class SearchBar extends Component {
  handleSearch = () => {
    // this.props.setCollapseBar();
    if (this.props.searchQuery) {
      this.getPhotosForQuery(this.props.searchQuery);
    }
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  getPhotosForQuery = (query) => {
    this.props.setSearching(true);
    const photos = [];

    axios
      .get(apiPath, {
        params: {
          key: apiKey,
          q: query,
          image_type: 'photo',
        },
      })
      .then((response) => {
        for (const photo of response.data.hits) {
          photos.push(photo);
        }
        this.props.setPhotos(photos);
        this.props.setCollapseBar(true);
        this.props.setErrorText('');
      })
      .catch((error) => {
        this.props.setErrorText('Unknown error, please try again in a moment.');
        this.props.setCollapseBar(false);
      })
      .then(() => {
        // always executes
        this.props.setSearching(false);
      });
  };

  handleChange = (event) => {
    this.props.setSearchQuery(event.target.value);
  };

  render() {
    return (
      <div
        className={`SearchBar row justify-content-center align-items-center ${
          this.props.collapsed ? 'collapsed' : ''
        }`}
      >
        <div className="col-12 col-sm-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your search query..."
              onChange={this.handleChange}
              value={this.props.searchQuery}
              onKeyPress={this.handleKeyPress}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary rounded-right"
                type="button"
                onClick={this.handleSearch}
                disabled={!this.props.searchQuery}
              >
                {this.props.searching ? 'Searching...' : 'Search!'}
              </button>
            </div>
          </div>
          <div className="alert alert-danger mt-4 w-50 mx-auto" hidden={!this.props.errorText}>
            {this.props.errorText}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  collapsed: state.searchBar.collapsed,
  searchQuery: state.searchBar.searchQuery,
  searching: state.searchBar.searching,
  errorText: state.searchBar.errorText,
});

const mapDispatchToProps = {
  setCollapseBar,
  setSearchQuery,
  setSearching,
  setErrorText,
  setPhotos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
