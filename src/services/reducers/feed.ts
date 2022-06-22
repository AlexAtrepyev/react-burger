import { TFeedActions, TFeedState } from '../../@types/redux/feed';

import * as constants from '../../utils/constants/feed';

export const feedInitialState: TFeedState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
};

export const feedReducer = (state = feedInitialState, action: TFeedActions): TFeedState => {
  switch (action.type) {
    case constants.WS_CONNECTION_OPENED: {
      return {
        ...state,
        wsConnected: true
      };
    }
    case constants.WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false
      };
    }
    case constants.WS_CONNECTION_CLOSED: {
      return feedInitialState;
    }
    case constants.WS_GET_MESSAGE: {
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
