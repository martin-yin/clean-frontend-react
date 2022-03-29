import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { JsErrorListModel } from '../model/js-error.model'
import { JsErrorWebRepository } from '../repositories/js-error-web-repository'
import { JsErrorWebRepositoryMapper } from '../repositories/mapper/js-error-web-repository.mapper'

export const getJsErrorListUseCase = async (params: FilterHeaderParams): Promise<JsErrorListModel> => {
  const { mapFromJsErrorModel } = JsErrorWebRepositoryMapper()
  const message: IMessage = useWebMessageServicec()
  const { data, code, msg } = await JsErrorWebRepository.getJsErrorList(params)
  if (code == 200) {
    return mapFromJsErrorModel(data)
  } else {
    message.error(msg)
    return []
  }
}
