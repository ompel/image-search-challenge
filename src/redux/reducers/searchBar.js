import {
  SET_COLLAPSE_BAR,
  SET_SEARCH_QUERY,
  SET_SEARCHING,
  SET_ERROR_TEXT,
} from '../actions/actionTypes';

const initialState = {
  collapsed: false,
  searchQuery: '',
  searching: false,
  errorText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLAPSE_BAR:
      return {
        ...state,
        collapsed: action.collapsed,
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.searchQuery,
      };

    case SET_SEARCHING:
      return {
        ...state,
        searching: action.searching,
      };

    case SET_ERROR_TEXT:
      return {
        ...state,
        errorText: action.errorText,
      };

    default:
      return {
        ...state,
      };
  }
};
