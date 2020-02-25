import React from 'react';
import AuthService from '../services/AuthService';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {

//   const isLoggedIn = AuthService.isLoggedIn()
const isLoggedIn = true;

  return (
    <Route
      {...props}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute