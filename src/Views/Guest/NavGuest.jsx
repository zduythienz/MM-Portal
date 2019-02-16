import React, { Component } from "react";

class NavGuest extends Component {
  render() {
    return (
      <div className="middle-ver-content guest-col-1">
        <li className="content-item-full guest-active-link">
          <i className="fas fa-lg fa-sign-in-alt margin-top-l" />
          <div>Login</div>
        </li>
        <li className="content-item-full">
          <i className="fas fa-lg fa-user-alt margin-top-l" />
          <div>Register</div>
        </li>
      </div>
    );
  }
}

export default NavGuest;
