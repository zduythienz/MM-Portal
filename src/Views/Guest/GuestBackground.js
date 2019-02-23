import React, { Component } from "react";
import { Row, Col } from "antd";

import NavGuest from "./NavGuest";
import GuestPageName from "./GuestPageName";
class GuestBackground extends Component {
  render() {
    return (
      <div className="guest-layout">
        <div className="bg-layer">
          <div className="center-div box-shadow-white">
            <Row type="flex" justify="center" style={{ height: "100%" }}>
              <Col xs={3} sm={3} md={3} lg={3} xl={3} className="middle-ver">
                <NavGuest />
              </Col>
              <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                <GuestPageName />
              </Col>
              <Col xs={21} sm={21} md={13} lg={13} xl={13}>
                {/* <div className="middle-ver-content-col3">
                  <div className="content-item-full">{this.props.children}</div>
                </div> */}
                {this.props.children}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestBackground;
