import React, { Component } from "react";

import { Layout, Menu, Icon, Badge, Input } from "antd";
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

class UserHeader extends Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Menu
          theme="light"
          mode="horizontal"
          style={{ lineHeight: "64px", textAlign: "right" }}
        >
          <Menu.Item
            style={{ float: "left " }}
            onClick={this.props.toggle}
            className="custom-toggle-sider-bar"
          >
            <Icon
              className="trigger"
              type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
            />
          </Menu.Item>

          <Menu.Item>
            <Search
              placeholder="Tìm kiếm"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
              className="custom-input-border-bottom"
            />
          </Menu.Item>
          <SubMenu
            key="1"
            title={
              <span>
                <Badge count={800} style={{ backgroundColor: "#52c41a" }}>
                  <Icon type="mail" theme="filled" />
                </Badge>
              </span>
            }
          >
            <Menu.Item key="2">Thông báo số 1</Menu.Item>
            <Menu.Item key="3">Thông báo số 2 Thông báo số 2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="4"
            title={
              <span>
                <Icon type="crown" theme="filled" />
                <span>Thiện</span>
              </span>
            }
          >
            <Menu.Item key="5">Thay đổi thông tin</Menu.Item>
            <Menu.Item key="6">Đăng xuất</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}

export default UserHeader;
