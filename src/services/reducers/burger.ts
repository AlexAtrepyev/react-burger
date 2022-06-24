import { TBurgerActions, TBurgerState } from '../../@types/redux/burger';

import * as constants from '../../utils/constants/burger';

export const burgerInitialState: TBurgerState = {
  bun: null,
  ingredients: [],

  orderNumber: null,

  createOrderRequest: false,
  createOrderFailed: false,

  orderModal: false
}

export const burgerReducer = (state = burgerInitialState, action: TBurgerActions): TBurgerState => {
  switch (action.type) {
    case constants.ADD_BUN: {
      return {
        ...state,
        bun: action.bun
      };
    }
    case constants.ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [ ...state.ingredients, action.ingredient ]
      };
    }
    case constants.UPDATE_INGREDIENT: {
      return {
        ...state,
        ingredients: action.newIngredients
      };
    }
    case constants.REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.filter(ingredient => ingredient.dragId !== action.ingredient.dragId)
      };
    }
    case constants.CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderNumber: null,
        createOrderRequest: true,
        createOrderFailed: false
      };
    }
    case constants.CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.orderNumber,
        createOrderRequest: false
      };
    }
    case constants.CREATE_ORDER_FAILED: {
      return {
        ...state,
        createOrderRequest: false,
        createOrderFailed: true
      };
    }
    case constants.TOGGLE_ORDER_MODAL: {
      return {
        ...state,
        orderModal: !state.orderModal
      };
    }
    default: {
      return state;
    }
  }
}
