import { useHttpAdapter } from '@/domain/http/adapter/httpAdapter'
import FilterHeader from '@/features/filterHeader/filterHeader'
import HeaderQuota from '@/features/headerQuota/headerQuota'
import { Card, Table } from 'antd'
import React, { FC } from 'react'
import { HttpChart } from './components/httpChart'

const HttpPage: FC = () => {
  const { httpQuota, httpList, httpStageTimeList } = useHttpAdapter()

  const columns = [
    {
      title: '请求URL',
      dataIndex: 'url',
      key: 'url'
    },
    {
      title: '慢查询',
      dataIndex: 'userSlow',
      key: 'userSlow'
    },
    {
      title: '平均耗时',
      dataIndex: 'loadTime',
      key: 'loadTime',
      render: (text: string) => <span>{text}ms</span>
    },
    {
      title: '请求次数',
      dataIndex: 'total',
      key: 'total'
    },
    {
      title: '成功率',
      dataIndex: 'successRate',
      key: 'successRate',
      render: (text: string) => <span>{text}%</span>
    },
    {
      title: '用户数',
      dataIndex: 'userTotal',
      key: 'userTotal'
    }
  ]

  const quotaTitleUnitKeys = [
    {
      title: '请求次数',
      key: 'total',
      unit: ''
    },
    {
      title: '请求耗时',
      key: 'loadTime',
      unit: 'ms'
    },
    {
      title: '成功率',
      key: 'successRate',
      unit: '%'
    },
    {
      title: '异常影响用户',
      key: 'errorUser',
      unit: ''
    }
  ]

  return (
    <>
      <FilterHeader />
      <HeaderQuota quotaTitleUnitKeys={quotaTitleUnitKeys} quota={httpQuota} />
      <Card className="time__pciker_chart_warp">
        <HttpChart httpConsumes={httpStageTimeList} />
      </Card>
      <Card>
        <Table dataSource={httpList} columns={columns} rowKey="url" />
      </Card>
    </>
  )
}

export default HttpPage
