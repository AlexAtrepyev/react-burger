import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { socketMiddleware } from './middleware';
import { rootReducer } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware('wss://norma.nomoreparties.space/order')));

const store = createStore(rootReducer, enhancer);

export default store;
