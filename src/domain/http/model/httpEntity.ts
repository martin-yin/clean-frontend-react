import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse } from '@/infrastructure/lib/request'

export abstract class HttpRepository {
  abstract getHttpQuota(params: FilterHeaderParams): Promise<IResponse<HttpQuotaEntity>>
  abstract getHttpList(params: FilterHeaderParams): Promise<IResponse<HttpListEntity>>
  abstract getHttpErrorList(params: FilterHeaderParams): Promise<IResponse<HttpListEntity>>
  abstract getHttpStageTimeList(params: FilterHeaderParams): Promise<IResponse<HttpStageTimeListEntity>>
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
