import { useJsErrorAdapter } from '@/domain/jserror/adapter/jsErrorAdapter'
import { ModalFrom } from '@/features/modalForm/modalForm'
import { InboxOutlined } from '@ant-design/icons'
import { Form, Input, Tabs, Upload } from 'antd'
import React from 'react'

const { Dragger } = Upload
const { TabPane } = Tabs

const SourceMapLoadModal = React.memo<{ visible: boolean }>(({ visible = false }) => {
  const { props, form, handleCloseModel, handleModelFormCreate } = useJsErrorAdapter()

  return (
    <ModalFrom onClose={handleCloseModel} visible={visible} onCreate={handleModelFormCreate} title="SouceMap映射">
      <Tabs>
        <TabPane tab="本地上传" key="1">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text"></p>
            <p className="ant-upload-hint">点击上传或把.map文件拖拽至此</p>
          </Dragger>
        </TabPane>
        <TabPane tab="远程加载" key="2">
          <Form
            {...{
              labelCol: { span: 0 },
              wrapperCol: { span: 24 }
            }}
            form={form}
            name="basic"
          >
            <Form.Item name="url" label="源码地址" rules={[{ required: true, message: '请输入源码地址!' }]}>
              <Input placeholder="请输入源码地址" />
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </ModalFrom>
  )
})

export default SourceMapLoadModal
