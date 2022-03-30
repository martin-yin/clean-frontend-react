import { useHttpErrAdapter } from '@/domain/http/adapter/htttErrAdapter'
import FilterHeader from '@/features/filterHeader/filterHeader'
import { Card, Table, Tag } from 'antd'
import moment from 'moment'
import React, { FC } from 'react'

const HttpErrPage: FC = () => {
  const { httpErrList } = useHttpErrAdapter()
  const columns = [
    {
      title: '请求URL',
      dataIndex: 'url',
      key: 'url'
    },
    {
      title: '请求参数',
      dataIndex: 'requestRext',
      key: 'requestRext'
    },
    {
      title: '出现时间',
      render: (text: string, recode) => <p>{moment(recode?.lastHappenTime).fromNow()}</p>
    },
    {
      title: '状态码',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => <Tag color="#f50">{text}</Tag>
    },
    {
      title: '影响用户',
      dataIndex: 'userTotal',
      key: 'userTotal'
    }
  ]

  return (
    <Card>
      <FilterHeader />
      <Table dataSource={httpErrList} columns={columns} rowKey="url" />
    </Card>
  )
}
export default HttpErrPage
