import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ user, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
);

export default Protected;
