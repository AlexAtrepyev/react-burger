import type { TAuthActions } from '../actions/auth';

import {
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAILED,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  RESET_PASSWORD_STEP_ONE_REQUEST,
  RESET_PASSWORD_STEP_ONE_REQUEST_SUCCESS,
  RESET_PASSWORD_STEP_ONE_REQUEST_FAILED,
  RESET_PASSWORD_STEP_TWO_REQUEST,
  RESET_PASSWORD_STEP_TWO_REQUEST_SUCCESS,
  RESET_PASSWORD_STEP_TWO_REQUEST_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILED,
  GET_NEW_TOKEN_REQUEST,
  GET_NEW_TOKEN_REQUEST_SUCCESS,
  GET_NEW_TOKEN_REQUEST_FAILED,
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_REQUEST_SUCCESS,
  UPDATE_USER_REQUEST_FAILED
} from '../constants';

type TAuthState = {
  register: {
    request: boolean,
    failed: boolean
  },
  resetPassword: {
    stepOne: {
      request: boolean,
      failed: boolean,
      success: boolean
    },
    stepTwo: {
      request: boolean,
      failed: boolean,
      success: boolean
    }
  },
  login: {
    request: boolean,
    failed: boolean
  },
  getNewToken: {
    request: boolean,
    failed: boolean
  },
  logout: {
    request: boolean,
    failed: boolean
  },
  user: {
    getRequest: boolean,
    getFailed: boolean,
    updateRequest: boolean,
    updateFailed: boolean,
    name: string,
    email: string
  }
}

const authInitialState: TAuthState = {
  register: {
    request: false,
    failed: false
  },
  resetPassword: {
    stepOne: {
      request: false,
      failed: false,
      success: false
    },
    stepTwo: {
      request: false,
      failed: false,
      success: false
    }
  },
  login: {
    request: false,
    failed: false
  },
  getNewToken: {
    request: false,
    failed: false
  },
  logout: {
    request: false,
    failed: false
  },
  user: {
    getRequest: false,
    getFailed: false,
    updateRequest: false,
    updateFailed: false,
    name: '',
    email: ''
  }
}

export const authReducer = (state = authInitialState, action: TAuthActions): TAuthState => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        register: {
          request: true,
          failed: false
        }
      };
    }
    case REGISTER_REQUEST_SUCCESS: {
      return {
        ...state,
        register: {
          request: false,
          failed: false
        },
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email
        }
      };
    }
    case REGISTER_REQUEST_FAILED: {
      return {
        ...state,
        register: {
          request: false,
          failed: true
        }
      };
    }
    case RESET_PASSWORD_STEP_ONE_REQUEST: {
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          stepOne: {
            request: true,
            failed: false,
            success: false
          },
          stepTwo: {
            ...state.resetPassword.stepTwo,
            success: false
          }
        }
      };
    }
    case RESET_PASSWORD_STEP_ONE_REQUEST_SUCCESS: {
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          stepOne: {
            request: false,
            failed: false,
            success: true
          }
        }
      };
    }
    case RESET_PASSWORD_STEP_ONE_REQUEST_FAILED: {
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          stepOne: {
            request: false,
            failed: true,
            success: false
          }
        }
      };
    }
    case RESET_PASSWORD_STEP_TWO_REQUEST: {
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          stepOne: {
            ...state.resetPassword.stepOne,
            success: false
          },
          stepTwo: {
            request: true,
            failed: false,
            success: false
          }
        }
      };
    }
    case RESET_PASSWORD_STEP_TWO_REQUEST_SUCCESS: {
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          stepTwo: {
            request: false,
            failed: false,
            success: true
          }
        }
      };
    }
    case RESET_PASSWORD_STEP_TWO_REQUEST_FAILED: {
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          stepTwo: {
            request: false,
            failed: true,
            success: false
          }
        }
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        login: {
          request: true,
          failed: false
        }
      };
    }
    case LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        login: {
          request: false,
          failed: false
        },
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email
        }
      };
    }
    case LOGIN_REQUEST_FAILED: {
      return {
        ...state,
        login: {
          request: false,
          failed: true
        }
      };
    }
    case GET_NEW_TOKEN_REQUEST: {
      return {
        ...state,
        getNewToken: {
          request: true,
          failed: false
        }
      };
    }
    case GET_NEW_TOKEN_REQUEST_SUCCESS: {
      return {
        ...state,
        getNewToken: {
          request: false,
          failed: false
        }
      };
    }
    case GET_NEW_TOKEN_REQUEST_FAILED: {
      return {
        ...state,
        getNewToken: {
          request: false,
          failed: true
        }
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logout: {
          request: true,
          failed: false
        }
      };
    }
    case LOGOUT_REQUEST_SUCCESS: {
      return {
        ...state,
        logout: {
          request: false,
          failed: false
        },
        user: {
          ...state.user,
          name: '',
          email: ''
        }
      };
    }
    case LOGOUT_REQUEST_FAILED: {
      return {
        ...state,
        logout: {
          request: false,
          failed: true
        }
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        user: {
          ...state.user,
          getRequest: true,
          getFailed: false
        },
      };
    }
    case GET_USER_REQUEST_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          getRequest: false,
          name: action.user.name,
          email: action.user.email
        },
      };
    }
    case GET_USER_REQUEST_FAILED: {
      return {
        ...state,
        user: {
          ...state.user,
          getRequest: false,
          getFailed: false
        },
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        user: {
          ...state.user,
          updateRequest: true,
          updateFailed: false
        },
      };
    }
    case UPDATE_USER_REQUEST_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          updateRequest: false,
          name: action.user.name,
          email: action.user.email
        },
      };
    }
    case UPDATE_USER_REQUEST_FAILED: {
      return {
        ...state,
        user: {
          ...state.user,
          updateRequest: false,
          updateFailed: false
        },
      };
    }
    default: {
      return state;
    }
  }
}
