import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { burgerReducer } from './burger';
import { feedReducer } from './feed';
import { ingredientsReducer } from './ingredients';

export const rootReducer = combineReducers({
  auth: authReducer,
  burger: burgerReducer,
  feed: feedReducer,
  ingredients: ingredientsReducer
});
