import React, { useEffect, useState } from "react";
import { Button, Input, Form, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import imageLogo from "../../assets/logo-study.png";
import "./style.scss";
import userService from "../../service/user.service";
import Loader from "../../components/Loader";

const Profile = () => {

  // Khai báo state để lưu trữ dữ liệu người dùng
  const [userData, setUserData] = useState(null);

  // Lấy dữ liệu người dùng khi component load
  useEffect(() => {
    const userDataFetch = async () => {
      try {
        const data = await userService.getUser();
        setUserData(data); // Cập nhật dữ liệu người dùng vào state
        console.log("data", data); // In dữ liệu người dùng ra console để kiểm tra
      } catch (error) {
        console.error("Fetch User failed", error);
      }
    };
    userDataFetch();
  }, []); // Chạy khi component mount

  const onFinish = async(values) => {
    console.log("Form values:", values);
    try {
      const messageResponse = await userService.updateUser(values);
      
      // Hiển thị popup thông báo thành công
      message.success(messageResponse);
      
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Nếu dữ liệu người dùng chưa được tải, hiển thị loading
  if (!userData) {
    return <Loader />;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Thông tin cá nhân</h1>
      <div className="profile-card">
        <div className="profile-header">
          <img src={imageLogo} alt="avatar" className="profile-avatar" />
          <div className="profile-account">
            <p>
              <b>Tài khoản:</b> <span>{userData.email}</span>
            </p>
          </div>
        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
          className="profile-form"
          initialValues={{
            id:userData.id,
            name: userData.name,
            email: userData.email,
            address: userData.address,
            phoneNumber: userData.phoneNumber,
          }}
        >
          <div className="form-grid">
          <Form.Item
              name="id"
              hidden
            >
              <Input/>
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Thắng Nguyễn" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="huuthang9764@gmail.com"
                disabled
              />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                { required: true, message: "Vui lòng nhập địa chỉ!" },
                {
                  min: 10,
                  message: "Địa chỉ phải chứa ít nhất 10 ký tự!",
                },
              ]}
            >
              <Input
                prefix={<GlobalOutlined />}
                placeholder="Nhập địa chỉ (vd: 180 Cao Lỗ)"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Số điện thoại phải là 10 chữ số!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Nhập số điện thoại (vd: 0123456789)"
              />
            </Form.Item>
          </div>

          <div className="form-actions">
            <Button type="default" className="change-password-button">
              Đổi mật khẩu
            </Button>
            <Button className="btn-pro" htmlType="submit">
              Cập nhật
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
