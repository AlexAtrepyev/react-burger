import {
  WS_CONNECTION_START,
  WS_AUTH_CONNECTION_START,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants';

import { TOrdersRes, TWsActions } from "../types/data";

export const wsActions: TWsActions = {
  wsInit: WS_CONNECTION_START,
  wsAuthInit: WS_AUTH_CONNECTION_START,
  wsClose: WS_CONNECTION_CLOSE,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_MESSAGE
};

// Типизация экшенов
export interface IWsConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}
export interface IWsAuthConnectionStartAction {
  readonly type: typeof WS_AUTH_CONNECTION_START;
  readonly payload: string;
}
export interface IWsConnectionCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSE;
}
export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
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
  | IWsAuthConnectionStartAction
  | IWsConnectionCloseAction
  | IWsConnectionSuccessAction
  | IWsConnectionErrorAction
  | IWsConnectionClosedAction
  | IWsGetMessageAction;

// Генераторы экшенов
export const wsConnectionStartAction = (payload: string): IWsConnectionStartAction => ({
  type: WS_CONNECTION_START,
  payload
});
export const wsAuthConnectionStartAction = (payload: string): IWsAuthConnectionStartAction => ({
  type: WS_AUTH_CONNECTION_START,
  payload
});
export const wsConnectionCloseAction = (): IWsConnectionCloseAction => ({
  type: WS_CONNECTION_CLOSE
});
export const wsConnectionSuccessAction = (): IWsConnectionSuccessAction => ({
  type: WS_CONNECTION_SUCCESS
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
