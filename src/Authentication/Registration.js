import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined,GoogleOutlined } from '@ant-design/icons';
import './Login.css'


const Registration = () => {
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    if(values.password === values.cnfpassword){
      
      window.location.href="http://localhost:3000/Flightlist"; 
      alert('Successfully Registered!'); 
    
   }else{
      alert("Sorry! Give one more try");
      
  }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email',
          },
        ]}
      >
        <Input type='email' prefix={<GoogleOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="cnfpassword"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Conform Password"
        />
      </Form.Item>

    <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
    </Form.Item>
    

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        Or <Link to="/Login">Already Registered!</Link>
      </Form.Item>
    </Form>
  );
};

export default Registration