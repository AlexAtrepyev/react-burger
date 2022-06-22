import {
  wsConnectionOpenedAction,
  wsConnectionErrorAction,
  wsConnectionClosedAction,
  wsGetMessageAction
} from '../actions/feed';
import { feedInitialState as state, feedReducer as reducer } from './feed';

import { testOrdersRes } from '../../utils/constants';

describe('feed reducer', () => {
  it('should handle WS_CONNECTION_OPENED', () => {
    expect(
      reducer(state, wsConnectionOpenedAction())
    ).toEqual({
      ...state,
      wsConnected: true
    });
  });

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(
      reducer(state, wsConnectionErrorAction())
    ).toEqual({
      ...state,
      wsConnected: false
    });
  });

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(
      reducer(state, wsConnectionClosedAction())
    ).toEqual(
      state
    );
  });

  it('should handle WS_GET_MESSAGE', () => {
    expect(
      reducer(state, wsGetMessageAction(testOrdersRes))
    ).toEqual({
      ...state,
      orders: testOrdersRes.orders,
      total: testOrdersRes.total,
      totalToday: testOrdersRes.totalToday
    });
  });
});
