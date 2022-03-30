import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { performanceWebRepositoryMapper } from '../repositories/mapper/performanceWebRepositoryMapper'
import { performanceWebRepository } from '../repositories/performanceWebRepository'

export const getPerformancQuotaUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromPerformancQuotaModel } = performanceWebRepositoryMapper()
  const { getPerformancQuota } = performanceWebRepository()
  const { data, code, msg } = await getPerformancQuota(param)
  if (code === 200) {
    return mapFromPerformancQuotaModel(data)
  } else {
    message.error(msg)
    return null
  }
}
