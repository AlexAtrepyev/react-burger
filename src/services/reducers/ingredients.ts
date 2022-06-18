import { TIngredientsActions, TIngredientsState } from '../../@types/redux/ingredients';

import * as constants from '../../utils/constants/ingredients';

const ingredientsInitialState: TIngredientsState = {
  ingredients: [],
  
  getIngredientsRequest: false,
  getIngredientsFailed: false,

  currentTab: 'bun'
}

export const ingredientsReducer = (state = ingredientsInitialState, action: TIngredientsActions): TIngredientsState => {
  switch (action.type) {
    case constants.GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        getIngredientsRequest: true,
        getIngredientsFailed: false
      };
    }
    case constants.GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        getIngredientsRequest: false,
        ingredients: action.ingredients
      };
    }
    case constants.GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        getIngredientsRequest: false,
        getIngredientsFailed: true
      };
    }
    case constants.SET_CURRENT_TAB: {
      return {
        ...state,
        currentTab: action.currentTab
      };
    }
    default: {
      return state;
    }
  }
}
