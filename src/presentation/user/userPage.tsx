import { Card, Space, Tag } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetUserListAdapter } from '../../domain/user/adapter/get-user-list-adapter'
import { UserModel } from '../../domain/user/model/user.model'
import FilterHeader from '../../features/filterHeader/filterHeader'
import TableData from '../../features/tableData/tableData'

import './index.less'

const UserPage: FC = () => {
  const { userList } = useGetUserListAdapter()

  const columns = [
    {
      title: 'user_id',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '设备',
      dataIndex: 'device',
      key: 'device',
      render: (text: string, recode: UserModel) => {
        return (
          <Tag color={recode.deviceType === 'Pc' ? '#2db7f5' : recode.device === 'Android' ? '#87d068' : '#f50'}>
            {recode.device} / {recode.deviceType}
          </Tag>
        )
      }
    },
    {
      title: '操作系统',
      dataIndex: '操作系统',
      key: 'system',
      render: (text: string, recode: UserModel) => {
        return <Tag color="green">{`${recode.os} ${recode.osVersion}`}</Tag>
      }
    },
    {
      title: '浏览器',
      dataIndex: 'browser',
      key: 'browser',
      render: (text: string, recode: UserModel) => {
        return <>{`${recode.browser} ${recode.browserVersion}`}</>
      }
    },
    {
      title: 'ip',
      dataIndex: 'ip',
      key: 'ip'
    },
    {
      title: '位置',
      dataIndex: '位置',
      key: 'address',
      render: (text: string, recode: UserModel) => {
        return <>{`${recode.nation}${recode.province}${recode.city}${recode.district}`}</>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'happenTime',
      key: 'happenTime',
      render: (text: string) => {
        return text
      }
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
