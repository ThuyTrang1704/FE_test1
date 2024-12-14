import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logoStudy from "../../assets/logo-study.png";
import { getAccessUser } from "../../utils/helper";
import "./style.scss";

const OnlyLayout = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState("/student");

  const user = getAccessUser(); // Lấy thông tin người dùng từ localStorage
  const isAuthentication = !!user; // Kiểm tra xem có thông tin người dùng không

  const items = [
    {
      key: "1",
      label: "Chỉnh sửa thông tin",
      onClick() {
        navigate("/student/profile");
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
      key: "/student",  // Trang Chủ
      label: "Trang Chủ",
    },
    {
      key: "/student/about-us",  // About Us
      label: "About Us",
    },
    {
      key: "/student/blog",  // Blog
      label: "Blog",
    },
  ];

  // Hàm xử lý khi click vào menu
  const handleMenuClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <>
      <Layout className="only-container">
        <Header className="home-head">
          <div className="logo-head">
            <Avatar src={logoStudy} />
            <h4>STUDY TOEIC</h4>
          </div>
          <div className="menu-head">
            {isAuthentication ? (
              <>
                <Menu
                  theme="light"
                  mode="horizontal" // Giữ chế độ horizontal cố định
                  selectedKeys={[current]} // Đảm bảo key hợp lệ
                  items={MenuItem}
                  onClick={handleMenuClick}
                />

                <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }} on>
                  <Avatar
                    size="large"
                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/463410126_2148152842245168_1085171313661819165_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGPN4jm0Hrvu5xvmEwSVQq-8CdJnL--q-3wJ0mcv76r7XzvomiaAWZQTTqu-OFdonhpbznWXaU2G1ATVTjtomdd&_nc_ohc=dsgm1jIIPc4Q7kNvgGob8yo&_nc_zt=24&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=AWqpOfsT2UtN6eK0db7ViY3&oh=00_AYCWBfhOmO20OHev0z7j6kxeNIOGlBxidnC-SsLdPikLow&oe=6762D861"
                  />
                </Dropdown>
              </>
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
         className="ant-layout-content"
        >
          <Outlet />
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
    </>
  );
};

export default OnlyLayout;
