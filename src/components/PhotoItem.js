import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageZoom from 'react-medium-image-zoom';
import './PhotoItem.css';

class PhotoItem extends Component {
  render() {
    return (
      <div className="PhotoItem m-2">
        {/* <img src={this.props.previewURL} alt={this.props.tags} className="img-thumbnail" /> */}
        <ImageZoom
          image={{
            src: this.props.previewURL,
            alt: this.props.tags,
            className: 'img-thumbnail',
            style: { width: '20em' },
          }}
          zoomImage={{
            src: this.props.largeImageURL,
            alt: this.props.tags,
          }}
          zoomMargin={20}
        />
        {/* <div
          id="photo-overlay"
          className=" d-flex justify-content-center align-items-center overlay-content"
        >
          <FontAwesomeIcon icon="search-plus" />
        </div> */}
      </div>
    );
  }
}

export default PhotoItem;
