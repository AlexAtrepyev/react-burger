import type { TOrderActions } from '../actions/order';

import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_REQUEST_SUCCESS,
  CREATE_ORDER_REQUEST_FAILED
} from '../constants';

type TOrderState = {
  request: boolean,
  failed: boolean,
  number: any
}

const orderInitialState: TOrderState = {
  request: false,
  failed: false,
  number: null
}

export const orderReducer = (state = orderInitialState, action: TOrderActions): TOrderState => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        request: true,
        failed: false,
        number: null
      };
    }
    case CREATE_ORDER_REQUEST_SUCCESS: {
      return {
        ...state,
        request: false,
        number: action.number
      };
    }
    case CREATE_ORDER_REQUEST_FAILED: {
      return {
        ...state,
        request: false,
        failed: true
      };
    }
    default: {
      return state;
    }
  }
}
