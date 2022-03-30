import { useGetJsErrorListAdapter } from '@/domain/jserror/adapter/get-js-error-list-adapter'
import { JsErrorModel } from '@/domain/jserror/model/js-error.model'
import FilterHeader from '@/features/filterHeader/filterHeader'
import { CloseCircleOutlined, ExclamationCircleOutlined, SyncOutlined } from '@ant-design/icons'
import { Card, Space, Table, Tag } from 'antd'
import moment from 'moment'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const JsErrPage: FC = () => {
  const navigate = useNavigate()

  const { jsErrorList } = useGetJsErrorListAdapter()

  const columns = [
    {
      title: '概况',
      key: 'error_name',
      render: (recode: JsErrorModel) => (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(`/jsErr/detail/${recode.id}`)
          }}
        >
          <Space size="middle">
            <h3>
              <Tag icon={<CloseCircleOutlined />} color="error">
                {recode.errorName}
              </Tag>
            </h3>
            <p>{recode.pageUrl}</p>
          </Space>
          <p>{recode.message}</p>
          <Space size="small">
            <p>{moment(recode?.lastTime).fromNow()}</p>
            <p>{moment(recode?.firstTime).fromNow()}</p>
          </Space>
        </div>
      )
    },
    {
      title: '最后出现时间',
      render: (recode: JsErrorModel) => (
        <Tag icon={<ExclamationCircleOutlined />} color="warning">
          {moment(recode?.lastTime).fromNow()}
        </Tag>
      )
    },
    {
      title: '异常次数(总)',
      key: '',
      render: (recode: JsErrorModel) => <>{recode.total}</>
    },
    {
      title: '影响总数用户',
      key: 'error_user',
      render: (recode: JsErrorModel) => <>{recode.errorUser}</>
    },
    {
      title: '处理人',
      dataIndex: '',
      key: ''
    },
    {
      title: '状态',
      dataIndex: '',
      key: '',
      render: (recode: JsErrorModel) => (
        <p>
          <Tag icon={<SyncOutlined spin />} color="error">
            等待修复
          </Tag>
        </p>
      )
    }
  ]

  return (
    <>
      <FilterHeader />
      <Card>
        <Table dataSource={jsErrorList} columns={columns} rowKey="message" />
      </Card>
    </>
  )
}

export default JsErrPage
