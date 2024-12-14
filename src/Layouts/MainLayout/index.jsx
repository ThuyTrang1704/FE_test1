import { useState } from "react";
import { Layout, Menu } from "antd";
const { Content } = Layout;
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SiderBar from "../../components/SiderBar";
import { Footer } from "antd/es/layout/layout";
import "./style.scss";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout className="main-layout">
        <SiderBar collapsed={collapsed} width={250}/>
        <Layout>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content className="content">
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: 'var(--green-02)',
            }}
          >
            LUẬN VĂN TỐT NGHIỆP THÙY TRANG ©{new Date().getFullYear()}.
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default MainLayout;
