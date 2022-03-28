import { CasedProperties } from '@/code/interface'
import { PerformanceEntity, PerformanceQuotaEntity, PerformanceStageTimeEntity } from './performance.entity'

export type PerformanceQuotaModel = CasedProperties<PerformanceQuotaEntity>
export type PerformanceModel = CasedProperties<PerformanceEntity>
export type PerformanceListModel = Array<PerformanceModel>
export type PerformanceStageTimeModel = CasedProperties<PerformanceStageTimeEntity>
export type PerformanceStageTimeListModel = Array<PerformanceStageTimeModel>
export type PerformanceStackModel = Omit<PerformanceStageTimeModel, 'pv' | 'timeKey'>
