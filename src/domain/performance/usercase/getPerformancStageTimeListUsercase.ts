import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { performanceWebRepositoryMapper } from '../repositories/mapper/performanceWebRepositoryMapper'
import { performanceWebRepository } from '../repositories/performanceWebRepository'

export const getPerformanceStageTimeListUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromPerformanceStageTimeListModel } = performanceWebRepositoryMapper()
  const { getPerformanceStageTimeList } = performanceWebRepository()
  const { data, code, msg } = await getPerformanceStageTimeList(param)
  if (code === 200) {
    return mapFromPerformanceStageTimeListModel(data)
  } else {
    message.error(msg)
    return null
  }
}
