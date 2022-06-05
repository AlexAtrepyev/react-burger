import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { burgerReducer } from './burger';
import { orderReducer } from './order';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
  auth: authReducer,
  burger: burgerReducer,
  order: orderReducer,
  ui: uiReducer
});
