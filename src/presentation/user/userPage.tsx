import { Card, Space, Tag } from 'antd'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useGetUserListAdapter } from '@/domain/user/adapter/getUserListAdapter'
import { UserModel } from '@/domain/user/model/user.model'
import FilterHeader from '@/features/filterHeader/filterHeader'
import TableData from '@/features/tableData/tableData'

import './index.less'

const UserPage: FC = () => {
  const { userList } = useGetUserListAdapter()
  const columns = [
    {
      title: 'userId',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '设备',
      dataIndex: 'deviceInfo',
      key: 'deviceInfo',
      render: (text: string, recode: UserModel) => {
        return (
          <Tag color={recode.deviceType === 'Pc' ? '#2db7f5' : recode.device === 'Android' ? '#87d068' : '#f50'}>
            {text}
          </Tag>
        )
      }
    },
    {
      title: '操作系统',
      dataIndex: 'osInfo',
      key: 'osInfo',
      render: (text: string, recode: UserModel) => {
        return <Tag color="green">{text}</Tag>
      }
    },
    {
      title: '浏览器',
      dataIndex: 'browserInfo',
      key: 'browserInfo'
    },
    {
      title: 'ip',
      dataIndex: 'ip',
      key: 'ip'
    },
    {
      title: '位置',
      dataIndex: '位置',
      key: 'address'
    },
    {
      title: '发生时间',
      dataIndex: 'happenTime',
      key: 'happenTime'
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, recode: UserModel) => (
        <Space size="middle">
          <Link to={`/user/detail/${recode.sessionId}/${recode.id}`}>查看详情</Link>
        </Space>
      )
    }
  ]
  return (
    <>
      <FilterHeader />
      <Card>
        <TableData dataSource={userList} columns={columns} />
      </Card>
    </>
  )
}

export default UserPage
