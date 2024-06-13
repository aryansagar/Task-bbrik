import React from 'react';
import { Card, Table, Typography, Row, Col } from 'antd';
import 'antd/dist/reset.css'; 

const { Title } = Typography;

const data = [
  {
    key: '1',
    description: 'Revenues',
    qplan: 5.5,
    qactual: 4.2,
    variance: -10.09
  },
  {
    key: '2',
    description: 'COGS',
    qplan: 1.21,
    qactual: 1.15,
    variance: 22.4
  },
  {
    key: '3',
    description: 'Gross Profit',
    qplan: 4.2,
    qactual: 3.5,
    variance: -12.59
  },
 
  {
    key: '4',
    description: 'Gross Profit %',
    qplan: 78,
    qactual: 76.5,
    variance: null,
  },
];

const columns = [
  {
    title: '',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Q3 2023 Plan',
    dataIndex: 'qplan',
    key: 'qplan',
    align: 'right',
    sorter: (a, b) => a.qplan - b.qplan,
    render: (qplan) => `₹${qplan.toLocaleString()}M`
  },
  {
    title: 'Q3 2023 Actual',
    dataIndex: 'qactual',
    key: 'qactual',
    align: 'right',
    sorter: (a, b) => a.qactual - b.qactual,
    render: (qactual) => `₹${qactual.toLocaleString()}M`
  },
  {
    title: 'Variance(%)',
    dataIndex: 'variance',
    key: 'variance',
    align: 'right',
    sorter: (a, b) => a.variance - b.variance,
    render: (variance) => variance !== null ? `${variance}%` : ''
  },
];

const PnLStatement = () => (
  <Card
    style={{
      margin: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    }}
  >
    <Row justify="center" style={{ marginBottom: '20px' }}>
      <Col>
        <Title level={2}>P&L Statements</Title>
      </Col>
    </Row>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
    />
  </Card>
);

export default PnLStatement;
