import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu, Select } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProjectModel } from '../../../../domain/project/model/project.model'
import { GetProjectListUseCase } from '../../../../domain/project/usecase/get-project-list-usercase'
import { useAppState } from '../../../../stores'
import { setMonitorId, setMonitorIdAndProject } from '../../../../stores/app.store'
import { useHookTools } from '../../../../utils/toolhook'

const { Option } = Select

const ProjectListRender: FC = () => {
  const { projectList, monitorId } = useAppState(state => state.appsotre)
  const { navigate, storeDispatch } = useHookTools()
  const getProjectList = GetProjectListUseCase()
  useEffect(() => {
    ;(async () => {
      if (projectList.length === 0) {
        const { monitorId, data } = await getProjectList()

        console.log(monitorId, data)
        storeDispatch(
          setMonitorIdAndProject({
            monitorId,
            data
          })
        )
      }
    })()
  }, [])

  const setActiveMonitorId = (value: string) => {
    storeDispatch(setMonitorId(value))
    navigate('/user')
  }

  return (
    <div>
      <Select
        style={{ width: 140, marginRight: '20px' }}
        defaultValue={monitorId}
        key={monitorId}
        onChange={setActiveMonitorId}
      >
        {projectList.map((item: ProjectModel, index: number) => {
          return (
            <Option value={item.monitorId} key={index}>
              {item.projectName}
            </Option>
          )
        })}
      </Select>
    </div>
  )
}

const NavMenu: FC<{
  collapsed: boolean
  toggle: () => void
}> = ({ collapsed, toggle }) => {
  const avatarMenu = (
    <Menu>
      <Menu.Item key="user">修改信息</Menu.Item>
      <Menu.Item key="team">
        <Link to="/system/team">团队管理</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">退出登录</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Header>
      <div className="flex">
        <div className="flex-1">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
        </div>
        <div className="flex content-end">
          <ProjectListRender />
          <Dropdown overlay={avatarMenu} placement="bottomCenter">
            <div>
              <Avatar size={36} src="https://qq.yh31.com/tp/zjbq/202011171044101948.jpg" />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default NavMenu
