import { combineReducers } from 'redux';

import { burgerReducer } from './burger';
import { orderReducer } from './order';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
    burger: burgerReducer,
    order: orderReducer,
    ui: uiReducer
})
