import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import CircleLoading from "../../../components/loading/circle-loading";

class LoginForm extends Component {
  state = {
    username: this.props.form.getFieldValue("username"),
    password: this.props.form.getFieldValue("password")
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit(values);
        this.setState({ ...values });
        // .catch(err => console.log("submit err: ", err));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { error, isLoading } = this.props;

    if (isLoading) {
      return (
        <div style={{ marginTop: "32%" }}>
          <CircleLoading />
        </div>
      );
    }
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item
          validateStatus="error"
          help={error.message}
          required="false"
          style={{ top: "-24px" }}
        />
        <Form.Item>
          {getFieldDecorator("username", {
            initialValue: this.state.username,
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            initialValue: this.state.password,
            rules: [{ required: true, message: "Please input your password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>

        <Form.Item>
          <Checkbox className="login-form-rememberme">Remember me</Checkbox>
          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
          >
            Log in
          </Button>
          Or <a href="/">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}
const loginForm = Form.create({ name: "normal_login" })(LoginForm);

export default loginForm;
