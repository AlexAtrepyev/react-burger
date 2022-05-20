import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { TUser } from '../../types';

const ProtectedRoute: FC<RouteProps> = ({ children, ...props }) => {
  const user = useSelector<any, TUser>(state => state.auth.user);
  
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
