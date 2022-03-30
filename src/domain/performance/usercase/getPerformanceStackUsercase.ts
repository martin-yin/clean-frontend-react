import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { performanceWebRepositoryMapper } from '../repositories/mapper/performanceWebRepositoryMapper'
import { performanceWebRepository } from '../repositories/performanceWebRepository'

export const getPerformanceStackUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromPerformanceStackModel } = performanceWebRepositoryMapper()
  const { getPerformanceStack } = performanceWebRepository()
  const { data, code, msg } = await getPerformanceStack(param)
  if (code === 200) {
    return mapFromPerformanceStackModel(data)
  } else {
    message.error(msg)
    return null
  }
}
