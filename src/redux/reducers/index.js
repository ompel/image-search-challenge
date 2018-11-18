import { combineReducers } from 'redux';
import photos from './photos';
import searchBar from './searchBar';
import photoItem from './photoItem';


export default combineReducers({ photos, searchBar, photoItem });
