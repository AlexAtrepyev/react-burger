import { AppThunk, AppDispatch } from '../../@types/redux';
import * as types from '../../@types/redux/burger';
import { TIngredient } from '../../@types/data';

import * as constants from '../../utils/constants/burger';
import api from '../../utils/api';
import { getCookie } from '../../utils/functions';

// Генераторы экшенов
export const addBunAction = (bun: TIngredient): types.IAddBunAction => ({
  type: constants.ADD_BUN,
  bun
});

export const addIngredientAction = (ingredient: TIngredient): types.IAddIngredientAction => ({
  type: constants.ADD_INGREDIENT,
  ingredient
});

export const updateIngredientAction = (newIngredients: TIngredient[]): types.IUpdateIngredientAction => ({
  type: constants.UPDATE_INGREDIENT,
  newIngredients
});

export const removeIngredientAction = (ingredient: TIngredient): types.IRemoveIngredientAction => ({
  type: constants.REMOVE_INGREDIENT,
  ingredient
});

export const createOrderAction = (): types.ICreateOrderRequestAction => ({
  type: constants.CREATE_ORDER_REQUEST
});

export const createOrderSuccessAction = (orderNumber: number): types.ICreateOrderSuccessAction => ({
  type: constants.CREATE_ORDER_SUCCESS,
  orderNumber
});

export const createOrderFailedAction = (): types.ICreateOrderFailedAction => ({
  type: constants.CREATE_ORDER_FAILED
});

export const toggleOrderModalAction = (): types.IToggleOrderModalAction => ({
  type: constants.TOGGLE_ORDER_MODAL
});

// Thunks
export const createOrderThunk: AppThunk = (ingredientIDs: string[]) => (dispatch: AppDispatch) => {
  dispatch(createOrderAction());
  if (!getCookie('accessToken')) {
    dispatch(createOrderFailedAction());
  } else {
    api.createOrder(ingredientIDs)
      .then(res => {
        if (res && res.success) {
          dispatch(createOrderSuccessAction(res.order.number));
        } else {
          dispatch(createOrderFailedAction());
        }
      })
      .catch(() => dispatch(createOrderFailedAction()));
  }
}
