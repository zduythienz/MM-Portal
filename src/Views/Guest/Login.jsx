import React, { Component } from "react";
import { Form } from "antd";
import LoginForm from "./Form/LoginForm.js";
import { connect } from "react-redux";
import { login } from "../../actions/authentication";
import { changeNavGuest } from "../../actions/navControl";
import { NAV_GUEST_LOGIN } from "../../constants/navControl";

class Login extends Component {
  login = data => {
    console.log(data);
    this.props.login(data);
  };

  componentDidMount() {
    this.props.changeNavGuest(NAV_GUEST_LOGIN);
  }

  render() {
    return (
      <div className="middle-ver-content-col3">
        <div className="content-item-full">
          <LoginForm
            className=""
            handleSubmit={this.login}
            error={this.props.error}
            isLoading={this.props.isLoading}
          />
        </div>
      </div>
    );
  }
}
const loginForm = Form.create({ name: "normal_login" })(Login);

function mapStateToProps(state) {
  return {
    error: state.authentication.error,
    isLoading: state.authentication.isLoading
  };
}

export default connect(
  mapStateToProps,
  { login, changeNavGuest }
)(loginForm);
