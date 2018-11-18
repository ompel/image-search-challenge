import {
 SET_COLLAPSE_BAR, SET_SEARCH_QUERY, SET_SEARCHING, SET_ERROR_TEXT,
} from '../actionTypes';

export const setCollapseBar = collapsed => ({
  type: SET_COLLAPSE_BAR,
  collapsed,
});

export const setSearchQuery = searchQuery => ({
  type: SET_SEARCH_QUERY,
  searchQuery,
});

export const setSearching = searching => ({
  type: SET_SEARCHING,
  searching,
});

export const setErrorText = errorText => ({
  type: SET_ERROR_TEXT,
  errorText,
});
