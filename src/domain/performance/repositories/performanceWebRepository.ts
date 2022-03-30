import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse, request } from '@/code/lib/request'
import {
  PerformanceListEntity,
  PerformanceQuotaEntity,
  PerformanceRepository,
  PerformanceStackEntity,
  PerformanceStageTimeListEntity
} from '../model/performanceEntity'

export function performanceWebRepository(): PerformanceRepository {
  const getPerformancQuota = async (params: FilterHeaderParams): Promise<IResponse<PerformanceQuotaEntity>> => {
    return await request<PerformanceQuotaEntity>('get', '/communal/performanceQuota', params)
  }
  const getPerformanceStack = async (params: FilterHeaderParams): Promise<IResponse<PerformanceStackEntity>> => {
    return await request<PerformanceStackEntity>('get', '/communal/performanceStack', params)
  }
  const getPerformancePageList = async (params: FilterHeaderParams): Promise<IResponse<PerformanceListEntity>> => {
    return await request<PerformanceListEntity>('get', '/communal/performancePages', params)
  }
  const getPerformanceStageTimeList = async (
    params: FilterHeaderParams
  ): Promise<IResponse<PerformanceStageTimeListEntity>> => {
    return await request<PerformanceStageTimeListEntity>('get', '/communal/performanceStageTime', params)
  }

  return { getPerformancQuota, getPerformanceStack, getPerformancePageList, getPerformanceStageTimeList }
}
