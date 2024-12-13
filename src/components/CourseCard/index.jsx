import React from 'react';
import { Card, Button, Tag, Col, Row } from 'antd';

const { Meta } = Card;

const CourseCard = () => {
  const cardData = [
    { title: 'IELTS Simulation Reading test 2', duration: '60 phút', views: '152421', comments: '534' },
    { title: 'IELTS Simulation Reading test 3', duration: '60 phút', views: '110670', comments: '344' },
    { title: 'IELTS Simulation Reading test 4', duration: '60 phút', views: '75630', comments: '208' },
    { title: 'IELTS Simulation Reading test 5', duration: '60 phút', views: '62472', comments: '230' },
    { title: 'IELTS Simulation Reading test 6', duration: '60 phút', views: '66789', comments: '212' },
    { title: 'IELTS Simulation Reading test 7', duration: '60 phút', views: '55434', comments: '172' },
    { title: 'IELTS Simulation Reading test 8', duration: '60 phút', views: '43566', comments: '120' },
    { title: 'IELTS Simulation Reading test 9', duration: '60 phút', views: '41253', comments: '113' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 24]}> {/* gutter for space between cards */}
        {cardData.map((card, index) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              style={{ width: '100%', borderRadius: '10px', padding: '10px' }} // Adjust card size and add radius
              cover={<div style={{ height: 120, backgroundColor: '#f0f0f0' }}></div>} // Placeholder for image
            >
              <h3 style={{ fontSize: '16px' }}>{card.title}</h3>
              <div style={{ marginTop: '10px', fontSize: '14px' }}>
                <span>{card.duration} | </span>
                <span>{card.views} | </span>
                <span>{card.comments} bình luận</span>
              </div>
              <div style={{ marginTop: '10px' }}>
                <span><Tag color="blue">#IELTS Academic</Tag></span>
                <span><Tag color="blue">#Reading</Tag></span>
              </div>
              <Button type="primary" style={{ marginTop: '10px' }} block>
                Chi tiết
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CourseCard;
