import { AdminModel } from '@/domain/admin/model/admin.model'
import { ProjectModel } from '@/domain/project/model/project.model'
import { useGetTeamListAdapter } from '@/domain/team/adapter/get-team-adapter'
import { TeamModel } from '@/domain/team/model/team.model'
import { ModalFrom } from '@/features/modalForm/modalForm'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Space, Table, Tag } from 'antd'
import React, { FC, useState } from 'react'

const TeamPage: FC = () => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()
  const { teamList } = useGetTeamListAdapter()

  const columns = [
    {
      title: '团队名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '团队成员',
      dataIndex: 'adminList',
      key: 'adminList',
      render: (adminList: TeamModel['adminList']) => (
        <>
          {adminList.map((item: AdminModel, index: number) => {
            return <div key={index}>{item.nickName}</div>
          })}
        </>
      )
    },
    {
      title: '项目列表',
      dataIndex: 'teamProjectList',
      key: 'teamProjectList',
      render: (teamProjectList: TeamModel['teamProjectList']) => (
        <>
          {teamProjectList.map((item, index: number) => {
            return (
              <Tag color="#87d068" key={index}>
                {item.projectName}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: record => (
        <Space>
          {/* <Tag color="#2db7f5">添加成员</Tag> */}
          {/* <Tag color="#f50" onClick={() => del(record.id)}>
            删除团队
          </Tag> */}
        </Space>
      )
    }
  ]
  return (
    <div>
      <Card>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          style={{ marginBottom: '10px' }}
          onClick={() => setVisible(true)}
        >
          创建团队
        </Button>
        <Table dataSource={teamList} columns={columns} rowKey="message" />
        <ModalFrom title="创建团队" visible={visible} onCreate={() => {}} onClose={() => setVisible(false)}>
          <Form form={form} preserve={false} name="basic">
            <Form.Item name="name" rules={[{ required: true, message: '请输入项目名称' }]}>
              <Input placeholder="请输入项目名称" />
            </Form.Item>
          </Form>
        </ModalFrom>
      </Card>
    </div>
  )
}

export default TeamPage
