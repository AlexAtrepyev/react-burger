import {
  addBunAction,
  addIngredientAction,
  updateIngredientAction,
  removeIngredientAction,
  createOrderAction,
  createOrderSuccessAction,
  createOrderFailedAction,
  toggleOrderModalAction
} from '../actions/burger';
import { burgerInitialState as state, burgerReducer as reducer } from './burger';

import { testIngredient } from '../../utils/constants';

describe('burger reducer', () => {
  it('should handle ADD_BUN', () => {
    expect(
      reducer(state, addBunAction(testIngredient))
    ).toEqual({
      ...state,
      bun: testIngredient
    });
  });

  it('should handle ADD_INGREDIENT', () => {
    expect(
      reducer(state, addIngredientAction(testIngredient))
    ).toEqual({
      ...state,
      ingredients: [ ...state.ingredients, testIngredient ]
    });
  });

  it('should handle UPDATE_INGREDIENT', () => {
    expect(
      reducer(state, updateIngredientAction([testIngredient, testIngredient]))
    ).toEqual({
      ...state,
      ingredients: [testIngredient, testIngredient]
    });
  });

  it('should handle REMOVE_INGREDIENT', () => {
    expect(
      reducer(state, removeIngredientAction(testIngredient))
    ).toEqual({
      ...state,
      ingredients: state.ingredients.filter(ingredient => ingredient.dragId !== testIngredient.dragId)
    });
  });

  it('should handle CREATE_ORDER_REQUEST', () => {
    expect(
      reducer(state, createOrderAction())
    ).toEqual({
      ...state,
      orderNumber: null,
      createOrderRequest: true,
      createOrderFailed: false
    });
  });

  it('should handle CREATE_ORDER_SUCCESS', () => {
    expect(
      reducer(state, createOrderSuccessAction(0))
    ).toEqual({
      ...state,
      orderNumber: 0,
      createOrderRequest: false
    });
  });

  it('should handle CREATE_ORDER_FAILED', () => {
    expect(
      reducer(state, createOrderFailedAction())
    ).toEqual({
      ...state,
      createOrderRequest: false,
      createOrderFailed: true
    });
  });

  it('should handle TOGGLE_ORDER_MODAL', () => {
    expect(
      reducer(state, toggleOrderModalAction())
    ).toEqual({
      ...state,
      orderModal: !state.orderModal
    });
  });
});
