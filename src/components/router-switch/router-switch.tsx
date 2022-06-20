import { FC } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import Header from '../header/header';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ProtectedRoute from '../protected-route/protected-route';

import {
  FeedPage,
  ForgotPasswordPage,
  IngredientPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OrderPage,
  ProfilePage,
  ProfileOrdersPage,
  RegisterPage,
  ResetPasswordPage
} from '../../pages';

const RouterSwitch: FC = () => {
  const history = useHistory<any>();
  const location = useLocation<any>();
  
  let background = location.state && location.state.background;
  
  return (
    <>
      <Header />
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
          <MainPage />
        </Route>
        <Route exact path="/ingredients/:ingredientId">
          <IngredientPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/feed/:id">
          <OrderPage />
        </Route>
        <ProtectedRoute exact path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile/orders">
          <ProfileOrdersPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile/orders/:id">
          <OrderPage />
        </ProtectedRoute>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      
      {background && (
        <Route path='/ingredients/:ingredientId'>
          <Modal title="Детали ингредиента" onClose={() => history.goBack()}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}

      {background && (
        <Route path='/feed/:id'>
          <Modal orderModal onClose={() => history.goBack()}>
            <OrderDetails />
          </Modal>
        </Route>
      )}

      {background && (
        <ProtectedRoute path='/profile/orders/:id'>
          <Modal orderModal onClose={() => history.goBack()}>
            <OrderDetails />
          </Modal>
        </ProtectedRoute>
      )}
    </>
  );
};

export default RouterSwitch;
