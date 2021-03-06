import { TUser } from '../data';

import * as constants from '../../utils/constants/auth';

// Типизация экшенов
export interface IGetUserRequestAction {
  readonly type: typeof constants.GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
  readonly type: typeof constants.GET_USER_SUCCESS;
  readonly user: TUser;
}

export interface IGetUserFailedAction {
  readonly type: typeof constants.GET_USER_FAILED;
}

export interface IUpdateUserRequestAction {
  readonly type: typeof constants.UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccessAction {
  readonly type: typeof constants.UPDATE_USER_SUCCESS;
  readonly user: TUser;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof constants.UPDATE_USER_FAILED;
}

export interface IRegisterRequestAction {
  readonly type: typeof constants.REGISTER_REQUEST;
}

export interface IRegisterSuccessAction {
  readonly type: typeof constants.REGISTER_SUCCESS;
  readonly user: TUser;
}

export interface IRegisterFailedAction {
  readonly type: typeof constants.REGISTER_FAILED;
}

export interface ILoginRequestAction {
  readonly type: typeof constants.LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
  readonly type: typeof constants.LOGIN_SUCCESS;
  readonly user: TUser;
}

export interface ILoginFailedAction {
  readonly type: typeof constants.LOGIN_FAILED;
}

export interface IResetPasswordStepOneRequestAction {
  readonly type: typeof constants.RESET_PASSWORD_STEP_ONE_REQUEST;
}

export interface IResetPasswordStepOneSuccessAction {
  readonly type: typeof constants.RESET_PASSWORD_STEP_ONE_SUCCESS;
}

export interface IResetPasswordStepOneFailedAction {
  readonly type: typeof constants.RESET_PASSWORD_STEP_ONE_FAILED;
}

export interface IResetPasswordStepTwoRequestAction {
  readonly type: typeof constants.RESET_PASSWORD_STEP_TWO_REQUEST;
}

export interface IResetPasswordStepTwoSuccessAction {
  readonly type: typeof constants.RESET_PASSWORD_STEP_TWO_SUCCESS;
}

export interface IResetPasswordStepTwoFailedAction {
  readonly type: typeof constants.RESET_PASSWORD_STEP_TWO_FAILED;
}

export interface ILogoutRequestAction {
  readonly type: typeof constants.LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
  readonly type: typeof constants.LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
  readonly type: typeof constants.LOGOUT_FAILED;
}

// Union типов экшенов
export type TAuthActions =
  | IGetUserRequestAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailedAction
  | IRegisterRequestAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | IResetPasswordStepOneRequestAction
  | IResetPasswordStepOneSuccessAction
  | IResetPasswordStepOneFailedAction
  | IResetPasswordStepTwoRequestAction
  | IResetPasswordStepTwoSuccessAction
  | IResetPasswordStepTwoFailedAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutFailedAction;

// Типизация стейта
export type TAuthState = {
  isAuthChecked: boolean,
  user: TUser | null,
  
  getUserRequest: boolean,
  getUserFailed: boolean,
  
  updateUserRequest: boolean,
  updateUserFailed: boolean,
  
  registerRequest: boolean,
  registerFailed: boolean,
  
  loginRequest: boolean,
  loginFailed: boolean,
  
  resetPasswordStepOneRequest: boolean,
  resetPasswordStepOneFailed: boolean,
  resetPasswordStepOneSuccess: boolean,
  
  resetPasswordStepTwoRequest: boolean,
  resetPasswordStepTwoFailed: boolean,
  resetPasswordStepTwoSuccess: boolean,
  
  logoutRequest: boolean,
  logoutFailed: boolean
}
