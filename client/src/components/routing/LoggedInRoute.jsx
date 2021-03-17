import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../context/auth/authContext";
import AuthContext from "../../context/auth/authContext";

const LoggedInRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default LoggedInRoute;