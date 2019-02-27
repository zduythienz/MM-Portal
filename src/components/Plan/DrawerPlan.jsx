import React, { Component } from "react";
import { Drawer, Timeline, Icon, Col, Row } from "antd";

class DrawerPlan extends Component {
  render() {
    return (
      <Drawer
        width={400}
        placement="right"
        closable={false}
        onClose={this.props.closeDrawer}
        visible={this.props.visible}
      >
        <Row>
          <Col span={24}>
            <Timeline mode="left">
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">
                Solve initial network problems 2015-09-01
              </Timeline.Item>
              <Timeline.Item
                dot={
                  <Icon type="clock-circle-o" style={{ fontSize: "16px" }} />
                }
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Timeline.Item>
              <Timeline.Item color="red">
                Network problems being solved 2015-09-01
              </Timeline.Item>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item
                dot={
                  <Icon type="clock-circle-o" style={{ fontSize: "16px" }} />
                }
              >
                Technical testing 2015-09-01
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </Drawer>
    );
  }
}

export default DrawerPlan;
