import * as types from '../../@types/redux/feed';
import { TOrdersRes } from '../../@types/data';

import * as constants from '../../utils/constants/feed';

// Генераторы экшенов
export const wsConnectionStartAction = (payload: string): types.IWsConnectionStartAction => ({
  type: constants.WS_CONNECTION_START,
  payload
});

export const wsConnectionStopAction = (): types.IWsConnectionStopAction => ({
  type: constants.WS_CONNECTION_STOP
});

export const wsConnectionOpenedAction = (): types.IWsConnectionOpenedAction => ({
  type: constants.WS_CONNECTION_OPENED
});

export const wsConnectionErrorAction = (): types.IWsConnectionErrorAction => ({
  type: constants.WS_CONNECTION_ERROR
});

export const wsConnectionClosedAction = (): types.IWsConnectionClosedAction => ({
  type: constants.WS_CONNECTION_CLOSED
});

export const wsGetMessageAction = (payload: TOrdersRes): types.IWsGetMessageAction => ({
  type: constants.WS_GET_MESSAGE,
  payload
});

// WS
export const wsActions: types.TWsActions = {
  wsStart: constants.WS_CONNECTION_START,
  wsStop: constants.WS_CONNECTION_STOP,
  onOpen: constants.WS_CONNECTION_OPENED,
  onError: constants.WS_CONNECTION_ERROR,
  onClose: constants.WS_CONNECTION_CLOSED,
  onMessage: constants.WS_GET_MESSAGE
};
