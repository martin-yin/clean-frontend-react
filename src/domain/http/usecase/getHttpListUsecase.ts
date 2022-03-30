import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { httpWebRepository } from '../repositories/httpWebRepository'
import { httpWebRepositoryMapper } from '../repositories/mapper/httpWebRepositoryMapper'

export const getHttpListUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromtHttpListModel } = httpWebRepositoryMapper()

  const { getHttpList } = httpWebRepository()
  const { data, code, msg } = await getHttpList(param)
  if (code === 200) {
    return mapFromtHttpListModel(data)
  } else {
    message.error(msg)
    return null
  }
}
