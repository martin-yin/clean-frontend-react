import React, { FC } from 'react'
import { Input, Form, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import './index.less'
import { useAdminRegisterAdapter } from '../../domain/user/adapter/admin-register-adapter'
import { useAdminLoginAdapter } from '../../domain/user/adapter/admin-login-adapter'
const { TabPane } = Tabs

const LoginPage: FC = () => {
  const { adminLogin } = useAdminLoginAdapter()

  const { adminRegister } = useAdminRegisterAdapter()

  return (
    <div className={'login_container mx-auto'}>
      <strong>大家好，我是登录标题</strong>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="登 录" key="1">
          <Form name="basic" initialValues={{ user_name: 'admin', password: '123456' }} onFinish={adminLogin}>
            <Form.Item name="user_name" rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="注 册" key="2">
          <Form
            name="basic"
            initialValues={{ user_name: 'admin', password: '123456', nick_name: '' }}
            onFinish={adminRegister}
          >
            <Form.Item name="user_name" rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="nick_name">
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入昵称" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                注册
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  )
}
export default LoginPage
