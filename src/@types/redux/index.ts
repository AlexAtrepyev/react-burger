import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { TAuthActions } from './auth';
import { TBurgerActions } from './burger';
import { TFeedActions } from './feed';
import { TIngredientsActions } from './ingredients';

import store from '../../services/store';

type TApplicationActions = TAuthActions | TBurgerActions | TFeedActions | TIngredientsActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;
