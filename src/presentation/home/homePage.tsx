import { Form } from 'antd'
import React, { FC } from 'react'
import CreateProject from './components/createProject'
import { HealthStatus } from './components/healthStatus'

const HomePage: FC = () => {
  // const { list, visible, handleOpenModal, handleCloseModal, handleCreateProject, form } = useHomePageInit()
  const [form] = Form.useForm()
  return (
    <>
      <CreateProject visible={false} onClose={() => {}} onCreate={() => {}} form={form} />
      {/* <HealthStatus list={list} openModal={handleOpenModal} /> */}
    </>
  )
}

export default HomePage
