import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { HttpWebRepository } from '../repositories/http-web-repository'
import { PerformanceWebRepositoryMapper } from '../repositories/mapper/http-web-repository.mapper'

export const getHttpStageUseCase = async (param: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromHttpStageTimeList } = PerformanceWebRepositoryMapper()
  const { data, code, msg } = await HttpWebRepository.getHttpStageTimeList(param)
  if (code === 200) {
    return mapFromHttpStageTimeList(data)
  } else {
    message.error(msg)
    return null
  }
}
