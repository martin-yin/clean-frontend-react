import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { toUpperCaseData } from '@/utils/request'
import { GetJsErrorParamModel, JsErrorModel } from '../model/js-error.model'
import { JsErrorWebRepository } from '../repositories/js-error-web-repository'

export const getJsErrorUseCase = async (params: GetJsErrorParamModel): Promise<JsErrorModel> => {
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await JsErrorWebRepository.getJsError(params)
  if (code == 200) {
    data.stack_frames = JSON.parse(data.stack_frames)
    return toUpperCaseData(data) as any
  } else {
    message.error(msg)
    return {} as JsErrorModel
  }
}
