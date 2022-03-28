import HeaderQuota from '@/features/headerQuota/headerQuota'
import { Card, Table } from 'antd'
import React, { FC } from 'react'

const StaticErrPage: FC = () => {
  const columns = [
    {
      title: '资源地址',
      dataIndex: 'page_source_url',
      key: 'page_source_url'
    },
    {
      title: '发生页面',
      dataIndex: 'page_url_count',
      key: 'page_url_count'
    },
    {
      title: '影响用户',
      dataIndex: 'user_count',
      key: 'user_count'
    },
    {
      title: '总共次数',
      dataIndex: 'source_count',
      key: 'source_count'
    },
    {
      title: '资源类型',
      dataIndex: 'element_type',
      key: 'element_type'
    }
  ]

  const quotaTitleUnitKeys = [
    {
      title: '异常次数',
      key: 'error_count',
      unit: ''
    },
    {
      title: '异常页面',
      key: 'error_page',
      unit: '%'
    },
    {
      title: '影响用户',
      key: 'error_user',
      unit: ''
    }
  ]

  return (
    <>
      <HeaderQuota quotaTitleUnitKeys={quotaTitleUnitKeys} quota={resourcesData.quota} />
      <Card>
        <Table dataSource={resourcesData.resources_list} columns={columns} rowKey="page_source_url" />
      </Card>
    </>
  )
}

export default StaticErrPage
