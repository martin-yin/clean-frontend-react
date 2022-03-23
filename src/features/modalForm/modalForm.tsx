import { Button, Modal } from 'antd'
import React from 'react'

interface ModalFormProps {
  onCreate: () => void
  onClose: () => void
  title: string
  visible: any
}

export const ModalFrom: React.FC<ModalFormProps> = ({ onCreate, onClose, title, visible, children }) => {
  const colse = () => {
    onClose()
  }

  return (
    visible && (
      <Modal
        forceRender={true}
        maskClosable={false}
        destroyOnClose={true}
        width={640}
        visible={visible}
        title={title}
        onCancel={() => {
          colse()
        }}
        footer={[
          <Button key="submit" type="primary" onClick={() => onCreate()}>
            提 交
          </Button>
        ]}
      >
        {children}
      </Modal>
    )
  )
}
