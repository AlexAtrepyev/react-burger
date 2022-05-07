import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  RESET_PASSWORD_STEP_ONE,
  RESET_PASSWORD_STEP_ONE_SUCCESS,
  RESET_PASSWORD_STEP_ONE_FAILED,
  RESET_PASSWORD_STEP_TWO,
  RESET_PASSWORD_STEP_TWO_SUCCESS,
  RESET_PASSWORD_STEP_TWO_FAILED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_NEW_TOKEN,
  GET_NEW_TOKEN_SUCCESS,
  GET_NEW_TOKEN_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED
} from '../../utils/constants';

const initialState = {
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

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        register: {
          request: true,
          failed: false
        }
      };
    }
    case REGISTER_SUCCESS: {
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
    case REGISTER_FAILED: {
      return {
        ...state,
        register: {
          request: false,
          failed: true
        }
      };
    }
    case RESET_PASSWORD_STEP_ONE: {
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
    case RESET_PASSWORD_STEP_ONE_SUCCESS: {
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
    case RESET_PASSWORD_STEP_ONE_FAILED: {
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
    case RESET_PASSWORD_STEP_TWO: {
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
    case RESET_PASSWORD_STEP_TWO_SUCCESS: {
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
    case RESET_PASSWORD_STEP_TWO_FAILED: {
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
    case LOGIN: {
      return {
        ...state,
        login: {
          request: true,
          failed: false
        }
      };
    }
    case LOGIN_SUCCESS: {
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
    case LOGIN_FAILED: {
      return {
        ...state,
        login: {
          request: false,
          failed: true
        }
      };
    }
    case GET_NEW_TOKEN: {
      return {
        ...state,
        getNewToken: {
          request: true,
          failed: false
        }
      };
    }
    case GET_NEW_TOKEN_SUCCESS: {
      return {
        ...state,
        getNewToken: {
          request: false,
          failed: false
        }
      };
    }
    case GET_NEW_TOKEN_FAILED: {
      return {
        ...state,
        getNewToken: {
          request: false,
          failed: true
        }
      };
    }
    case LOGOUT: {
      return {
        ...state,
        logout: {
          request: true,
          failed: false
        }
      };
    }
    case LOGOUT_SUCCESS: {
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
    case LOGOUT_FAILED: {
      return {
        ...state,
        logout: {
          request: false,
          failed: true
        }
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          getRequest: true,
          getFailed: false
        },
      };
    }
    case GET_USER_SUCCESS: {
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
    case GET_USER_FAILED: {
      return {
        ...state,
        user: {
          ...state.user,
          getRequest: false,
          getFailed: false
        },
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          updateRequest: true,
          updateFailed: false
        },
      };
    }
    case UPDATE_USER_SUCCESS: {
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
    case UPDATE_USER_FAILED: {
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
