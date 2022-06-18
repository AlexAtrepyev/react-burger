import type { TIngredient } from '../data';

import * as constants from '../../utils/constants/burger';

// Типизация экшенов
export interface IAddBunAction {
  readonly type: typeof constants.ADD_BUN;
  readonly bun: TIngredient;
}

export interface IAddIngredientAction {
  readonly type: typeof constants.ADD_INGREDIENT;
  readonly ingredient: TIngredient;
}

export interface IUpdateIngredientAction {
  readonly type: typeof constants.UPDATE_INGREDIENT;
  readonly newIngredients: TIngredient[];
}

export interface IRemoveIngredientAction {
  readonly type: typeof constants.REMOVE_INGREDIENT;
  readonly ingredient: TIngredient;
}

export interface ICreateOrderRequestAction {
  readonly type: typeof constants.CREATE_ORDER_REQUEST;
}

export interface ICreateOrderSuccessAction {
  readonly type: typeof constants.CREATE_ORDER_SUCCESS;
  readonly orderNumber: number;
}

export interface ICreateOrderFailedAction {
  readonly type: typeof constants.CREATE_ORDER_FAILED;
}

export interface IToggleOrderModalAction {
  readonly type: typeof constants.TOGGLE_ORDER_MODAL;
}

// Union типов экшенов
export type TBurgerActions =
  | IAddBunAction
  | IAddIngredientAction
  | IUpdateIngredientAction
  | IRemoveIngredientAction
  | ICreateOrderRequestAction
  | ICreateOrderSuccessAction
  | ICreateOrderFailedAction
  | IToggleOrderModalAction;

// Типизация стейта
export type TBurgerState = {
  bun: TIngredient | null,
  ingredients: TIngredient[],

  orderNumber: number | null,

  createOrderRequest: boolean,
  createOrderFailed: boolean,

  orderModal: boolean
}
