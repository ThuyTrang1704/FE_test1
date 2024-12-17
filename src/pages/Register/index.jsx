import React from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import authService from "../../service/auth.service";
import "./style.scss";

const { Title } = Typography;

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
    },
  });

  const onFinish = async (values) => {
    try {
      const result = await authService.register(values);
      if (result.success) {
        message.success(result.message);
        navigate("/login");
      } else {
        message.error(result.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleRedirecLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="register-form"
      >
        <Title level={1}>Đăng Ký</Title>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Nhập tên" />
        </Form.Item>

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
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>

        <Form.Item
          name="passwordConfirm"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please input your confirm password!" },
            validateConfirmPassword(form),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Nhập lại mật khẩu"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-button"
          >
            Đăng Ký
          </Button>
        </Form.Item>

        <div className="redirect-login">
          <span>Bạn đã có tài khoản?</span>
          <span onClick={handleRedirecLogin}>Đăng nhập ngay</span>
        </div>
      </Form>
    </div>
  );
};

export default Register;
