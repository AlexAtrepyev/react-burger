import { TAuthActions, TAuthState } from '../../@types/redux/auth';

import * as constants from '../../utils/constants/auth';

export const authInitialState: TAuthState = {
  isAuthChecked: false,
  user: null,

  getUserRequest: false,
  getUserFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,
  
  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  resetPasswordStepOneRequest: false,
  resetPasswordStepOneFailed: false,
  resetPasswordStepOneSuccess: false,

  resetPasswordStepTwoRequest: false,
  resetPasswordStepTwoFailed: false,
  resetPasswordStepTwoSuccess: false,
  
  logoutRequest: false,
  logoutFailed: false
}

export const authReducer = (state = authInitialState, action: TAuthActions): TAuthState => {
  switch (action.type) {
    case constants.GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false
      };
    }
    case constants.GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        user: action.user,
        isAuthChecked: true
      };
    }
    case constants.GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
        isAuthChecked: true
      };
    }
    case constants.UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false
      };
    }
    case constants.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        updateUserRequest: false,
        user: action.user
      };
    }
    case constants.UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: true
      };
    }
    case constants.REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false
      };
    }
    case constants.REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        user: action.user
      };
    }
    case constants.REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true
      };
    }
    case constants.LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false
      };
    }
    case constants.LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        user: action.user
      };
    }
    case constants.LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true
      };
    }
    case constants.RESET_PASSWORD_STEP_ONE_REQUEST: {
      return {
        ...state,
        resetPasswordStepOneRequest: true,
        resetPasswordStepOneFailed: false,
        resetPasswordStepOneSuccess: false,
        resetPasswordStepTwoSuccess: false
      };
    }
    case constants.RESET_PASSWORD_STEP_ONE_SUCCESS: {
      return {
        ...state,
        resetPasswordStepOneRequest: false,
        resetPasswordStepOneSuccess: true
      };
    }
    case constants.RESET_PASSWORD_STEP_ONE_FAILED: {
      return {
        ...state,
        resetPasswordStepOneRequest: false,
        resetPasswordStepOneFailed: true
      };
    }
    case constants.RESET_PASSWORD_STEP_TWO_REQUEST: {
      return {
        ...state,
        resetPasswordStepOneSuccess: false,
        resetPasswordStepTwoRequest: true,
        resetPasswordStepTwoFailed: false,
        resetPasswordStepTwoSuccess: false
      };
    }
    case constants.RESET_PASSWORD_STEP_TWO_SUCCESS: {
      return {
        ...state,
        resetPasswordStepTwoRequest: false,
        resetPasswordStepTwoSuccess: true
      };
    }
    case constants.RESET_PASSWORD_STEP_TWO_FAILED: {
      return {
        ...state,
        resetPasswordStepTwoRequest: false,
        resetPasswordStepTwoFailed: true
      };
    }
    case constants.LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false
      };
    }
    case constants.LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        user: null
      };
    }
    case constants.LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true
      };
    }
    default: {
      return state;
    }
  }
}
