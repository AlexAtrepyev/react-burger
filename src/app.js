import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, useLocation, useHistory } from 'react-router-dom';

import { getUser, getIngredients } from './services/actions';

import { RESET_CURRENT_INGREDIENT, TOGGLE_INGREDIENT_MODAL } from './utils/constants';

import AppHeader from './components/app-header/app-header';
import ProtectedRoute from './components/protected-route/protected-route';
import Modal from './components/modal/modal';
import IngredientDetails from './components/ingredient-details/ingredient-details';

import {
  ForgotPasswordPage,
  IngredientPage,
  LoginPage,
  Main,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage
} from './pages';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
    dispatch(getIngredients());
  }, [dispatch]);

  const ModalSwitch = () => {
    const location = useLocation();
    const history = useHistory();
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
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
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
          <ProtectedRoute path="/ingredients/:ingredientId">
            <IngredientPage />
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

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
