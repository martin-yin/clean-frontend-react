import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { httpWebRepository } from '../repositories/httpWebRepository'
import { httpWebRepositoryMapper } from '../repositories/mapper/httpWebRepositoryMapper'

export const getHttpQuotaUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromtHttpQuotaModel } = httpWebRepositoryMapper()
  const { getHttpQuota } = httpWebRepository()
  const { data, code, msg } = await getHttpQuota(param)
  if (code === 200) {
    return mapFromtHttpQuotaModel(data)
  } else {
    message.error(msg)
    return null
  }
}
