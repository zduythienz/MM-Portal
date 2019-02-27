import React, { Component } from "react";

import { Layout } from "antd";

const { Content } = Layout;

class UserContent extends Component {
  state = {
    collapsed: false
  };

  render() {
    return (
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          id="style-7"
          style={{ padding: 24, background: "#fff", minHeight: 360 }}
          className="content-make-scroll"
        >
          {this.props.children}
        </div>
      </Content>
    );
  }
}

export default UserContent;
