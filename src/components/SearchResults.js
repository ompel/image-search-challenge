import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    return (
      <div className={`SearchResults row ${this.props.barCollapsed ? 'active' : ''}`}>
        <div className="col-12">SEARCH RESULTS</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  barCollapsed: state.searchBar.collapsed,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);
