import React, { useEffect, useState }  from "react";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import './Sider.scss'
import { useLocation, useNavigate } from "react-router-dom";

const SiderBar = ({ collapsed,width }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(["/"]);

  const MenuItem =[
    {
      key: "/dashboard/user",
      icon: <UserOutlined />,
      label: "User",
    },
    {
      key: "/dashboard/level",
      icon: <VideoCameraOutlined />,
      label: "Level",
    },
    {
      key: "/dashboard/skill",
      icon: <UploadOutlined />,
      label: "Skill",
    },
    {
      key: "/dashboard/part",
      icon: <UserOutlined />,
      label: "Part",
    }
    ,
    {
      key: "/dashboard/topic",
      icon: <UserOutlined />,
      label: "Topic",
    }
    ,
    {
      key: "/dashboard/question",
      icon: <UserOutlined />,
      label: "Question",
    }
    ,
    {
      key: "/dashboard/structure",
      icon: <UserOutlined />,
      label: "Structure",
    }
  ]

  const handleMenuClick = ({ key }) => {
    navigate(key);
    setSelectedKeys([key]);
  };

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  return (
    <Sider collapsed={collapsed} theme="light" width={width} >
      <div className="demo-logo-vertical" onClick={(e) => {
        navigate("/")}
      }
      >STUDY TOEIC</div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={selectedKeys}
        onClick={handleMenuClick}
        items={MenuItem}
      />
    </Sider>
  );
};

export default SiderBar;
