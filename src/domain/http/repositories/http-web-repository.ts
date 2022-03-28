import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse, request } from '@/utils/request'
import { HttpListEntity, HttpQuotaEntity, HttpRepository, HttpStageTimeListEntity } from '../model/http.entity'

export const HttpWebRepository: HttpRepository = {
  async getHttpQuota(params: FilterHeaderParams): Promise<IResponse<HttpQuotaEntity>> {
    return await request<HttpQuotaEntity>('get', '/communal/httpQuota', params)
  },
  async getHttpList(params: FilterHeaderParams): Promise<IResponse<HttpListEntity>> {
    return await request<HttpListEntity>('get', '/communal/https', params)
  },
  async getHttpStageTimeList(params: FilterHeaderParams): Promise<IResponse<HttpStageTimeListEntity>> {
    return await request<HttpStageTimeListEntity>('get', '/communal/httpStage', params)
  },
  async getHttpErrorList(params: FilterHeaderParams): Promise<IResponse<HttpListEntity>> {
    return await request<HttpListEntity>('get', '/communal/httpErrors', params)
  }
}
