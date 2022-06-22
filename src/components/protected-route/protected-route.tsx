import { FC } from 'react';
import { Redirect, Route, RouteProps, useHistory, useLocation } from 'react-router-dom';

import Preloader from '../preloader/preloader';

import { useSelector } from '../../services/hooks';

const ProtectedRoute: FC<RouteProps & { onlyUnAuth?: boolean }> = ({ onlyUnAuth = false, children, ...props }) => {
  const history = useHistory<any>();
  const location = useLocation<any>();

  const { isAuthChecked, user } = useSelector(state => state.auth);
  
  if (!isAuthChecked) {
    return (
      <Preloader />
    );
  }

  if (onlyUnAuth && user) {
    return (
      <Redirect to={ history.location.state?.from || '/' } />
    );
  }

  if (!onlyUnAuth && !user) {
    return (
      <Route { ...props }>
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      </Route>
    );
  }
  
  return (
    <Route { ...props }>
      {children}
    </Route>
  );
}

export default ProtectedRoute;
