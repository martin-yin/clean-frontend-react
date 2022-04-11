import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { HttpService } from '@/infrastructure/interface/http'
import { IResponse } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'

import { HttpListEntity, HttpQuotaEntity, HttpRepository, HttpStageTimeListEntity } from '../../model/httpEntity'

@injectable()
export class AdminWebRepository implements HttpRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}
  async getHttpQuota(params: FilterHeaderParams): Promise<IResponse<HttpQuotaEntity>> {
    return await this.webHttpService.get<HttpQuotaEntity, FilterHeaderParams>('/communal/httpQuota', params)
  }
  async getHttpList(params: FilterHeaderParams): Promise<IResponse<HttpListEntity>> {
    return await this.webHttpService.get<HttpListEntity, FilterHeaderParams>('/communal/https', params)
  }
  async getHttpErrorList(params: FilterHeaderParams): Promise<IResponse<HttpListEntity>> {
    return await this.webHttpService.get<HttpListEntity, FilterHeaderParams>('/communal/httpStage', params)
  }
  async getHttpStageTimeList(params: FilterHeaderParams): Promise<IResponse<HttpStageTimeListEntity>> {
    return await this.webHttpService.get<HttpStageTimeListEntity, FilterHeaderParams>('/communal/httpErrors', params)
  }
}
