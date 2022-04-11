import FilterHeader from '@/features/filterHeader/filterHeader'
import HeaderQuota from '@/features/headerQuota/headerQuota'
import { Card, Table, Tag } from 'antd'
import React, { FC } from 'react'
import { PerformanceChart } from './components/performanceChart'
import { StackBarChar } from './components/stackBarChar'
import { usePerformanceAdapter } from './hook/performanceAdapter'

const PerformancePage: FC = () => {
  const { quota, stackConsumes, performanceConsumes, performances } = usePerformanceAdapter()
  const columns = [
    {
      title: '页面url',
      dataIndex: 'pageUrl',
      key: 'pageUrl'
    },
    {
      title: '首字节',
      dataIndex: 'ttfb',
      key: 'ttfb',
      render: (text: string) => <span>{text}ms</span>
    },
    {
      title: 'DOM处理',
      dataIndex: 'domParse',
      key: 'domParse',
      render: (text: string) => <span>{text}ms</span>
    },

    {
      title: 'event 事件',
      dataIndex: 'loadEvent',
      key: 'loadEvent',
      render: (text: string) => <span>{text}ms</span>
    },
    {
      title: '完全加载',
      dataIndex: 'loadPage',
      key: 'loadPage',
      render: (text: string) => <span>{text}ms</span>
    },
    {
      title: '加载类型',
      dataIndex: 'loadType',
      key: 'loadType',
      render: (text: string) => <Tag color={text === 'reload' ? '#2db7f5' : '#87d068'}>{text}</Tag>
    },
    {
      title: '采样pv',
      dataIndex: 'pv',
      key: 'pv'
    }
  ]

  const quotaTitleUnitKeys = [
    {
      title: '首字节',
      key: 'ttfb',
      unit: 'ms'
    },
    {
      title: 'DOM Ready',
      key: 'domParse',
      unit: 'ms'
    },
    {
      title: '页面完全加载',
      key: 'loadPage',
      unit: 'ms'
    },
    {
      title: '采样PV',
      key: 'pv',
      unit: ''
    },
    {
      title: '2s 快开占比',
      key: 'fast',
      unit: '%'
    }
  ]

  return (
    <>
      <FilterHeader />
      <HeaderQuota quotaTitleUnitKeys={quotaTitleUnitKeys} quota={quota} />
      <Card className="consume_time_charts">
        <PerformanceChart performanceConsumes={performanceConsumes} />
        <Card>
          <StackBarChar stackConsumes={stackConsumes} />
        </Card>
      </Card>
      <Card>
        <Table dataSource={performances} columns={columns} rowKey="page_url" />
      </Card>
    </>
  )
}

export default PerformancePage
