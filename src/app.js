import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getUser } from './services/actions';

import AppHeader from './components/app-header/app-header';
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
  }, [dispatch]);

  return (
    <>
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password">
            <ResetPasswordPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/ingredient">
            <IngredientPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
