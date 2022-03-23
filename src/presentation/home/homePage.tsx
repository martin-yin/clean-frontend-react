import { Form } from 'antd'
import React, { FC, useCallback, useState } from 'react'
import { createProjectAdpater } from '../../domain/project/application/create-project-adapter'
import { useFormValidateFields } from '../../utils/toolhook'
import CreateProject from './components/createProject'
import { HealthStatus } from './components/healthStatus'

const HomePage: FC = () => {
  // const { list, visible, handleOpenModal, handleCloseModal, handleCreateProject, form } = useHomePageInit()
  const [form] = Form.useForm()
  const formValidateFields = useFormValidateFields(form)

  const { handleCreateProject } = createProjectAdpater(formValidateFields)
  const [visible, setVisible] = useState(false)
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
      <HealthStatus list={[]} openModal={handleOpenModal} />
    </>
  )
}

export default HomePage
