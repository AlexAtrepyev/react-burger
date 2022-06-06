import type { TFeedActions } from '../actions/feed';

import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants';

import { TOrder } from '../types/data';

type TFeedState = {
  wsConnected: boolean;
  orders: TOrder[];
  total: number;
  totalToday: number;
};

const feedInitialState: TFeedState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
};

export const feedReducer = (state = feedInitialState, action: TFeedActions): TFeedState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnected: true
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false
      };
    }
    case WS_CONNECTION_CLOSED: {
      return feedInitialState;
    }
    case WS_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      };
    }
    default: {
      return state;
    }
  }
};
