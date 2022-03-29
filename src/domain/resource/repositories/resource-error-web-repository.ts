import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse, request } from '@/utils/request'
import { ResourceErrorListQuotaEntity, ResourceErrorRepository } from '../model/resource.error.entity'

export const ResourceErrorWebRepository: ResourceErrorRepository = {
  async getStaticErr(filterHeaderParams: FilterHeaderParams): Promise<IResponse<ResourceErrorListQuotaEntity>> {
    return await request<ResourceErrorListQuotaEntity>('get', '/communal/staticErr', filterHeaderParams)
  }
}
