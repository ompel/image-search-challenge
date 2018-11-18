import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import { setEnlargeImage } from '../redux/actions/photoItem/actions';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home container-fluid">
        <SearchBar />
        <SearchResults />
        <Modal
          isOpen={this.props.showModal}
          toggle={() => this.props.setEnlargeImage({})}
          className="modal-lg"
          onClick={() => this.props.setEnlargeImage({})}
        >
          <ModalBody>
            <div className="d-flex justify-content-center">
              <div className="image">
                <img
                  src={this.props.image.src}
                  alt={this.props.image.alt}
                  className="img-thumbnail"
                />
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.photoItem.showModal,
  image: state.photoItem.image,
});

const mapDispatchToProps = {
  setEnlargeImage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
