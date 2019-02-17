import React, { Component } from "react";
import { connect } from "react-redux";
import { changeNavGuest } from "../../actions/navControl";
import { NAV_GUEST_REGISTER } from "../../constants/navControl";
class Register extends Component {
  componentDidMount() {
    this.props.changeNavGuest(NAV_GUEST_REGISTER);
  }

  render() {
    return <div>Registesr</div>;
  }
}

export default connect(
  null,
  { changeNavGuest }
)(Register);
