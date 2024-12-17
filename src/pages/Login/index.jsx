import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import authService from "../../service/auth.service";
import "./style.scss";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const user = await authService.login(values);

      // Điều hướng dựa trên vai trò của người dùng
      if (user?.role === "Role_Admin") {
        navigate("/dashboard");
      } else if (user?.role === "Role_Student") {
        navigate("/student");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleRedirecRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="login-form"
      >
        <Title level={1} className="form-title">
          Đăng Nhập
        </Title>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email (Account)" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
          ]}
          className="form-item"
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Đăng Nhập
          </Button>
        </Form.Item>

        <div className="redirect-register">
          <span>Bạn chưa có tài khoản?</span>
          <span onClick={handleRedirecRegister}>Đăng ký ngay</span>
        </div>
      </Form>
    </div>
  );
};

export default Login;
