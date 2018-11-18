import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NoResults.css';

class NoResults extends Component {
  render() {
    return (
      <div className="no-results text-center">
        <div className="glyph">
          <FontAwesomeIcon className="pb-4" icon="sad-tear" size="10x" />
        </div>
        <p className="text">No photos were found for this query...</p>
      </div>
    );
  }
}

export default NoResults;
