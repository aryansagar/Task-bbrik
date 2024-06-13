import React from "react";
import "./index.css";
import { Space } from "antd";
import { Typography } from "antd";
import Dropdown from "../Dropdown";
import { TrademarkOutlined } from "@ant-design/icons";

function Header() {
  const { Title } = Typography;
  return (
    <div className="Header">
      <Title style={{fontSize:"1.5rem"}}>Barbarik</Title>
      <Space>
        <Dropdown />
        <TrademarkOutlined />
      </Space>
    </div>
  );
}

export default Header;
