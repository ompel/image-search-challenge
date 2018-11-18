import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEnlargeImage } from '../redux/actions/photoItem/actions';
import './PhotoItem.css';

class PhotoItem extends Component {
  render() {
    return (
      <div
        className="PhotoItem m-2"
        onClick={() => this.props.setEnlargeImage({ src: this.props.largeImageURL })}
        style={{
          backgroundImage: `url(${this.props.previewURL})`,
        }}
      >
        <img src={this.props.webformatURL} alt={this.props.tags} className="thumbnail" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  setEnlargeImage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoItem);
