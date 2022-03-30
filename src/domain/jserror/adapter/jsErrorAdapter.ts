import { useJsErrContext } from '@/presentation/jsErr/hook/useJsErrDetail'
import { Form, message } from 'antd'
import { RcFile } from 'antd/lib/upload'
import axios, { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import sourceMap from 'source-map-js'
import { StackFrameModel } from '../model/jsErrorModel'

export const LoadSourceMap = (url: string) => axios.get<any>(url)

export const useJsErrorAdapter = () => {
  const [form] = Form.useForm()

  const { updateStackFrameList, updateVisible, updateStackFrame, stackFrameList, stackFrame } = useJsErrContext()
  useEffect(() => {
    form.setFieldsValue({
      url: stackFrame?.source
    })
  }, [stackFrame?.source])
  const props = (function setUploadProps() {
    return {
      multiple: false,
      maxCount: 1,
      action: '',
      beforeUpload(file: RcFile) {
        if (file.name.substring(file.name.lastIndexOf('.') + 1) !== 'map') {
          message.error(`请上传.js.map 文件！`)
          return
        }
        const reader = new FileReader()
        reader.readAsText(file, 'UTF-8')
        reader.onload = event => {
          handleLookSource(event.target.result, stackFrame.lineNumber, stackFrame.columnNumber)
        }
        return false
      }
    }
  })()

  const handleOpenSourceMapModal = (item: StackFrameModel, index) => {
    updateVisible(true)
    updateStackFrame({
      source: item.fileName + '.map',
      index: index,
      ...item
    })
  }

  const handleSetOriginSource = (sourceCode, index) => {
    stackFrameList[index].originSource = {
      ...sourceCode
    }
    updateStackFrameList(stackFrameList)
    updateVisible(false)
  }

  const handleCloseModel = () => {
    updateVisible(false)
  }

  const handleModelFormCreate = () => {
    form.validateFields().then(async (value: { url: string }) => {
      const sourceMapCodeResponse: AxiosResponse<{
        data: any
      }> = await LoadSourceMap(value.url)
      if (sourceMapCodeResponse.status !== 200) {
        message.error(`无法加载source-map文件！`)
        return
      }
      handleLookSource(sourceMapCodeResponse.data, stackFrame.lineNumber, stackFrame.columnNumber)
    })
  }

  const handleLookSource = (sourceMapCode, line: number, column: number) => {
    try {
      const consumer = new sourceMap.SourceMapConsumer(sourceMapCode)
      const lookUpRes = consumer.originalPositionFor({
        line: line,
        column: column
      })
      const source = consumer.sourceContentFor(lookUpRes.source)
      handleSetOriginSource(
        {
          source,
          column: lookUpRes.column,
          line: lookUpRes.line
        },
        stackFrame.index
      )
    } catch (e) {
      console.log(e, 'sourcemap error')
      message.error(`未能解析出sourceMap！`)
      return
    }
  }

  return {
    props,
    handleOpenSourceMapModal,
    handleSetOriginSource,
    handleCloseModel,
    handleModelFormCreate,
    handleLookSource,
    form
  }
}
