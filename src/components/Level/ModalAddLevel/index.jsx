import { Button, Form, Input, Modal } from "antd";
import React from "react";



const ModalAddLevel = ({isModalOpen,handleCancel,keyword,pageNumber,pageSize}) => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    console.log(values);
    handleCancel();
  };

  return (
    <>
      <Form
        {...formItemLayout}
        variant="filled"
        form={form}
        onFinish={handleFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          label="Level Name"
          name="name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ModalAddLevel;
