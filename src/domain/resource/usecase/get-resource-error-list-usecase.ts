import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { ResourceErrorListQuotaModel } from '../model/resource.error.model'
import { ResourceWebRepositoryMapper } from '../repositories/mapper/resource-mapper-web-repository.mapper'
import { ResourceErrorWebRepository } from '../repositories/resource-error-web-repository'

export const getResourceErrorList = async (filterHeaderParams: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromResourceErrorModel } = ResourceWebRepositoryMapper()
  const { data, code, msg } = await ResourceErrorWebRepository.getStaticErr(filterHeaderParams)
  if (code == 200) {
    return mapFromResourceErrorModel(data)
  } else {
    message.error(msg)
    return {} as ResourceErrorListQuotaModel
  }
}
