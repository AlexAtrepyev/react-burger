import {
  TOGGLE_INGREDIENT_MODAL,
  TOGGLE_ORDER_MODAL,
  SET_CURRENT_TAB
} from '../../utils/constants';

const initialState = {
  ingredientModal: false,
  orderModal: false,
  currentTab: 'bun'
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INGREDIENT_MODAL: {
      return {
        ...state,
        ingredientModal: !state.ingredientModal
      };
    }
    case TOGGLE_ORDER_MODAL: {
      return {
        ...state,
        orderModal: !state.orderModal
      };
    }
    case SET_CURRENT_TAB: {
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
