import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import ImageSTU from "../../assets/hinhtruong.jpg";
import authService from "../../service/auth.service";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const data = {
        email: values.email,
        password: values.password,
      };
      const user = await authService.login(data);
  
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('user', JSON.stringify(user));
  
      // Điều hướng dựa trên vai trò của người dùng
      if (user?.role === "Role_Admin") {
        navigate("/dashboard");
      } else if (user?.role === "Role_Student") {
        navigate("/student");  // Đưa người dùng quay lại trang chủ
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        margin:"40px 0",
        // height: "100vh",
        // backgroundImage: `url(${ImageSTU})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 24, // Đặt span 24 cho label để căn trái
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          width: 600, // Đặt chiều rộng của form là 600px
          backgroundColor: "#eee",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          position: "relative", 
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={1} style={{ textAlign: "center" }}>
          Đăng Nhập
        </Title>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          style={{marginBottom:"5px"}}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          style={{marginBottom:"5px"}}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "48%", // Button chiếm 48% chiều rộng để 2 button ngang nhau
            }}
          >
            Đăng Nhập
          </Button>
          <Button
            type="dashed"
            onClick={handleBackHome}
            style={{
              width: "48%",
              marginLeft: "4%",
              backgroundColor: "#fff",
              color: "#0866ff",
            }}
          >
            Back Home
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
