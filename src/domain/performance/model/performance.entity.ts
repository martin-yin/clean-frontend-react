import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse } from '@/utils/request'

export interface PerformanceRepository {
  getPerformancQuota(params: FilterHeaderParams): Promise<IResponse<PerformanceQuotaEntity>>
  getPerformanceStack(params: FilterHeaderParams): Promise<IResponse<PerformanceStackEntity>>
  getPerformancePageList(params: FilterHeaderParams): Promise<IResponse<PerformanceListEntity>>
  getPerformanceStageTimeList(params: FilterHeaderParams): Promise<IResponse<PerformanceStageTimeListEntity>>
}

export type PerformanceQuotaEntity = Record<'dom_parse' | 'load_page' | 'pv', number> & { fast: string }
export type PerformanceEntity = Record<'page_url' | 'ttfb' | 'dom_parse' | 'load_event' | 'load_type' | 'pv', number>
export type PerformanceListEntity = Array<PerformanceEntity>
export type PerformanceStageTimeEntity = Omit<PerformanceEntity, 'page_url' | 'load_type'> &
  Record<'redirect' | 'appcache' | 'lookup_domain' | 'tcp' | 'request' | 'load_page' | 'ssl_t', number> & {
    time_key: string
  }
export type PerformanceStageTimeListEntity = Array<PerformanceStageTimeEntity>
export type PerformanceStackEntity = Omit<PerformanceStageTimeEntity, 'pv' | 'time_key'>
