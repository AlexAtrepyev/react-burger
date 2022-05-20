import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';

import { RESET_CURRENT_INGREDIENT, TOGGLE_INGREDIENT_MODAL } from '../../utils/constants';

import AppHeader from '../app-header/app-header';
import ProtectedRoute from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import {
  ForgotPasswordPage,
  IngredientPage,
  LoginPage,
  Main,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage
} from '../../pages';

function ModalSwitch() {
  const dispatch = useDispatch();
  
  const location = useLocation<any>();
  const history = useHistory<any>();
  let background = location.state && location.state.background;
  
  function handleCloseModal() {
    dispatch({ type: TOGGLE_INGREDIENT_MODAL });
    dispatch({ type: RESET_CURRENT_INGREDIENT });
    history.goBack();
  }
  
  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/ingredients/:ingredientId">
          <IngredientPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route exact path="/reset-password">
          <ResetPasswordPage />
        </Route>
        <ProtectedRoute path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      
      {background && (
        <Route path='/ingredients/:ingredientId'>
          <Modal title="Детали ингредиента" onClose={handleCloseModal}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </>
  );
};

export default ModalSwitch;