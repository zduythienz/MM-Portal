import React, { Component } from "react";
import { connect } from "react-redux";
import { changeNavGuest } from "../../actions/navControl";
import { withRouter, Link } from "react-router-dom";
import {
  NAV_GUEST_REGISTER,
  NAV_GUEST_LOGIN
} from "../../constants/navControl";

class NavGuest extends Component {
  constructor(props) {
    super(props);
    this.changeNav = this.changeNav.bind(this);
  }

  changeNav = newNav => {
    if (newNav != this.props.navActivity) {
      // this.props.changeNavGuest(newNav);
      newNav === NAV_GUEST_REGISTER
        ? this.props.history.push("/register")
        : this.props.history.push("/login");
    }
  };

  render() {
    const { navActivity } = this.props;

    return (
      <div className="middle-ver-content guest-col-1">
        <Link to="/login">
          <li
            className={
              "content-item-full li-nav-guest-effect " +
              (navActivity === NAV_GUEST_LOGIN ? "guest-active-link" : "")
            }
            onClick={() => this.changeNav(NAV_GUEST_LOGIN)}
          >
            <i className="fas fa-lg fa-sign-in-alt margin-top-l" />
            <div>Login</div>
          </li>
        </Link>
        <Link to="/register">
          <li
            className={
              "content-item-full li-nav-guest-effect " +
              (navActivity === NAV_GUEST_REGISTER ? "guest-active-link" : "")
            }
            onClick={() => this.changeNav(NAV_GUEST_REGISTER)}
          >
            <i className="fas fa-lg fa-user-alt margin-top-l" />
            <div>Register</div>
          </li>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(`current guest nav, ${state.navGuestControl.navActivity}`);

  return {
    navActivity: state.navGuestControl.navActivity
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeNavGuest: nav => dispatch(changeNavGuest(nav))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavGuest)
);
