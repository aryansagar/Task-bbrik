import React from "react";
import { RiseOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space } from "antd";
import Amount from "../../Components/Amout";
import Customers from "../../Components/Customers.js";
import InvoiceProgressBar from "../../Components/InvoiceProgressBar.js";

function DashBoard() {
  return (
    <div>
      <Space direction="horizental" size={16}>
        <Card
          title="Invoices"
          style={{
            width: 400,
            height: 180,
          }}
        >
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid gray",
            }}
          >
            <Amount title="Total Recievable" amt="1,180,480.20" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <Amount title="current" amt="736,857.28" />
            <Amount title="Due" amt="443,623.00" />
          </div>
        </Card>

        <Card
          title="Expenses"
          style={{
            width: 400,
            height: 180,
          }}
        >
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid gray",
            }}
          >
            <Amount title="Total Payable" amt="2,173,618.24" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <Amount title="current" amt="2,173,618.24" />
            <Amount title="Due" amt="2,157,718.24" />
          </div>
        </Card>
      </Space>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop:"5px"
        }}
      >
        <InvoiceProgressBar />
        <Customers />
      </div>
    </div>
  );
}

export default DashBoard;
