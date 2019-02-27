import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

class UserSiderBar extends Component {
  render() {
    const { collapsed } = this.props;
    console.log(collapsed);

    return (
      <Sider
        trigger={null}
        collapsible
        breakpoint="xs"
        collapsedWidth="0"
        onBreakpoint={broken => {
          broken ? this.props.toggleOnMobile() : this.props.toggleOnWeb();
        }}
        collapsed={this.props.collapsed}
      >
        <div className="logo-menu" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["plan4"]}
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
            <Menu.Item key="plan1">
              <Link to="/plan-calendar">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="plan2">Short term</Menu.Item>
            <Menu.Item key="plan3">Long term</Menu.Item>
            <Menu.Item key="plan4">
              <Link to="/plan-calendar">Calendar</Link>
            </Menu.Item>
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
