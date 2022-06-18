import { AppThunk, AppDispatch } from '../../@types/redux';
import * as types from '../../@types/redux/auth';
import { TUser } from '../../@types/data';

import * as constants from '../../utils/constants/auth';
import api from '../../utils/api';
import { setCookie, getCookie } from '../../utils/functions';

// Генераторы экшенов
export const getUserAction = (): types.IGetUserRequestAction => ({
  type: constants.GET_USER_REQUEST
});

export const getUserSuccessAction = (user: TUser): types.IGetUserSuccessAction => ({
  type: constants.GET_USER_SUCCESS,
  user
});

export const getUserFailedAction = (): types.IGetUserFailedAction => ({
  type: constants.GET_USER_FAILED
});

export const updateUserAction = (): types.IUpdateUserRequestAction => ({
  type: constants.UPDATE_USER_REQUEST
});

export const updateUserSuccessAction = (user: TUser): types.IUpdateUserSuccessAction => ({
  type: constants.UPDATE_USER_SUCCESS,
  user
});

export const updateUserFailedAction = (): types.IUpdateUserFailedAction => ({
  type: constants.UPDATE_USER_FAILED
});

export const registerAction = (): types.IRegisterRequestAction => ({
  type: constants.REGISTER_REQUEST
});

export const registerSuccessAction = (user: TUser): types.IRegisterSuccessAction => ({
  type: constants.REGISTER_SUCCESS,
  user
});

export const registerFailedAction = (): types.IRegisterFailedAction => ({
  type: constants.REGISTER_FAILED
});

export const loginAction = (): types.ILoginRequestAction => ({
  type: constants.LOGIN_REQUEST
});

export const loginSuccessAction = (user: TUser): types.ILoginSuccessAction => ({
  type: constants.LOGIN_SUCCESS,
  user
});

export const loginFailedAction = (): types.ILoginFailedAction => ({
  type: constants.LOGIN_FAILED
});

export const resetPasswordStepOneAction = (): types.IResetPasswordStepOneRequestAction => ({
  type: constants.RESET_PASSWORD_STEP_ONE_REQUEST
});

export const resetPasswordStepOneSuccessAction = (): types.IResetPasswordStepOneSuccessAction => ({
  type: constants.RESET_PASSWORD_STEP_ONE_SUCCESS
});

export const resetPasswordStepOneFailedAction = (): types.IResetPasswordStepOneFailedAction => ({
  type: constants.RESET_PASSWORD_STEP_ONE_FAILED
});

export const resetPasswordStepTwoAction = (): types.IResetPasswordStepTwoRequestAction => ({
  type: constants.RESET_PASSWORD_STEP_TWO_REQUEST
});

export const resetPasswordStepTwoSuccessAction = (): types.IResetPasswordStepTwoSuccessAction => ({
  type: constants.RESET_PASSWORD_STEP_TWO_SUCCESS
});

export const resetPasswordStepTwoFailedAction = (): types.IResetPasswordStepTwoFailedAction => ({
  type: constants.RESET_PASSWORD_STEP_TWO_FAILED
});

export const getNewTokenAction = (): types.IRefreshTokenRequestAction => ({
  type: constants.REFRESH_TOKEN_REQUEST
});

export const getNewTokenSuccessAction = (): types.IRefreshTokenSuccessAction => ({
  type: constants.REFRESH_TOKEN_SUCCESS
});

export const getNewTokenFailedAction = (): types.IRefreshTokenFailedAction => ({
  type: constants.REFRESH_TOKEN_FAILED
});

export const logoutAction = (): types.ILogoutRequestAction => ({
  type: constants.LOGOUT_REQUEST
});

export const logoutSuccessAction = (): types.ILogoutSuccessAction => ({
  type: constants.LOGOUT_SUCCESS
});

export const logoutFailedAction = (): types.ILogoutFailedAction => ({
  type: constants.LOGOUT_FAILED
});

// Thunks
export const getUserThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getUserAction());
  const accessToken = getCookie('accessToken');
  api.getUser(accessToken)
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
      api.refreshToken(refreshToken)
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
  api.updateUser(name, email, password, accessToken)
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
      api.refreshToken(refreshToken)
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
  api.logout(refreshToken)
    .then(res => {
      if (res && res.success) {
        setCookie('accessToken', '', { expires: -1 });
        setCookie('refreshToken', '', { expires: -1 });
        dispatch(logoutSuccessAction());
      } else {
        dispatch(logoutFailedAction());
      }
    })
    .catch(() => dispatch(logoutFailedAction()));
}
