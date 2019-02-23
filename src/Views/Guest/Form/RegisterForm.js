import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { register } from "../../../actions/authentication";
// import CubeLoading from "../../../components/loading/cube-loading";
import CircleLoading from "../../../components/loading/circle-loading";

class RegisterForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.props.handleSubmit(values);
        this.props.register(values);
      }
    });
  };

  comparePassword = (rule, value, callback) => {
    const form = this.props.form;
    const password = form.getFieldValue("account.passwordHash");
    if (password) {
      if (value && value !== password) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    } else {
      callback();
    }
  };

  handleCheckUsername = () => {};

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoading } = this.props;
    console.log(`this props: ${JSON.stringify(this.props)}`);

    if (isLoading) {
      return (
        <div style={{ marginTop: "52%" }}>
          <CircleLoading />
        </div>
      );
    }

    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <Form.Item>
          {getFieldDecorator("account.username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              onBlur={this.handleCheckUsername}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("info.fullName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="tag" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Full name"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("account.passwordHash", {
            rules: [{ required: true, message: "Please input your password!" }]
          })(
            <Input
              type="password"
              size="large"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("confirmPassword", {
            rules: [
              {
                required: true,
                message: "Please input your confirm passowrd!"
              },
              {
                validator: this.comparePassword
              }
            ]
          })(
            <Input
              type="password"
              size="large"
              prefix={
                <Icon type="unlock" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Confirm password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.authentication.isLoading
});

const registerForm = Form.create({ name: "normal_register" })(RegisterForm);

export default connect(
  mapStateToProps,
  { register }
)(registerForm);
