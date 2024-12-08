import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import authService from './service/auth.service'

const onFinish = async(values) => {
  try {
    const data = {
      email: values.email,
      password: values.password
    };
    const user = await authService.login(data);

    // Redirect or update UI after successful login
    console.log('Login successful', user);

  } catch (err) {
    console.error(err.message);
  }

};


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App = () => (


  
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 24,
    }}
    style={{
      maxWidth: 1000,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;