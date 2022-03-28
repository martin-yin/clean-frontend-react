import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { PerformanceWebRepositoryMapper } from '../repositories/mapper/performance-web-repository.mapper'
import { PerformanceWebRepository } from '../repositories/performance-web-repository'

export const GetPerformanceStackUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()

  const { mapFromPerformanceStack } = PerformanceWebRepositoryMapper()
  const { data, code, msg } = await PerformanceWebRepository.getPerformanceStack(param)
  if (code === 200) {
    return mapFromPerformanceStack(data)
  } else {
    message.error(msg)
    return null
  }
}
