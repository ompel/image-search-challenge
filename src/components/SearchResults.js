import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoResults from './NoResults';
import PhotoItem from './PhotoItem';
import Load from './Load';
import './SearchResults.css';


class SearchResults extends Component {

  render() {
    const photoItems = this.props.photos.map((photo, index) => (
      <PhotoItem key={index} {...photo} />
    ));
    return (
      <div
        className={`SearchResults row ${this.props.barCollapsed ? 'active' : ''} ${
          this.props.photos.length > 0 ? '' : 'justify-content-center'
        } bg-primary`}
      >
        {this.props.searching ? <Load loadingText="Searching..." /> : ''}
        <div className="d-flex justify-content-center flex-wrap photo-list">{photoItems}</div>
        <div className="col-4 align-self-center" hidden={this.props.photos.length > 0}>
          <NoResults />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  barCollapsed: state.searchBar.collapsed,
  photos: state.photos.list,
  searching: state.searchBar.searching,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);
