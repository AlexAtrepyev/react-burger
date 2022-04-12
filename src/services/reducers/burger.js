import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  ADD_BUN,
  ADD_INTER_INGREDIENT,
  UPDATE_INTER_INGREDIENT,
  REMOVE_INTER_INGREDIENT,
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT
} from '../../utils/constants';

const initialState = {
  ingredients: {
    request: false,
    failed: false,
    items: []
  },
  constructor: {
    bunItem: {},
    interItems: []
  },
  currentIngredient: {}
}

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          request: true,
          failed: false
        }
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          request: false,
          items: action.items.map(item => {
            return { ...item, count: 0 };
          })
        }
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          request: false,
          failed: true
        }
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        constructor: {
          ...state.constructor,
          bunItem: action.bun
        },
        ingredients: {
          ...state.ingredients,
          items: state.ingredients.items.map(item => {
            if (item.type === 'bun') {
              if (item._id === action.bun._id) {
                return { ...item, count: 2 };
              } else {
                return { ...item, count: 0 };
              }
            } else {
              return item;
            }
          })
        }
      };
    }
    case ADD_INTER_INGREDIENT: {
      return {
        ...state,
        constructor: {
          ...state.constructor,
          interItems: [ ...state.constructor.interItems, action.ingredient ]
        },
        ingredients: {
          ...state.ingredients,
          items: state.ingredients.items.map(item => {
            if (item._id === action.ingredient._id) {
              return { ...item, count: ++item.count };
            } else {
              return item;
            }
          })
        }
      };
    }
    case UPDATE_INTER_INGREDIENT: {
      return {
        ...state,
        constructor: {
          ...state.constructor,
          interItems: action.newInterItems
        }
      };
    }
    case REMOVE_INTER_INGREDIENT: {
      return {
        ...state,
        constructor: {
          ...state.constructor,
          interItems: state.constructor.interItems.filter(item => item.dragId !== action.item.dragId)
        },
        ingredients: {
          ...state.ingredients,
          items: state.ingredients.items.map(item => {
            if (item._id === action.item._id) {
              return { ...item, count: --item.count };
            } else {
              return item;
            }
          })
        }
      };
    }
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.ingredient
      };
    }
    case RESET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: {}
      };
    }
    default: {
      return state;
    }
  }
}
