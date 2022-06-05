import {
  TOGGLE_INGREDIENT_MODAL,
  TOGGLE_ORDER_MODAL,
  SET_CURRENT_TAB
} from '../constants';

// Типизация экшенов
export interface IToggleIngredientModalAction {
  readonly type: typeof TOGGLE_INGREDIENT_MODAL;
}
export interface IToggleOrderModalAction {
  readonly type: typeof TOGGLE_ORDER_MODAL;
}
export interface ISetCurrentTabAction {
  readonly type: typeof SET_CURRENT_TAB;
  readonly currentTab: 'bun' | 'sauce' | 'main';
}

// Объединяем в Union
export type TUIActions =
  | IToggleIngredientModalAction
  | IToggleOrderModalAction
  | ISetCurrentTabAction;

// Генераторы экшенов
export const toggleIngredientModalAction = (): IToggleIngredientModalAction => ({
  type: TOGGLE_INGREDIENT_MODAL
});
export const toggleOrderModalAction = (): IToggleOrderModalAction => ({
  type: TOGGLE_ORDER_MODAL
});
export const setCurrentTabAction = (currentTab: 'bun' | 'sauce' | 'main'): ISetCurrentTabAction => ({
  type: SET_CURRENT_TAB,
  currentTab
});
