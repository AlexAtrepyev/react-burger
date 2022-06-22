import {
  getIngredientsAction,
  getIngredientsSuccessAction,
  getIngredientsFailedAction,
  setCurrentTabAction
} from '../actions/ingredients';
import { ingredientsInitialState as state, ingredientsReducer as reducer } from './ingredients';

import { testIngredient } from '../../utils/constants';

describe('ingredients reducer', () => {
  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(
      reducer(state, getIngredientsAction())
    ).toEqual({
      ...state,
      getIngredientsRequest: true,
      getIngredientsFailed: false
    });
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(
      reducer(state, getIngredientsSuccessAction([testIngredient, testIngredient]))
    ).toEqual({
      ...state,
      getIngredientsRequest: false,
      ingredients: [testIngredient, testIngredient]
    });
  });

  it('should handle GET_INGREDIENTS_FAILED', () => {
    expect(
      reducer(state, getIngredientsFailedAction())
    ).toEqual({
      ...state,
      getIngredientsRequest: false,
      getIngredientsFailed: true
    });
  });

  it('should handle SET_CURRENT_TAB', () => {
    expect(
      reducer(state, setCurrentTabAction('sauce'))
    ).toEqual({
      ...state,
      currentTab: 'sauce'
    });
  });
});
