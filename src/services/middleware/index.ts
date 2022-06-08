import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../types';
import { TWsActions } from "../types/data";

export const socketMiddleware = (wsActions: TWsActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    
    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, wsStop, onOpen, onError, onClose, onMessage } = wsActions;

      if (type === wsStart) {
        socket = new WebSocket(payload);
      }
      if (socket) {
        if (type === wsStop) {
          socket.close();
        }
        
        socket.onopen = () => {
          dispatch({ type: onOpen });
        }

        socket.onerror = () => {
          dispatch({ type: onError });
        }

        socket.onclose = () => {
          dispatch({ type: onClose });
        }

        socket.onmessage = event => {
          const parsedData = JSON.parse(event.data);
          parsedData && parsedData.success && dispatch({ type: onMessage, payload: parsedData });
        };
      }
      next(action);
    };
  }) as Middleware;
};
