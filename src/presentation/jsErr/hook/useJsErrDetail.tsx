import { JsErrorModel, StackFrameListModel, StackFrameModel } from '@/domain/jserror/model/js-error.model'
import React, { useMemo } from 'react'
import { createContext, useContext, useState } from 'react'

export interface JsErrProviderState {
  jsError: JsErrorModel
  visible: boolean
  stackFrameList: StackFrameListModel
  stackFrame: StackFrameModel
  updateJsError: (value: JsErrorModel) => void
  updateStackFrame: (value: StackFrameModel) => void
  updateStackFrameList: (value: StackFrameListModel) => void
  updateVisible: (value: boolean) => void
}

export const JsErrContext = createContext<JsErrProviderState>({
  jsError: {} as any,
  visible: false,
  stackFrameList: [],
  stackFrame: {} as any,
  updateJsError(value: JsErrorModel) {
    throw new Error('JsErrContext not yet initialized.')
  },
  updateStackFrame(value: StackFrameModel) {
    throw new Error('JsErrContext not yet initialized.')
  },
  updateStackFrameList(value: StackFrameListModel) {
    throw new Error('JsErrContext not yet initialized.')
  },
  updateVisible(value: boolean) {
    throw new Error('JsErrContext not yet initialized.')
  }
})

export const useJsErrContext = () => {
  const value = useContext(JsErrContext)
  return value
}

export const JsErrorProvider = ({ children }) => {
  const [jsError, setJsError] = useState<JsErrorModel>()
  const [visible, setVisible] = useState<boolean>(false)
  const [stackFrameList, setStackFrameList] = useState<StackFrameListModel>()
  const [stackFrame, setStackFrame] = useState<StackFrameModel>()

  const value = useMemo(
    () => ({
      jsError,
      visible,
      stackFrameList,
      stackFrame,
      updateVisible: setVisible,
      updateJsError: setJsError,
      updateStackFrame: setStackFrame,
      updateStackFrameList: setStackFrameList
    }),
    [jsError, visible, stackFrameList, stackFrame, setVisible, setJsError, setStackFrame, setStackFrameList]
  )
  return <JsErrContext.Provider value={value}>{children}</JsErrContext.Provider>
}
