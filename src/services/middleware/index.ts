import type { Middleware, MiddlewareAPI } from 'redux';

import {
  wsConnectionSuccessAction,
  wsConnectionErrorAction,
  wsConnectionClosedAction,
  wsGetMessageAction
} from '../actions/feed';
import { WS_CONNECTION_START } from '../constants';
import type { AppDispatch, RootState } from '../types';

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    
    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        socket = new WebSocket(payload);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch(wsConnectionSuccessAction());
        };
        socket.onerror = event => {
          dispatch(wsConnectionErrorAction());
        };
        socket.onclose = event => {
          socket?.close();
          dispatch(wsConnectionClosedAction());
        };
        socket.onmessage = event => {
          const parsedData = JSON.parse(event.data);
          parsedData && parsedData.success && dispatch(wsGetMessageAction(parsedData));
        };
      }
      next(action);
    };
  }) as Middleware;
};
