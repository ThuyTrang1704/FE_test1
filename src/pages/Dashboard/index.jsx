import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Statistic } from "antd";
import { UserOutlined, StockOutlined, DatabaseOutlined } from '@ant-design/icons';
import userService from '../../service/user.service';
import resultService from '../../service/result.service';
import structureService from '../../service/structure.service';
import "./Dashboard.scss"


const Dashboard = () => {
  const [countUserData, setCountUserData] =useState(0);
  const [countResult, setCountResult] =useState(0);
  const [countStructure, setCountStructure] =useState(0);
  

  useEffect(()=>{
    const countUserData = async () => {
      try {
        const data = await userService.countUsers();
        setCountUserData(data);
      } catch (error) {
        throw new Error("Count User failed");
      }
    };
    const countResult = async () => {
      try {
        const data = await resultService.countResult();
        setCountResult(data);
      } catch (error) {
        throw new Error("Count User failed");
      }
    };
    const countStructure = async () => {
      try {
        const data = await structureService.countStructure();
        setCountStructure(data);
      } catch (error) {
        throw new Error("Count User failed");
      }
    };
    countStructure();
    countResult();
    countUserData();
  },[])
  return (
    <>
      {/* <BarChartComponent /> */}
      <div style={{ padding: "30px" }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="User"
              value={countUserData}
              precision={0}
              valueStyle={{ color: 'var(--green-06)' }}
              prefix={<UserOutlined />}
              suffix="User"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Result"
              value={countResult}
              precision={0}
              valueStyle={{ color: 'var(--blue-08)' }}
              prefix={<StockOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Struture"
              value={countStructure}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<DatabaseOutlined />}
            />
          </Card>
        </Col>
        {/* <Col span={6}>
          <Card>
            <Statistic
              title="New Orders"
              value={13200}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<LockOutlined />}
              suffix="$"
            />
          </Card>
        </Col> */}
      </Row>
    </div>
    </>
  )
}

export default Dashboard
