import { SET_PHOTOS } from '../actions/actionTypes';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        list: action.photos,
      };

    default:
      return {
        ...state,
      };
  }
};
