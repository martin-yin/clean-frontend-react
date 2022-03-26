import { Form } from 'antd'
import React, { FC, useCallback, useState } from 'react'
import { useCreateProjectAdapter } from '../../domain/project/adapter/create-project-adpater'
import { useGetProjectStatusListAdapter } from '../../domain/project/adapter/get-project-status-list-adapter'
import { ProjectStatusModel } from '../../domain/project/model/project.model'
import CreateProject from './components/createProject'
import { HealthStatus } from './components/healthStatus'
import './index.less'
const HomePage: FC = () => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()
  const { createProject } = useCreateProjectAdapter(form)
  const { projectStatusList } = useGetProjectStatusListAdapter()

  const handleCloseModal = useCallback(() => {
    form.resetFields()
    setVisible(false)
  }, [])

  const handleOpenModal = useCallback(() => {
    setVisible(true)
  }, [])

  return (
    <>
      <CreateProject visible={visible} onClose={handleCloseModal} onCreate={createProject} form={form} />
      <HealthStatus list={projectStatusList} openModal={handleOpenModal} />
    </>
  )
}

export default HomePage
