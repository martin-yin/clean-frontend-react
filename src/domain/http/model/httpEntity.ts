import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse } from '@/infrastructure/lib/request'

export interface HttpRepository {
  getHttpQuota(params: FilterHeaderParams): Promise<IResponse<HttpQuotaEntity>>
  getHttpList(params: FilterHeaderParams): Promise<IResponse<HttpListEntity>>
  getHttpErrorList(params: FilterHeaderParams): Promise<IResponse<HttpListEntity>>
  getHttpStageTimeList(params: FilterHeaderParams): Promise<IResponse<HttpStageTimeListEntity>>
}

export interface httpEntity {
  http_url: string
  user_total: number
  load_time: number
  total: number
}

export type HttpListEntity = Array<httpEntity>

export interface HttpStageTimeEntity {
  time_key: string
  load_time: number
  total: number
}

export type HttpStageTimeListEntity = Array<HttpStageTimeEntity>

export interface HttpQuotaEntity {
  error_user: number
  load_time: number
  success_total: number
  total: number
  success_rate: string
}
