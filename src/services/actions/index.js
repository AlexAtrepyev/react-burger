import api from '../../utils/api';
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  CREATE_ORDER,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS
} from '../../utils/constants';

export function getIngredients() {
  return function(dispatch) {
    dispatch({ type: GET_INGREDIENTS });
    api.getIngredients()
      .then(res => {
        if (res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data
          });
        } else {
          dispatch({ type: GET_INGREDIENTS_FAILED });
        }
      })
      .catch(err => dispatch({ type: GET_INGREDIENTS_FAILED }))
  }
}

export function createOrder(ingredientIDs) {
  return function(dispatch) {
    dispatch({ type: CREATE_ORDER });
    api.createOrder(ingredientIDs)
      .then(res => {
        if (res.success) {
          dispatch({
            type: CREATE_ORDER_SUCCESS,
            number: res.order.number
          });
        } else {
          dispatch({ type: CREATE_ORDER_FAILED });
        }
      })
      .catch(err => dispatch({ type: CREATE_ORDER_FAILED }))
  }
}
