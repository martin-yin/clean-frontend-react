import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { HttpService } from '@/infrastructure/interface/http'
import { IResponse, request } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'
import { JsErrorEntity, JsErrorListEntity, JsErrorRepository } from '../../model/jsErrorEntity'
import { GetJsErrorParamModel } from '../../model/jsErrorModel'

@injectable()
export class JsErrorWebRepository implements JsErrorRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}
  async getJsErrorList(params: FilterHeaderParams): Promise<IResponse<JsErrorListEntity>> {
    return await this.webHttpService.get('/communal/issues', params)
  }
  async getJsError(params: GetJsErrorParamModel): Promise<IResponse<JsErrorEntity>> {
    return await this.webHttpService.get('/communal/jsError', params)
  }
}
