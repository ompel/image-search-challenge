import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PhotoItem.css';

class PhotoItem extends Component {
  render() {
    return (
      <div className="PhotoItem m-2">
        <img src={this.props.previewURL} alt={this.props.tags} className="img-thumbnail" />
        <div id="photo-overlay" className=" d-flex justify-content-center align-items-center">
            TEST
        </div>
      </div>
    );
  }
}

export default PhotoItem;
