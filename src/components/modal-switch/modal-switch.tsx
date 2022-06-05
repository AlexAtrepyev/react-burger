import { Route, Switch, useLocation, useHistory } from 'react-router-dom';

import { resetCurrentIngredientAction } from '../../services/actions/burger';
import { toggleIngredientModalAction } from '../../services/actions/ui';
import { useDispatch } from '../../services/hooks';

import AppHeader from '../app-header/app-header';
import ProtectedRoute from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import {
  FeedPage,
  ForgotPasswordPage,
  IngredientPage,
  LoginPage,
  Main,
  NotFoundPage,
  OrderInfo,
  ProfilePage,
  ProfileOrdersPage,
  RegisterPage,
  ResetPasswordPage
} from '../../pages';

function ModalSwitch() {
  const location = useLocation<any>();
  const history = useHistory<any>();

  const dispatch = useDispatch();
  
  let background = location.state && location.state.background;
  
  function handleCloseModal() {
    dispatch(toggleIngredientModalAction());
    dispatch(resetCurrentIngredientAction());
    history.goBack();
  }
  
  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
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
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/ingredients/:ingredientId">
          <IngredientPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/feed/:id">
          <OrderInfo />
        </Route>
        <ProtectedRoute exact path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile/orders">
          <ProfileOrdersPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile/orders/:id">
          <OrderInfo />
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
