import { AppThunk, AppDispatch } from '../../@types/redux';
import * as types from '../../@types/redux/ingredients';
import { TIngredient } from '../../@types/data';

import * as constants from '../../utils/constants/ingredients';
import api from '../../utils/api';

// Генераторы экшенов
export const getIngredientsAction = (): types.IGetIngredientsRequestAction => ({
  type: constants.GET_INGREDIENTS_REQUEST
});

export const getIngredientsSuccessAction = (ingredients: TIngredient[]): types.IGetIngredientsSuccessAction => ({
  type: constants.GET_INGREDIENTS_SUCCESS,
  ingredients
});

export const getIngredientsFailedAction = (): types.IGetIngredientsFailedAction => ({
  type: constants.GET_INGREDIENTS_FAILED
});

export const setCurrentTabAction = (currentTab: 'bun' | 'sauce' | 'main'): types.ISetCurrentTabAction => ({
  type: constants.SET_CURRENT_TAB,
  currentTab
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
