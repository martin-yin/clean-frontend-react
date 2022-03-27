import { Layout } from 'antd'
import React, { FC, Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import logo from '@/assets/logo.png'
import NavMenu from './components/components/navMenu'
import SiderMenu from './components/components/siderMenu'
import './index.less'
const { Sider, Content } = Layout

export const OutletLayout: FC = () => {
  return <Outlet />
}

const LayoutPage: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <Sider collapsed={collapsed} theme="light">
        <div className="logo">
          <img src={logo} />
        </div>
        <SiderMenu />
      </Sider>
      <Layout className="site-layout">
        <NavMenu toggle={toggle} collapsed={collapsed} />
        <Content>
          <Suspense fallback={<>加载中</>}>
            <OutletLayout />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
