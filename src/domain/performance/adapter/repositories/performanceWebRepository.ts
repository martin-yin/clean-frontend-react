import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { HttpService } from '@/infrastructure/interface/http'
import { IResponse, request } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'
import {
  PerformanceListEntity,
  PerformanceQuotaEntity,
  PerformanceRepository,
  PerformanceStackEntity,
  PerformanceStageTimeListEntity
} from '../../model/performanceEntity'

@injectable()
export class PerformanceWebRepository implements PerformanceRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}
  async getPerformancQuota(params: FilterHeaderParams): Promise<IResponse<PerformanceQuotaEntity>> {
    return await this.webHttpService.get('/communal/performanceQuota', params)
  }
  async getPerformanceStack(params: FilterHeaderParams): Promise<IResponse<PerformanceStackEntity>> {
    return await this.webHttpService.get('/communal/performanceStack', params)
  }
  async getPerformancePageList(params: FilterHeaderParams): Promise<IResponse<PerformanceListEntity>> {
    return await this.webHttpService.get('/communal/performancePages', params)
  }
  async getPerformanceStageTimeList(params: FilterHeaderParams): Promise<IResponse<PerformanceStageTimeListEntity>> {
    return await this.webHttpService.get('/communal/performanceStageTime', params)
  }
}
