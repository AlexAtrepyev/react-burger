import { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useSelector } from '../../services/hooks';

const ProtectedRoute: FC<RouteProps> = ({ children, ...props }) => {
  const user = useSelector(state => state.auth.user);
  
  return (
    <Route
      {...props}
      render={({ location }) =>
        user.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
