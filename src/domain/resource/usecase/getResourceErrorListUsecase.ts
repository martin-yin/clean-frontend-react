import { IMessage } from '@/code/base/message'
import { useWebMessageServicec } from '@/code/service/web-message-service'
import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { ResourceErrorListQuotaModel } from '../model/resourceErrorModel'
import { resourceWebRepositoryMapper } from '../repositories/mapper/resourceMapperWebRepositoryMapper'
import { resourceErrorWebRepository } from '../repositories/resourceErrorWebRepository'

export const getResourceErrorListUseCase = async (filterHeaderParams: FilterHeaderParams) => {
  const message: IMessage = useWebMessageServicec()
  const { mapFromResourceErrorModel } = resourceWebRepositoryMapper()
  const { getStaticErr } = resourceErrorWebRepository()
  const { data, code, msg } = await getStaticErr(filterHeaderParams)
  if (code == 200) {
    return mapFromResourceErrorModel(data)
  } else {
    message.error(msg)
    return {} as ResourceErrorListQuotaModel
  }
}
