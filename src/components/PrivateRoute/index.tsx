import React from 'react';
import { Route, Redirect } from 'react-router-dom';



// @ts-ignore
const PrivateRoute = ({ component: Component,  ...rest }) => (

  <Route
    {...rest}
    render={props =>
      localStorage.isAdmin === 'true'
      ? <Component {...props} />
      : <Redirect to={'/'} />
      }
  />
);
export default PrivateRoute;