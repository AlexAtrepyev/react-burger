import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_REQUEST_SUCCESS,
  GET_INGREDIENTS_REQUEST_FAILED,
  ADD_BUN,
  ADD_INTER_INGREDIENT,
  UPDATE_INTER_INGREDIENT,
  REMOVE_INTER_INGREDIENT,
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT
} from '../constants';

import type { AppThunk, AppDispatch } from '../types';
import type { TIngredient } from '../types/data';

import api from '../api';

// Типизация экшенов
export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST_SUCCESS;
  readonly items: TIngredient[];
}
export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST_FAILED;
}

export interface IAddBunAction {
  readonly type: typeof ADD_BUN;
  readonly bun: TIngredient;
}

export interface IAddInterIngredientAction {
  readonly type: typeof ADD_INTER_INGREDIENT;
  readonly ingredient: TIngredient;
}
export interface IUpdateInterIngredientAction {
  readonly type: typeof UPDATE_INTER_INGREDIENT;
  readonly newInterItems: TIngredient[];
}
export interface IRemoveInterIngredientAction {
  readonly type: typeof REMOVE_INTER_INGREDIENT;
  readonly item: TIngredient;
}

export interface ISetCurrentIngredientAction {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly ingredient: TIngredient;
}
export interface IResetCurrentIngredientAction {
  readonly type: typeof RESET_CURRENT_INGREDIENT;
}

// Объединяем в Union
export type TBurgerActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IAddBunAction
  | IAddInterIngredientAction
  | IUpdateInterIngredientAction
  | IRemoveInterIngredientAction
  | ISetCurrentIngredientAction
  | IResetCurrentIngredientAction;

// Генераторы экшенов
export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: GET_INGREDIENTS_REQUEST
});
export const getIngredientsSuccessAction = (items: TIngredient[]): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_REQUEST_SUCCESS,
  items
});
export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_REQUEST_FAILED
});

export const addBunAction = (bun: TIngredient): IAddBunAction => ({
  type: ADD_BUN,
  bun
});

export const addInterIngredientAction = (ingredient: TIngredient): IAddInterIngredientAction => ({
  type: ADD_INTER_INGREDIENT,
  ingredient
});
export const updateInterIngredientAction = (newInterItems: TIngredient[]): IUpdateInterIngredientAction => ({
  type: UPDATE_INTER_INGREDIENT,
  newInterItems
});
export const removeInterIngredientAction = (item: TIngredient): IRemoveInterIngredientAction => ({
  type: REMOVE_INTER_INGREDIENT,
  item
});

export const setCurrentIngredientAction = (ingredient: TIngredient): ISetCurrentIngredientAction => ({
  type: SET_CURRENT_INGREDIENT,
  ingredient
});
export const resetCurrentIngredientAction = (): IResetCurrentIngredientAction => ({
  type: RESET_CURRENT_INGREDIENT
});

// Thunks
export const getIngredientsThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getIngredientsAction());
  api.getIngredients()
    .then(res => {
      if (res && res.success) {
        dispatch(getIngredientsSuccessAction(res.data));
      } else {
        dispatch(getIngredientsFailedAction());
      }
    })
    .catch(() => dispatch(getIngredientsFailedAction()));
}
