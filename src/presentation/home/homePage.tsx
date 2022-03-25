import { Form } from 'antd'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { ProjectStatusModel } from '../../domain/project/model/project.model'
import { CreateProjectUseCase } from '../../domain/project/usecase/create-project-usercase'
import { GetProjectStatusListUseCase } from '../../domain/project/usecase/get-project-status-list-usercase'
import { useFormValidateFields } from '../../utils/toolhook'
import CreateProject from './components/createProject'
import { HealthStatus } from './components/healthStatus'
import './index.less'
const HomePage: FC = () => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()
  const formValidateFields = useFormValidateFields(form)
  const [projectStatusList, setProjectStatusList] = useState<Array<ProjectStatusModel>>([])

  const createProject = CreateProjectUseCase(formValidateFields)
  const getProjectStatusList = GetProjectStatusListUseCase()

  useEffect(() => {
    ;(async () => {
      const data = await getProjectStatusList()
      setProjectStatusList(data)
    })()
  }, [])

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
