import React from "react";
import { connect } from "react-redux";
import GuestBackground from "../../Views/Guest/GuestBackground";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";
console.log("call guest routes");

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <GuestBackground>
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  </GuestBackground>
);

GuestRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  console.log("guest route", state);
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
}

export default connect(mapStateToProps)(GuestRoute);
