import React from 'react';
import { Card, Typography } from 'antd';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const { Title } = Typography;

const data = [
  { month: 'Jan', Enterprise: 500000, MidMarket: 300000, SMB: 200000 },
  { month: 'Feb', Enterprise: 480000, MidMarket: 320000, SMB: 180000 },
  { month: 'Mar', Enterprise: 510000, MidMarket: 280000, SMB: 220000 },
  { month: 'Apr', Enterprise: 490000, MidMarket: 310000, SMB: 200000 },
  { month: 'May', Enterprise: 520000, MidMarket: 330000, SMB: 210000 },
];

const colors = ['#8884d8', '#82ca9d', '#ffc658'];

const SingleLineGroupedBarChart = () => (
  <Card
    style={{
      margin: '1px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    }}
  >
    <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Revenue by Month and Segment</Title>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Enterprise" stackId="a" fill={colors[0]} name="Enterprise" style={{width:"5px"}}/>
        <Bar dataKey="MidMarket" stackId="a" fill={colors[1]} name="Mid-Market" />
        <Bar dataKey="SMB" stackId="a" fill={colors[2]} name="SMB" />
      </BarChart>
    </ResponsiveContainer>
  </Card>
);

export default SingleLineGroupedBarChart;


