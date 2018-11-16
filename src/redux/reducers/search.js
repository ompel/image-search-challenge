import { SET_SEARCH_QUERY } from '../actions/actionTypes';

const initalState = {
  searchQuery: '',
  isSearhing: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
