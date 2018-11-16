import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, initialState, composedEnhancers);
export default store;
/* eslint-enable */
