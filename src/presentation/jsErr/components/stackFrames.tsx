import { Collapse, Empty } from 'antd'
import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons'
import StackFrameItem from './stackFrameItem'
import { useJsErrContext } from '../hook/useJsErrDetail'
import { StackFrameModel } from '@/domain/jserror/model/js-error.model'
const { Panel } = Collapse

const StackFramesRender = React.memo(() => {
  const { stackFrameList } = useJsErrContext()
  return (
    <>
      <h4>Js异常堆栈:</h4>
      {stackFrameList?.length > 0 ? (
        <Collapse
          bordered={false}
          accordion
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className="site-collapse-custom-collapse"
        >
          {stackFrameList.map((item: StackFrameModel, index: number) => {
            return (
              <Panel header={item.fileName} key={index} className="site-collapse-custom-panel">
                <StackFrameItem item={item} index={index} />
              </Panel>
            )
          })}
        </Collapse>
      ) : (
        <Empty></Empty>
      )}
    </>
  )
})
export default StackFramesRender
