import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { performanceWebRepositoryMapper } from '../repositories/mapper/performanceWebRepositoryMapper'
import { performanceWebRepository } from '../repositories/performanceWebRepository'

export const getPerformancPageListUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()

  const { mapFromPerformancPageListModel } = performanceWebRepositoryMapper()
  const { getPerformancePageList } = performanceWebRepository()
  const { data, code, msg } = await getPerformancePageList(param)
  if (code === 200) {
    return mapFromPerformancPageListModel(data)
  } else {
    message.error(msg)
    return null
  }
}
