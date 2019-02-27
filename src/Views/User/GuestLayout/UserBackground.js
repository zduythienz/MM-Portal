import React, { Component } from "react";
import { Layout } from "antd";

import UserSideBar from "./UserSiderBar2";
import UserHeader from "./UserHeader";
const { Content } = Layout;
class UserBackground extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  toggleOnMobile = () => {
    this.setState({
      collapsed: true
    });
  };
  toggleOnWeb = () => {
    this.setState({
      collapsed: false
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <UserSideBar
          toggle={this.toggle}
          toggleOnMobile={this.toggleOnMobile}
          toggleOnWeb={this.toggleOnWeb}
          {...this.state}
        />
        <Layout>
          <UserHeader toggle={this.toggle} {...this.state} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              id="style-7"
              style={{ padding: 24, background: "#fff", minHeight: 360 }}
              className="content-make-scroll"
            >
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default UserBackground;
