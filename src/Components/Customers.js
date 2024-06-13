import React from 'react';
import { Card, Progress } from 'antd';
import { ArrowUpOutlined } from "@ant-design/icons";
const InvoiceDraft = () => {
  const pendingPercent = 0;

  return (
    <Card title="Customers">
      <div style={{ marginBottom: 16,borderBottom:"1px solid gray" }}>
        <Progress type="circle" percent={pendingPercent} status="active" format={() => `${pendingPercent}% `} />
        <p style={{fontWeight:"bold"}}>New Customers This Month</p>
      </div>
      <div>
        <div>
            <p style={{fontWeight:"bold"}}>Active Customer</p>
        </div>
        <div style={{
            display:"flex",
            alignItems:"center"
        }}>
            <span>
             <ArrowUpOutlined />
            </span>
            <span style={{
                fontWeight:"bold"
            }}> 89.00%</span>
        </div>
      </div>
    </Card>
  );
};

export default InvoiceDraft;
