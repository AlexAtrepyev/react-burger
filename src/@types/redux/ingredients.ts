import type { TIngredient } from '../../@types/data';

import * as constants from '../../utils/constants/ingredients';

// Типизация экшенов
export interface IGetIngredientsRequestAction {
  readonly type: typeof constants.GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof constants.GET_INGREDIENTS_SUCCESS;
  readonly ingredients: TIngredient[];
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof constants.GET_INGREDIENTS_FAILED;
}

export interface ISetCurrentTabAction {
  readonly type: typeof constants.SET_CURRENT_TAB;
  readonly currentTab: 'bun' | 'sauce' | 'main';
}

// Union типов экшенов
export type TIngredientsActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | ISetCurrentTabAction;

// Типизация стейта
export type TIngredientsState = {
  ingredients: TIngredient[],
  
  getIngredientsRequest: boolean,
  getIngredientsFailed: boolean,

  currentTab: 'bun' | 'sauce' | 'main'
}
