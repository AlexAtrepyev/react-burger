import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { TUser } from '../../types';

const ProtectedRoute: FC<{ path: string }> = ({ children, path }) => {
  const user = useSelector<any, TUser>(state => state.auth.user);
  
  return (
    <Route
      {...path}
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
