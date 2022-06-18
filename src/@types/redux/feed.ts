import { TOrdersRes, TOrder } from '../data';

import * as constants from '../../utils/constants/feed';

// Типизация экшенов
export interface IWsConnectionStartAction {
  readonly type: typeof constants.WS_CONNECTION_START;
  readonly payload: string;
}

export interface IWsConnectionStopAction {
  readonly type: typeof constants.WS_CONNECTION_STOP;
}

export interface IWsConnectionOpenedAction {
  readonly type: typeof constants.WS_CONNECTION_OPENED;
}

export interface IWsConnectionErrorAction {
  readonly type: typeof constants.WS_CONNECTION_ERROR;
}

export interface IWsConnectionClosedAction {
  readonly type: typeof constants.WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
  readonly type: typeof constants.WS_GET_MESSAGE;
  readonly payload: TOrdersRes;
}

// Union типов экшенов
export type TFeedActions =
  | IWsConnectionStartAction
  | IWsConnectionStopAction
  | IWsConnectionOpenedAction
  | IWsConnectionErrorAction
  | IWsConnectionClosedAction
  | IWsGetMessageAction;

// Типизация стейта
export type TFeedState = {
  wsConnected: boolean;
  orders: TOrder[];
  total: number;
  totalToday: number;
};

// Типизация WS
export type TWsActions = {
  wsStart: typeof constants.WS_CONNECTION_START;
  wsStop: typeof constants.WS_CONNECTION_STOP;
  onOpen: typeof constants.WS_CONNECTION_OPENED;
  onError: typeof constants.WS_CONNECTION_ERROR;
  onClose: typeof constants.WS_CONNECTION_CLOSED;
  onMessage: typeof constants.WS_GET_MESSAGE;
};
