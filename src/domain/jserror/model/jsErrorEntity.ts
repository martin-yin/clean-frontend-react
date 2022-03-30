import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { IResponse } from '@/code/lib/request'
import { GetJsErrorParamModel } from './jsErrorModel'

export interface JsErrorRepository {
  getJsErrorList(param: FilterHeaderParams): Promise<IResponse<JsErrorListEntity>>
  getJsError(param: GetJsErrorParamModel): Promise<IResponse<JsErrorEntity>>
}

export interface JsErrorEntity {
  id: number
  page_url: string
  componentName: string
  message: string
  stack: string
  error_name: string
  stack_frames: string
  js_issues_id: number
  previous_error_id: number
  next_error_id: number
  user_id: string
  monitor_id: string
  action_type: string
  happen_time: number
  happen_day: string
  ip: string
  session_id: string
  device: string
  device_type: string
  os: string
  os_version: string
  browser: string
  browser_version: string
  ua: string
  nation: string
  province: string
  city: string
  district: string
  created_at: string
  total: string
  today: string
  error_user: string
  last_time: string
  first_time: string
}

export type JsErrorListEntity = Array<JsErrorEntity>
