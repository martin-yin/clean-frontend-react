import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse } from '@/infrastructure/lib/request'

export abstract class ResourceErrorRepository {
  abstract getStaticErr(filterHeaderParams: FilterHeaderParams): Promise<IResponse<ResourceErrorListQuotaEntity>>
}

export interface ResourceErrorQuotaEntity {
  error_count: number
  error_page: number
  error_user: number
}

export interface ResourceErrorEntity {
  page_source_url: string
  page_url_count: string
  user_count: string
  source_count: string
  element_type: string
}

export type ResourceErrorListEntity = Array<ResourceErrorEntity>

export interface ResourceErrorListQuotaEntity {
  resource_list: ResourceErrorListEntity
  quota: ResourceErrorQuotaEntity
}
