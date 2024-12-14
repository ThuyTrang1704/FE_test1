import React from 'react';
import { Row, Col, Card, Statistic } from "antd";
import { DollarOutlined, UserOutlined, HeartOutlined, LockOutlined } from '@ant-design/icons';
import BarChartComponent from '../../components/BarChartComponent'
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <>
      {/* <BarChartComponent /> */}
      <div style={{ padding: "30px" }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="User"
              value={53000}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<DollarOutlined />}
              suffix="$"
            />
            <p style={{ color: '#3f8600' }}>+30%</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Result"
              value={3200}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<UserOutlined />}
            />
            <p style={{ color: '#3f8600' }}>+20%</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Struture"
              value={1200}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<HeartOutlined />}
            />
            <p style={{ color: '#cf1322' }}>-20%</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="New Orders"
              value={13200}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<LockOutlined />}
              suffix="$"
            />
            <p style={{ color: '#3f8600' }}>+10%</p>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Dashboard
