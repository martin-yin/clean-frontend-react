import { useCreateProjectAdapter } from '@/domain/project/adapter/createProjectAdpater'
import { useGetProjectStatusListAdapter } from '@/domain/project/adapter/getProjectStatusListAdapter'
import { Form } from 'antd'
import React, { FC, useCallback, useState } from 'react'
import CreateProject from './components/createProject'
import { ProjectStatus } from './components/projectStatus'
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
      <ProjectStatus projectStatusList={projectStatusList} openModal={handleOpenModal} />
    </>
  )
}

export default HomePage
