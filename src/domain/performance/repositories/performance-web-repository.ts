import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse, request } from '@/utils/request'
import {
  PerformanceListEntity,
  PerformanceQuotaEntity,
  PerformanceRepository,
  PerformanceStackEntity,
  PerformanceStageTimeListEntity
} from '../model/performance.entity'

export const PerformanceWebRepository: PerformanceRepository = {
  async getPerformancQuota(params: FilterHeaderParams): Promise<IResponse<PerformanceQuotaEntity>> {
    return await request<PerformanceQuotaEntity>('get', '/communal/performanceQuota', params)
  },
  async getPerformanceStack(params: FilterHeaderParams): Promise<IResponse<PerformanceStackEntity>> {
    return await request<PerformanceStackEntity>('get', '/communal/performanceStack', params)
  },
  async getPerformancePageList(params: FilterHeaderParams): Promise<IResponse<PerformanceListEntity>> {
    return await request<PerformanceListEntity>('get', '/communal/performancePages', params)
  },
  async getPerformanceStageTimeList(params: FilterHeaderParams): Promise<IResponse<PerformanceStageTimeListEntity>> {
    return await request<PerformanceStageTimeListEntity>('get', '/communal/performanceStageTime', params)
  }
}
