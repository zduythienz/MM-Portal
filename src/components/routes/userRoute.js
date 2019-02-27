import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import UserBackground from "../../Views/User/GuestLayout/UserBackground";

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <UserBackground>
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  </UserBackground>
);

UserRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  console.log("user route", state);

  return {
    isAuthenticated: !!state.authentication.isAuthenticated
  };
}

export default connect(mapStateToProps)(UserRoute);
