import { SET_ENLARGE_IMAGE } from '../actions/actionTypes';

const initialState = {
  showModal: false,
  image: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ENLARGE_IMAGE:
      return {
        ...state,
        showModal: !state.showModal,
        image: action.image,
      };

    default:
      return {
        ...state,
      };
  }
};
