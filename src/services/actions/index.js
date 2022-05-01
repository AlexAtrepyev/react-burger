import api from '../../utils/api';
import {
  TOKEN_LIFETIME,
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  CREATE_ORDER,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS,
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
import { setCookie, getCookie } from '../../utils/utils';

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

export function resetPasswordStepOne({ email }) {
  return function(dispatch) {
    dispatch({ type: RESET_PASSWORD_STEP_ONE });
    api.resetPasswordStepOne(email)
      .then(res => {
        if (res.success) {
          dispatch({ type: RESET_PASSWORD_STEP_ONE_SUCCESS });
        } else {
          dispatch({ type: RESET_PASSWORD_STEP_ONE_FAILED });
        }
      })
      .catch(err => dispatch({ type: RESET_PASSWORD_STEP_ONE_FAILED }))
  }
}

export function resetPasswordStepTwo({ password, token }) {
  return function(dispatch) {
    dispatch({ type: RESET_PASSWORD_STEP_TWO });
    api.resetPasswordStepTwo(password, token)
      .then(res => {
        if (res.success) {
          dispatch({ type: RESET_PASSWORD_STEP_TWO_SUCCESS });
        } else {
          dispatch({ type: RESET_PASSWORD_STEP_TWO_FAILED });
        }
      })
      .catch(err => dispatch({ type: RESET_PASSWORD_STEP_TWO_FAILED }))
  }
}

export function register({ name, email, password }) {
  return function(dispatch) {
    dispatch({ type: REGISTER });
    api.register(name, email, password)
      .then(res => {
        if (res.success) {
          dispatch({
            type: REGISTER_SUCCESS,
            user: res.user,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken
          });
        } else {
          dispatch({ type: REGISTER_FAILED });
        }
      })
      .catch(err => dispatch({ type: REGISTER_FAILED }))
  }
}

export function login({ email, password }) {
  return function(dispatch) {
    dispatch({ type: LOGIN });
    api.login(email, password)
      .then(res => {
        if (res.success) {
          const accessToken = res.accessToken.split('Bearer ')[1];
          accessToken && setCookie('accessToken', accessToken, { expires: TOKEN_LIFETIME });
          res.refreshToken && setCookie('refreshToken', res.refreshToken);
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken
          });
        } else {
          dispatch({ type: LOGIN_FAILED });
        }
      })
      .catch(err => dispatch({ type: LOGIN_FAILED }))
  }
}

export function logout() {
  return function(dispatch) {
    dispatch({ type: LOGOUT });
    api.logout(getCookie('refreshToken'))
      .then(res => {
        if (res.success) {
          dispatch({ type: LOGOUT_SUCCESS });
          setCookie('accessToken', null, { expires: -1 });
          setCookie('refreshToken', null, { expires: -1 });
        } else {
          dispatch({ type: LOGOUT_FAILED });
        }
      })
      .catch(err => dispatch({ type: LOGOUT_FAILED }))
  }
}

export function getUser() {
  return function(dispatch) {
    dispatch({ type: GET_USER });
    api.getUser(getCookie('accessToken'))
      .then(res => {
        if (res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: res.user
          });
        } else {
          dispatch({ type: GET_USER_FAILED });
        }
      })
      .catch(err => {
        dispatch({ type: GET_NEW_TOKEN });
        api.getNewToken(getCookie('refreshToken'))
          .then(res => {
            if (res.success) {
              const accessToken = res.accessToken.split('Bearer ')[1];
              accessToken && setCookie('accessToken', accessToken, { expires: TOKEN_LIFETIME });
              res.refreshToken && setCookie('refreshToken', res.refreshToken);
              dispatch({
                type: GET_NEW_TOKEN_SUCCESS,
                accessToken: res.accessToken,
                refreshToken: res.refreshToken
              });
            
              api.getUser(accessToken)
                .then(res => {
                  if (res.success) {
                    dispatch({
                      type: GET_USER_SUCCESS,
                      user: res.user
                    });
                  } else {
                    dispatch({ type: GET_USER_FAILED });
                  }
                })
                .catch(err => dispatch({ type: GET_USER_FAILED }));
            } else {
              dispatch({ type: GET_NEW_TOKEN_FAILED });
            }
          })
          .catch(err => {
            dispatch({ type: GET_NEW_TOKEN_FAILED });
            dispatch({ type: GET_USER_FAILED });
          });
      })
  }
}

export function updateUser({ name, email, password }) {
  return function(dispatch) {
    dispatch({ type: UPDATE_USER });
    api.updateUser(getCookie('accessToken'), name, email, password)
      .then(res => {
        if (res.success) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: res.user
          });
        } else {
          dispatch({ type: UPDATE_USER_FAILED });
        }
      })
      .catch(err => {
        dispatch({ type: GET_NEW_TOKEN });
        api.getNewToken(getCookie('refreshToken'))
          .then(res => {
            if (res.success) {
              const accessToken = res.accessToken.split('Bearer ')[1];
              accessToken && setCookie('accessToken', accessToken, { expires: TOKEN_LIFETIME });
              res.refreshToken && setCookie('refreshToken', res.refreshToken);
              dispatch({
                type: GET_NEW_TOKEN_SUCCESS,
                accessToken: res.accessToken,
                refreshToken: res.refreshToken
              });
            
              api.updateUser(accessToken, name, email, password)
                .then(res => {
                  if (res.success) {
                    dispatch({
                      type: UPDATE_USER_SUCCESS,
                      user: res.user
                    });
                  } else {
                    dispatch({ type: UPDATE_USER_FAILED });
                  }
                })
                .catch(err => dispatch({ type: UPDATE_USER_FAILED }));
            } else {
              dispatch({ type: GET_NEW_TOKEN_FAILED });
            }
          })
          .catch(err => {
            dispatch({ type: GET_NEW_TOKEN_FAILED });
            dispatch({ type: UPDATE_USER_FAILED });
          });
      })
  }
}
