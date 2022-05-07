import {
  CREATE_ORDER,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS
} from '../../utils/constants';

const initialState = {
  request: false,
  failed: false,
  number: null
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER: {
      return {
        ...state,
        request: true,
        failed: false,
        number: null
      };
    }
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        request: false,
        number: action.number
      };
    }
    case CREATE_ORDER_FAILED: {
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
