import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_REQUEST_SUCCESS,
  CREATE_ORDER_REQUEST_FAILED
} from '../constants';

import type { AppThunk, AppDispatch } from '../types';

import api from '../api';
import { getCookie } from '../utils';

// Типизация экшенов
export interface ICreateOrderAction {
  readonly type: typeof CREATE_ORDER_REQUEST;
}
export interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_REQUEST_SUCCESS;
  readonly number: number;
}
export interface ICreateOrderFailedAction {
  readonly type: typeof CREATE_ORDER_REQUEST_FAILED;
}

// Объединяем в Union
export type TOrderActions =
  | ICreateOrderAction
  | ICreateOrderSuccessAction
  | ICreateOrderFailedAction;

// Генераторы экшенов
export const createOrderAction = (): ICreateOrderAction => ({
  type: CREATE_ORDER_REQUEST
});
export const createOrderSuccessAction = (number: number): ICreateOrderSuccessAction => ({
  type: CREATE_ORDER_REQUEST_SUCCESS,
  number
});
export const createOrderFailedAction = (): ICreateOrderFailedAction => ({
  type: CREATE_ORDER_REQUEST_FAILED
});

// Thunks
export const createOrderThunk: AppThunk = (ingredientIDs: string[]) => (dispatch: AppDispatch) => {
  dispatch(createOrderAction());
  const accessToken = getCookie('accessToken');
  accessToken && api.createOrder(ingredientIDs, accessToken)
    .then(res => {
      if (res && res.success) {
        dispatch(createOrderSuccessAction(res.order.number));
      } else {
        dispatch(createOrderFailedAction());
      }
    })
    .catch(() => dispatch(createOrderFailedAction()));
}
