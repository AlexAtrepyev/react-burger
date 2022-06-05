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

import type { AppThunk, AppDispatch } from '../types';
import type { TUser } from '../types/data';

import api from '../api';
import { setCookie, getCookie } from '../utils';

// Типизация экшенов
export interface IRegisterAction {
  readonly type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_REQUEST_SUCCESS;
  readonly user: TUser;
}
export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_REQUEST_FAILED;
}

export interface ILoginAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_REQUEST_SUCCESS;
  readonly user: TUser;
}
export interface ILoginFailedAction {
  readonly type: typeof LOGIN_REQUEST_FAILED;
}

export interface IResetPasswordStepOneAction {
  readonly type: typeof RESET_PASSWORD_STEP_ONE_REQUEST;
}
export interface IResetPasswordStepOneSuccessAction {
  readonly type: typeof RESET_PASSWORD_STEP_ONE_REQUEST_SUCCESS;
}
export interface IResetPasswordStepOneFailedAction {
  readonly type: typeof RESET_PASSWORD_STEP_ONE_REQUEST_FAILED;
}

export interface IResetPasswordStepTwoAction {
  readonly type: typeof RESET_PASSWORD_STEP_TWO_REQUEST;
}
export interface IResetPasswordStepTwoSuccessAction {
  readonly type: typeof RESET_PASSWORD_STEP_TWO_REQUEST_SUCCESS;
}
export interface IResetPasswordStepTwoFailedAction {
  readonly type: typeof RESET_PASSWORD_STEP_TWO_REQUEST_FAILED;
}

export interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_REQUEST_SUCCESS;
}
export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_REQUEST_FAILED;
}

export interface IGetNewTokenAction {
  readonly type: typeof GET_NEW_TOKEN_REQUEST;
}
export interface IGetNewTokenSuccessAction {
  readonly type: typeof GET_NEW_TOKEN_REQUEST_SUCCESS;
}
export interface IGetNewTokenFailedAction {
  readonly type: typeof GET_NEW_TOKEN_REQUEST_FAILED;
}

export interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_REQUEST_SUCCESS;
  readonly user: TUser;
}
export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_REQUEST_FAILED;
}

export interface IUpdateUserAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_REQUEST_SUCCESS;
  readonly user: TUser;
}
export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_REQUEST_FAILED;
}

// Объединяем в Union
export type TAuthActions =
  | IRegisterAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | IResetPasswordStepOneAction
  | IResetPasswordStepOneSuccessAction
  | IResetPasswordStepOneFailedAction
  | IResetPasswordStepTwoAction
  | IResetPasswordStepTwoSuccessAction
  | IResetPasswordStepTwoFailedAction
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IGetNewTokenAction
  | IGetNewTokenSuccessAction
  | IGetNewTokenFailedAction
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IUpdateUserAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailedAction;

// Генераторы экшенов
export const registerAction = (): IRegisterAction => ({
  type: REGISTER_REQUEST
});
export const registerSuccessAction = (user: TUser): IRegisterSuccessAction => ({
  type: REGISTER_REQUEST_SUCCESS,
  user
});
export const registerFailedAction = (): IRegisterFailedAction => ({
  type: REGISTER_REQUEST_FAILED
});

export const loginAction = (): ILoginAction => ({
  type: LOGIN_REQUEST
});
export const loginSuccessAction = (user: TUser): ILoginSuccessAction => ({
  type: LOGIN_REQUEST_SUCCESS,
  user
});
export const loginFailedAction = (): ILoginFailedAction => ({
  type: LOGIN_REQUEST_FAILED
});

export const resetPasswordStepOneAction = (): IResetPasswordStepOneAction => ({
  type: RESET_PASSWORD_STEP_ONE_REQUEST
});
export const resetPasswordStepOneSuccessAction = (): IResetPasswordStepOneSuccessAction => ({
  type: RESET_PASSWORD_STEP_ONE_REQUEST_SUCCESS
});
export const resetPasswordStepOneFailedAction = (): IResetPasswordStepOneFailedAction => ({
  type: RESET_PASSWORD_STEP_ONE_REQUEST_FAILED
});

export const resetPasswordStepTwoAction = (): IResetPasswordStepTwoAction => ({
  type: RESET_PASSWORD_STEP_TWO_REQUEST
});
export const resetPasswordStepTwoSuccessAction = (): IResetPasswordStepTwoSuccessAction => ({
  type: RESET_PASSWORD_STEP_TWO_REQUEST_SUCCESS
});
export const resetPasswordStepTwoFailedAction = (): IResetPasswordStepTwoFailedAction => ({
  type: RESET_PASSWORD_STEP_TWO_REQUEST_FAILED
});

export const logoutAction = (): ILogoutAction => ({
  type: LOGOUT_REQUEST
});
export const logoutSuccessAction = (): ILogoutSuccessAction => ({
  type: LOGOUT_REQUEST_SUCCESS
});
export const logoutFailedAction = (): ILogoutFailedAction => ({
  type: LOGOUT_REQUEST_FAILED
});

export const getNewTokenAction = (): IGetNewTokenAction => ({
  type: GET_NEW_TOKEN_REQUEST
});
export const getNewTokenSuccessAction = (): IGetNewTokenSuccessAction => ({
  type: GET_NEW_TOKEN_REQUEST_SUCCESS
});
export const getNewTokenFailedAction = (): IGetNewTokenFailedAction => ({
  type: GET_NEW_TOKEN_REQUEST_FAILED
});

export const getUserAction = (): IGetUserAction => ({
  type: GET_USER_REQUEST
});
export const getUserSuccessAction = (user: TUser): IGetUserSuccessAction => ({
  type: GET_USER_REQUEST_SUCCESS,
  user
});
export const getUserFailedAction = (): IGetUserFailedAction => ({
  type: GET_USER_REQUEST_FAILED
});

export const updateUserAction = (): IUpdateUserAction => ({
  type: UPDATE_USER_REQUEST
});
export const updateUserSuccessAction = (user: TUser): IUpdateUserSuccessAction => ({
  type: UPDATE_USER_REQUEST_SUCCESS,
  user
});
export const updateUserFailedAction = (): IUpdateUserFailedAction => ({
  type: UPDATE_USER_REQUEST_FAILED
});

// Thunks
export const registerThunk: AppThunk = (name: string, email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(registerAction());
  api.register(name, email, password)
    .then(res => {
      if (res && res.success) {
        dispatch(registerSuccessAction(res.user));
      } else {
        dispatch(registerFailedAction());
      }
    })
    .catch(() => dispatch(registerFailedAction()));
}

export const loginThunk: AppThunk = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(loginAction());
  api.login(email, password)
    .then(res => {
      if (res && res.success) {
        const accessToken = res.accessToken.split('Bearer ')[1];
        accessToken && setCookie('accessToken', accessToken);
        res.refreshToken && setCookie('refreshToken', res.refreshToken);
        dispatch(loginSuccessAction(res.user));
      } else {
        dispatch(loginFailedAction());
      }
    })
    .catch(() => dispatch(loginFailedAction()));
}

export const resetPasswordStepOneThunk: AppThunk = (email: string) => (dispatch: AppDispatch) => {
  dispatch(resetPasswordStepOneAction());
  api.resetPasswordStepOne(email)
    .then(res => {
      if (res && res.success) {
        dispatch(resetPasswordStepOneSuccessAction());
      } else {
        dispatch(resetPasswordStepOneFailedAction());
      }
    })
    .catch(() => dispatch(resetPasswordStepOneFailedAction()));
}

export const resetPasswordStepTwoThunk: AppThunk = (password: string, token: string) => (dispatch: AppDispatch) => {
  dispatch(resetPasswordStepTwoAction());
  api.resetPasswordStepTwo(password, token)
    .then(res => {
      if (res && res.success) {
        dispatch(resetPasswordStepTwoSuccessAction());
      } else {
        dispatch(resetPasswordStepTwoFailedAction());
      }
    })
    .catch(() => dispatch(resetPasswordStepTwoFailedAction()));
}

export const logoutThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(logoutAction());
  const refreshToken = getCookie('refreshToken');
  refreshToken && api.logout(refreshToken)
    .then(res => {
      if (res && res.success) {
        dispatch(logoutSuccessAction());
        setCookie('accessToken', '', { expires: -1 });
        setCookie('refreshToken', '', { expires: -1 });
      } else {
        dispatch(logoutFailedAction());
      }
    })
    .catch(() => dispatch(logoutFailedAction()));
}

export const getUserThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getUserAction());
  const accessToken = getCookie('accessToken');
  accessToken && api.getUser(accessToken)
    .then(res => {
      if (res && res.success) {
        dispatch(getUserSuccessAction(res.user));
      } else {
        dispatch(getUserFailedAction());
      }
    })
    .catch(() => {
      dispatch(getNewTokenAction());
      const refreshToken = getCookie('refreshToken');
      refreshToken && api.getNewToken(refreshToken)
        .then(res => {
          if (res && res.success) {
            const accessToken = res.accessToken.split('Bearer ')[1];
            accessToken && setCookie('accessToken', accessToken);
            res.refreshToken && setCookie('refreshToken', res.refreshToken);
            dispatch(getNewTokenSuccessAction());

            api.getUser(accessToken)
              .then(res => {
                if (res && res.success) {
                  dispatch(getUserSuccessAction(res.user));
                } else {
                  dispatch(getUserFailedAction());
                }
              })
              .catch(() => dispatch(getUserFailedAction()));
          } else {
            dispatch(getNewTokenFailedAction());
          }
        })
        .catch(() => {
          dispatch(getNewTokenFailedAction());
          dispatch(getUserFailedAction());
        });
    });
}

export const updateUserThunk: AppThunk = (name: string, email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(updateUserAction());
  const accessToken = getCookie('accessToken');
  accessToken && api.updateUser(accessToken, name, email, password)
    .then(res => {
      if (res && res.success) {
        dispatch(updateUserSuccessAction(res.user));
      } else {
        dispatch(updateUserFailedAction());
      }
    })
    .catch(() => {
      dispatch(getNewTokenAction());
      const refreshToken = getCookie('refreshToken');
      refreshToken && api.getNewToken(refreshToken)
        .then(res => {
          if (res && res.success) {
            const accessToken = res.accessToken.split('Bearer ')[1];
            accessToken && setCookie('accessToken', accessToken);
            res.refreshToken && setCookie('refreshToken', res.refreshToken);
            dispatch(getNewTokenSuccessAction());

            api.updateUser(accessToken, name, email, password)
              .then(res => {
                if (res && res.success) {
                  dispatch(updateUserSuccessAction(res.user));
                } else {
                  dispatch(updateUserFailedAction());
                }
              })
              .catch(() => dispatch(updateUserFailedAction()));
          } else {
            dispatch(getNewTokenFailedAction());
          }
        })
        .catch(() => {
          dispatch(getNewTokenFailedAction());
          dispatch(updateUserFailedAction());
        });
    });
}
