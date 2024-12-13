import React, { useState } from "react";
import { Layout, Menu, Tabs, Card, Avatar, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import logoStudy from "../../assets/logo-study.png";

const { Header, Footer, Content } = Layout;
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const [isAuthentication, setIsAuthentication] = useState(false);

  const items = [
    {
      key: "1",
      label: "Chỉnh sửa thông tin",
      onClick() {
        navigate("/profile");
      },
    },
    {
      key: "2",
      label: "Đăng xuất",
      onClick() {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/");
      },
    },
  ];
  const MenuItem = [
    {
      key: "/chuong",
      label: "Chương trình học",
    },
    {
      key: "/de",
      label: "Đề thi online",
    },
    {
      key: "/blog",
      label: "Blog",
    },
  ];
  return (
    <Layout>
      <Header className="home-head">
        <div className="logo-head">
          <Avatar src={logoStudy} />
          <h4>STUDY TOEIC</h4>
        </div>
        <div className="menu-head">
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ border: "none" }}
            items={MenuItem}
          />
          {isAuthentication ? (
            <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }} on>
              <Avatar
                size="large"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
            </Dropdown>
          ) : (
            <Button
              className="btn-home-login"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </Button>
          )}
        </div>
      </Header>

      <Content
        style={{ padding: "24px", background: "#f0f2f5", marginTop: "64px" }}
      >
        <Card
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Avatar size={64} icon={<UserOutlined />} />
          <h2 style={{ marginTop: 10 }}>huuthang9764</h2>
          <p>Trang công khai</p>
        </Card>

        {/* Wrap CourseCard in a flex container */}
        <div style={{ display: "flex", marginTop: "20px" }}>
          {/* CourseCard takes 60% width */}
          <div style={{ width: "80%" }}>
            <CourseCard />
          </div>

          {/* Placeholder for the other 40% space */}
          <div style={{ width: "40%", paddingLeft: "20px" }}>
            {/* You can add other components or content here */}
          </div>
        </div>
      </Content>

      <Footer style={{ textAlign: "center", background: "#fff" }}>
        <div>© STUDY4</div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
          <a href="/facebook" style={{ margin: "0 10px" }}>
            Facebook
          </a>
          <a href="/instagram" style={{ margin: "0 10px" }}>
            Instagram
          </a>
          <a href="/youtube" style={{ margin: "0 10px" }}>
            YouTube
          </a>
          <a href="/tiktok" style={{ margin: "0 10px" }}>
            TikTok
          </a>
        </div>
      </Footer>
    </Layout>
  );
};

export default Home;
