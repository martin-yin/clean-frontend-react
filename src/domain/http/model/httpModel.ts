import { CasedProperties } from '@/infrastructure/interface'
import { httpEntity, HttpQuotaEntity } from './httpEntity'

export interface HttpStageTimeListModel {
  total: Array<{
    time: string
    value: number
    type: string
  }>
  timeConsumes: Array<{
    time: string
    count: number
    name: string
  }>
}

export type HttpModel = CasedProperties<httpEntity>

export type HttpListModel = Array<HttpModel>

export type HttpQuotaModel = CasedProperties<HttpQuotaEntity>
