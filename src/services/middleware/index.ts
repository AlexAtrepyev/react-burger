import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../types';
import { TWsActions } from "../types/data";
import { getCookie } from "../utils";

export const socketMiddleware = (wsUrl: string, wsActions: TWsActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    
    return next => action => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, wsAuthInit, wsClose, onOpen, onError, onClose, onMessage } = wsActions;
      const accessToken = getCookie('accessToken');

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (type === wsAuthInit) {
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      }
      if (socket) {
        if (type === wsClose) {
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
