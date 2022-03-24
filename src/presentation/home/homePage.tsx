import { Form, message } from 'antd'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { InjectFactoryGet } from '../../code/decorator'
import { CreateProjectParams, ProjectStatusModel } from '../../domain/project/model/project.model'
import { CreateProjectUseCase } from '../../domain/project/usecase/create-project-usercase'
import { GetProjectStatusListUseCase } from '../../domain/project/usecase/get-project-status-list-usercase'
import { useFormValidateFields } from '../../utils/toolhook'
import CreateProject from './components/createProject'
import { HealthStatus } from './components/healthStatus'
import './index.less'
const HomePage: FC = () => {
  const createProject = InjectFactoryGet<CreateProjectUseCase>(CreateProjectUseCase)
  const getProjectStatusList = InjectFactoryGet<GetProjectStatusListUseCase>(GetProjectStatusListUseCase)
  const [projectStatusList, setProjectStatusList] = useState<Array<ProjectStatusModel>>([])
  const [form] = Form.useForm()
  const formValidateFields = useFormValidateFields(form)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    ;(async () => {
      const data = await getProjectStatusList.execute()
      setProjectStatusList(data)
    })()
  }, [])

  const handleCreateProject = useCallback(async () => {
    formValidateFields(async (value: CreateProjectParams) => {
      await createProject.execute(value)
    })
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
      <CreateProject visible={visible} onClose={handleCloseModal} onCreate={handleCreateProject} form={form} />
      <HealthStatus list={projectStatusList} openModal={handleOpenModal} />
    </>
  )
}

export default HomePage
