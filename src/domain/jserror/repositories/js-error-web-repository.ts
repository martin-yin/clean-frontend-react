import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse, request } from '@/utils/request'
import { JsErrorEntity, JsErrorListEntity, JsErrorRepository } from '../model/js-error.entity'
import { GetJsErrorParamModel } from '../model/js-error.model'

export const JsErrorWebRepository: JsErrorRepository = {
  async getJsErrorList(param: FilterHeaderParams): Promise<IResponse<JsErrorListEntity>> {
    return await request<JsErrorListEntity>('get', '/communal/issues', param)
  },
  async getJsError(param: GetJsErrorParamModel): Promise<IResponse<JsErrorEntity>> {
    return await request<JsErrorEntity>('get', `/communal/jsError`, param)
  }
}
