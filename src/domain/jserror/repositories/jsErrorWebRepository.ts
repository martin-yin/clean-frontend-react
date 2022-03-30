import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse, request } from '@/code/lib/request'
import { JsErrorEntity, JsErrorListEntity, JsErrorRepository } from '../model/jsErrorEntity'
import { GetJsErrorParamModel } from '../model/jsErrorModel'

export function jsErrorWebRepository(): JsErrorRepository {
  const getJsErrorList = async (param: FilterHeaderParams): Promise<IResponse<JsErrorListEntity>> => {
    return await request<JsErrorListEntity>('get', '/communal/issues', param)
  }
  const getJsError = async (param: GetJsErrorParamModel): Promise<IResponse<JsErrorEntity>> => {
    return await request<JsErrorEntity>('get', `/communal/jsError`, param)
  }

  return { getJsErrorList, getJsError }
}
