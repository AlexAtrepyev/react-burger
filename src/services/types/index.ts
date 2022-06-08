import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { TAuthActions } from '../actions/auth';
import { TBurgerActions } from '../actions/burger';
import { TFeedActions } from '../actions/feed';
import { TOrderActions } from '../actions/order';
import { TUIActions } from '../actions/ui';

import store from '../store';

type TApplicationActions = TAuthActions | TBurgerActions | TFeedActions | TOrderActions | TUIActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;
