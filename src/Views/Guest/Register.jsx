import React, { Component } from "react";
import { connect } from "react-redux";
import { changeNavGuest } from "../../actions/navControl";
import { NAV_GUEST_REGISTER } from "../../constants/navControl";
import RegisterForm from "./Form/RegisterForm";
class Register extends Component {
  componentDidMount() {
    this.props.changeNavGuest(NAV_GUEST_REGISTER);
  }

  render() {
    return (
      <div className="middle-ver-content-register-col3">
        <div className="content-item-full">
          <RegisterForm className="" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { changeNavGuest }
)(Register);
