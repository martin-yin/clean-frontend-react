import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { httpWebRepository } from '../repositories/httpWebRepository'
import { httpWebRepositoryMapper } from '../repositories/mapper/httpWebRepositoryMapper'

export const getHttpStageUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromHttpStageTimeListModel } = httpWebRepositoryMapper()
  const { getHttpStageTimeList } = httpWebRepository()
  const { data, code, msg } = await getHttpStageTimeList(param)
  if (code === 200) {
    return mapFromHttpStageTimeListModel(data)
  } else {
    message.error(msg)
    return null
  }
}
