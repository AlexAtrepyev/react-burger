import {
  getUserAction,
  getUserSuccessAction,
  getUserFailedAction,
  updateUserAction,
  updateUserSuccessAction,
  updateUserFailedAction,
  registerAction,
  registerSuccessAction,
  registerFailedAction,
  loginAction,
  loginSuccessAction,
  loginFailedAction,
  resetPasswordStepOneAction,
  resetPasswordStepOneSuccessAction,
  resetPasswordStepOneFailedAction,
  resetPasswordStepTwoAction,
  resetPasswordStepTwoSuccessAction,
  resetPasswordStepTwoFailedAction,
  logoutAction,
  logoutSuccessAction,
  logoutFailedAction
} from '../actions/auth';
import { authInitialState as state, authReducer as reducer } from './auth';

describe('auth reducer', () => {
  it('should handle GET_USER_REQUEST', () => {
    expect(
      reducer(state, getUserAction())
    ).toEqual({
      ...state,
      getUserRequest: true,
      getUserFailed: false
    });
  });

  it('should handle GET_USER_SUCCESS', () => {
    expect(
      reducer(state, getUserSuccessAction({ name: 'Test name', email: 'Test email' }))
    ).toEqual({
      ...state,
      getUserRequest: false,
      user: { name: 'Test name', email: 'Test email' },
      isAuthChecked: true
    });
  });

  it('should handle GET_USER_FAILED', () => {
    expect(
      reducer(state, getUserFailedAction())
    ).toEqual({
      ...state,
      getUserRequest: false,
      getUserFailed: true,
      isAuthChecked: true
    });
  });

  it('should handle UPDATE_USER_REQUEST', () => {
    expect(
      reducer(state, updateUserAction())
    ).toEqual({
      ...state,
      updateUserRequest: true,
      updateUserFailed: false
    });
  });

  it('should handle UPDATE_USER_SUCCESS', () => {
    expect(
      reducer(state, updateUserSuccessAction({ name: 'Test name', email: 'Test email' }))
    ).toEqual({
      ...state,
      updateUserRequest: false,
      user: { name: 'Test name', email: 'Test email' }
    });
  });

  it('should handle UPDATE_USER_FAILED', () => {
    expect(
      reducer(state, updateUserFailedAction())
    ).toEqual({
      ...state,
      updateUserRequest: false,
      updateUserFailed: true
    });
  });

  it('should handle REGISTER_REQUEST', () => {
    expect(
      reducer(state, registerAction())
    ).toEqual({
      ...state,
      registerRequest: true,
      registerFailed: false
    });
  });

  it('should handle REGISTER_SUCCESS', () => {
    expect(
      reducer(state, registerSuccessAction({ name: 'Test name', email: 'Test email' }))
    ).toEqual({
      ...state,
      registerRequest: false,
      user: { name: 'Test name', email: 'Test email' }
    });
  });

  it('should handle REGISTER_FAILED', () => {
    expect(
      reducer(state, registerFailedAction())
    ).toEqual({
      ...state,
      registerRequest: false,
      registerFailed: true
    });
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(
      reducer(state, loginAction())
    ).toEqual({
      ...state,
      loginRequest: true,
      loginFailed: false
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(state, loginSuccessAction({ name: 'Test name', email: 'Test email' }))
    ).toEqual({
      ...state,
      loginRequest: false,
      user: { name: 'Test name', email: 'Test email' }
    });
  });

  it('should handle LOGIN_FAILED', () => {
    expect(
      reducer(state, loginFailedAction())
    ).toEqual({
      ...state,
      loginRequest: false,
      loginFailed: true
    });
  });

  it('should handle RESET_PASSWORD_STEP_ONE_REQUEST', () => {
    expect(
      reducer(state, resetPasswordStepOneAction())
    ).toEqual({
      ...state,
      resetPasswordStepOneRequest: true,
      resetPasswordStepOneFailed: false,
      resetPasswordStepOneSuccess: false,
      resetPasswordStepTwoSuccess: false
    });
  });

  it('should handle RESET_PASSWORD_STEP_ONE_SUCCESS', () => {
    expect(
      reducer(state, resetPasswordStepOneSuccessAction())
    ).toEqual({
      ...state,
      resetPasswordStepOneRequest: false,
      resetPasswordStepOneSuccess: true
    });
  });

  it('should handle RESET_PASSWORD_STEP_ONE_FAILED', () => {
    expect(
      reducer(state, resetPasswordStepOneFailedAction())
    ).toEqual({
      ...state,
      resetPasswordStepOneRequest: false,
      resetPasswordStepOneFailed: true
    });
  });

  it('should handle RESET_PASSWORD_STEP_TWO_REQUEST', () => {
    expect(
      reducer(state, resetPasswordStepTwoAction())
    ).toEqual({
      ...state,
      resetPasswordStepOneSuccess: false,
      resetPasswordStepTwoRequest: true,
      resetPasswordStepTwoFailed: false,
      resetPasswordStepTwoSuccess: false
    });
  });

  it('should handle RESET_PASSWORD_STEP_TWO_SUCCESS', () => {
    expect(
      reducer(state, resetPasswordStepTwoSuccessAction())
    ).toEqual({
      ...state,
      resetPasswordStepTwoRequest: false,
      resetPasswordStepTwoSuccess: true
    });
  });

  it('should handle RESET_PASSWORD_STEP_TWO_FAILED', () => {
    expect(
      reducer(state, resetPasswordStepTwoFailedAction())
    ).toEqual({
      ...state,
      resetPasswordStepTwoRequest: false,
      resetPasswordStepTwoFailed: true
    });
  });

  it('should handle LOGOUT_REQUEST', () => {
    expect(
      reducer(state, logoutAction())
    ).toEqual({
      ...state,
      logoutRequest: true,
      logoutFailed: false
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(
      reducer(state, logoutSuccessAction())
    ).toEqual({
      ...state,
      logoutRequest: false,
      user: null
    });
  });

  it('should handle LOGOUT_FAILED', () => {
    expect(
      reducer(state, logoutFailedAction())
    ).toEqual({
      ...state,
      logoutRequest: false,
      logoutFailed: true
    });
  });
});
