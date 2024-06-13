import React from "react";
import { RiseOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Statement from "../../Components/Statement.js"
import ARRBreakdown from "../../Components/ARRBreakdown.js"

const App = () => (
    
  <Row gutter={24}>
    <Col span={6}>
      <Card title="Total ARR" bordered={false}>
        <p>₹10.84lakhs</p>
        <div style={{ display: "flex" }}>
          <div>
            <RiseOutlined />
            0%
          </div>
          <div>
            <p>VS ₹00.0</p>
          </div>
        </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Cash in bank" bordered={false}>
        <p>-₹349150</p>
        <div style={{ display: "flex" }}>
          <div>
            <RiseOutlined />
            0%

          </div>
          <div>
            <p>VS ₹0.0</p>
          </div>
        </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Runway" bordered={false}>
        <p>0 month</p>
        <div style={{ display: "flex" }}>
          <div>
            <RiseOutlined />
            0%
          </div>
          <div>
            <p>VS 0 months </p>
          </div>
        </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Gross Profit" bordered={false}>
        <p>₹500723.35</p>
        <div style={{ display: "flex" }}>
          <div>
            <RiseOutlined />
            5.2%
          </div>
          <div>
            <p>VS₹0.0</p>
          </div>
        </div>
      </Card>
    </Col>
    <Statement />
    <ARRBreakdown />
  </Row>
);
export default App;
