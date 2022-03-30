import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { JsErrorListModel } from '../model/jsErrorModel'
import { jsErrorWebRepository } from '../repositories/jsErrorWebRepository'
import { jsErrorWebRepositoryMapper } from '../repositories/mapper/jsErrorWebRepositoryMapper'

export const getJsErrorListUseCase = async (params: FilterHeaderParams): Promise<JsErrorListModel> => {
  const { mapFromJsErrorModel } = jsErrorWebRepositoryMapper()
  const message: IMessage = useWebMessageServicec()
  const { getJsErrorList } = jsErrorWebRepository()
  const { data, code, msg } = await getJsErrorList(params)
  if (code == 200) {
    return mapFromJsErrorModel(data)
  } else {
    message.error(msg)
    return []
  }
}
