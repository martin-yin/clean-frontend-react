import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { toUpperCaseData } from '@/code/lib/request'
import { GetJsErrorParamModel, JsErrorModel } from '../model/jsErrorModel'
import { jsErrorWebRepository } from '../repositories/jsErrorWebRepository'

export const getJsErrorUseCase = async (params: GetJsErrorParamModel): Promise<JsErrorModel> => {
  const message: IMessage = useWebMessageServicec()

  const { getJsError } = jsErrorWebRepository()
  const { data, code, msg } = await getJsError(params)
  if (code == 200) {
    data.stack_frames = JSON.parse(data.stack_frames)
    return toUpperCaseData(data) as any
  } else {
    message.error(msg)
    return {} as JsErrorModel
  }
}
