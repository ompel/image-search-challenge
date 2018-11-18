import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setEnlargeImage } from '../redux/actions/photoItem/actions';
import './PhotoItem.css';

class PhotoItem extends Component {
  render() {
    return (
      <div
        className="PhotoItem m-2"
        onClick={() => this.props.setEnlargeImage({ src: this.props.largeImageURL, alt: this.props.tags })
        }
        style={{
          backgroundImage: `url(${this.props.previewURL})`,
        }}
      >
        <img src={this.props.webformatURL} alt={this.props.tags} className="thumbnail" />
        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="overlay-content">
            <FontAwesomeIcon icon="search-plus" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setEnlargeImage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoItem);
