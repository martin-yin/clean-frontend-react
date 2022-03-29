import { CasedProperties } from '@/code/interface'
import { ResourceErrorEntity, ResourceErrorQuotaEntity } from './resource.error.entity'

export type ResourceErrorQuotaModel = CasedProperties<ResourceErrorQuotaEntity>

export type ResourceErrorModel = CasedProperties<ResourceErrorEntity>

export type ResourceErrorListModel = Array<ResourceErrorModel>

export interface ResourceErrorListQuotaModel {
  resourceList: ResourceErrorListModel
  quota: ResourceErrorQuotaModel
}
