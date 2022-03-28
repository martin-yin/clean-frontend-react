import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { PerformanceWebRepositoryMapper } from '../repositories/mapper/performance-web-repository.mapper'
import { PerformanceWebRepository } from '../repositories/performance-web-repository'

export const GetPerformancQuotaUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromPerformancQuota } = PerformanceWebRepositoryMapper()

  const { data, code, msg } = await PerformanceWebRepository.getPerformancQuota(param)
  if (code === 200) {
    return mapFromPerformancQuota(data)
  } else {
    message.error(msg)
    return null
  }
}
