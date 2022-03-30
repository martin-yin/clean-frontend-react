import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse, request } from '@/code/lib/request'
import { ResourceErrorListQuotaEntity, ResourceErrorRepository } from '../model/resourceErrorEntity'

export function resourceErrorWebRepository(): ResourceErrorRepository {
  const getStaticErr = async (
    filterHeaderParams: FilterHeaderParams
  ): Promise<IResponse<ResourceErrorListQuotaEntity>> => {
    return await request<ResourceErrorListQuotaEntity>('get', '/communal/staticErr', filterHeaderParams)
  }

  return { getStaticErr }
}
