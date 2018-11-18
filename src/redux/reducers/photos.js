import { SET_PHOTOS } from '../actions/actionTypes';

const initialState = {
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.photos,
      };

    default:
      return {
        ...state,
      };
  }
};
