import {
  WS_CONNECTION_START,
  WS_CONNECTION_STOP,
  WS_CONNECTION_OPENED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants';

import { TOrdersRes, TWsActions } from "../types/data";

export const wsActions: TWsActions = {
  wsStart: WS_CONNECTION_START,
  wsStop: WS_CONNECTION_STOP,
  onOpen: WS_CONNECTION_OPENED,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_MESSAGE
};

// Типизация экшенов
export interface IWsConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}
export interface IWsConnectionStopAction {
  readonly type: typeof WS_CONNECTION_STOP;
}
export interface IWsConnectionOpenedAction {
  readonly type: typeof WS_CONNECTION_OPENED;
}
export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;

}
export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: TOrdersRes;
}

// Объединяем в Union
export type TFeedActions =
  | IWsConnectionStartAction
  | IWsConnectionStopAction
  | IWsConnectionOpenedAction
  | IWsConnectionErrorAction
  | IWsConnectionClosedAction
  | IWsGetMessageAction;

// Генераторы экшенов
export const wsConnectionStartAction = (payload: string): IWsConnectionStartAction => ({
  type: WS_CONNECTION_START,
  payload
});
export const wsConnectionStopAction = (): IWsConnectionStopAction => ({
  type: WS_CONNECTION_STOP
});
export const wsConnectionOpenedAction = (): IWsConnectionOpenedAction => ({
  type: WS_CONNECTION_OPENED
});
export const wsConnectionErrorAction = (): IWsConnectionErrorAction => ({
  type: WS_CONNECTION_ERROR
});
export const wsConnectionClosedAction = (): IWsConnectionClosedAction => ({
  type: WS_CONNECTION_CLOSED
});
export const wsGetMessageAction = (payload: TOrdersRes): IWsGetMessageAction => ({
  type: WS_GET_MESSAGE,
  payload
});
