import React, { Component } from "react";

import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

class UserSiderBar extends Component {
  state = {
    collapsed: false
  };

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo-menu" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["plan"]}
        >
          <SubMenu
            key="plan"
            title={
              <span>
                <Icon type="calendar" />
                Plan
              </span>
            }
          >
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Short term</Menu.Item>
            <Menu.Item key="3">Long term</Menu.Item>
          </SubMenu>

          <Menu.Item key="4">
            <Icon type="loading" />
            <span className="nav-text">Function 2</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="loading" />
            <span className="nav-text">Function 3</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="loading" />
            <span className="nav-text">Function 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default UserSiderBar;
