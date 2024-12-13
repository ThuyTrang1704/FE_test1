import { Avatar, Button, Dropdown, Layout } from "antd";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import userService from "../../service/user.service";
import { getAccessRole } from "../../utils/helper";

const Header = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState([""]);
  const [role, setRole] = useState([""]);

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
        navigate("/login");
      },
    },
  ];

  useEffect(() => {
    const userData = async () => {
      try {
        const getRoles = getAccessRole();
        const data = await userService.getUser();
        setUserName(data.name);
        setRole(getRoles);
      } catch (error) {
        throw new Error("Fetch User failed");
      }
    };
    userData();
  }, []);

  return (
    <Layout.Header className="header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="collapsed-button"
      />
      <div>
        <span style={{ marginRight: 10 }}>
          Xin Chào, {userName} || {role}
        </span>
        <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }} on>
          <Avatar
            size="large"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default Header;
