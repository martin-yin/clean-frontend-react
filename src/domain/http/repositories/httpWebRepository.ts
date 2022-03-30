import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse, request } from '@/code/lib/request'
import { HttpListEntity, HttpQuotaEntity, HttpRepository, HttpStageTimeListEntity } from '../model/httpEntity'

export function httpWebRepository(): HttpRepository {
  const getHttpQuota = async (params: FilterHeaderParams): Promise<IResponse<HttpQuotaEntity>> => {
    return await request<HttpQuotaEntity>('get', '/communal/httpQuota', params)
  }
  const getHttpList = async (params: FilterHeaderParams): Promise<IResponse<HttpListEntity>> => {
    return await request<HttpListEntity>('get', '/communal/https', params)
  }
  const getHttpStageTimeList = async (params: FilterHeaderParams): Promise<IResponse<HttpStageTimeListEntity>> => {
    return await request<HttpStageTimeListEntity>('get', '/communal/httpStage', params)
  }
  const getHttpErrorList = async (params: FilterHeaderParams): Promise<IResponse<HttpListEntity>> => {
    return await request<HttpListEntity>('get', '/communal/httpErrors', params)
  }
  return { getHttpQuota, getHttpList, getHttpStageTimeList, getHttpErrorList }
}
