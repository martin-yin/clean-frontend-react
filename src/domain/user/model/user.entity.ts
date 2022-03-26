import { IResponse } from '../../../utils/request'
import { GetUserListParams } from './user.model'

export interface UserRepository {
  getUserList(params: GetUserListParams): Promise<IResponse<UserListEntity>>
  getUserActionList(params: {
    session_id: string
    page: number
    limit: number
  }): Promise<IResponse<UserActionListEntity>>
  getUser(id: string): Promise<IResponse<UserEntity>>
  getUserActionStatisticList(params: { session_id: string }): Promise<IResponse<UserActionStatisticListEntity>>
}

export interface UserActionDetailBase {
  action_type: string
  device: string
  device_type: string
  os: string
  os_version: string
  browser: string
  browser_version: string
  happen_time: string
  ua: string
}

export interface UserEntity extends UserActionDetailBase {
  user_id: string
  system: string
  ip: string
  address: string
  nation: string
  province: string
  city: string
  district: string
  session_id: string
  id: string
  created_at: string
  updated_at: string
}

export type UserListEntity = Array<UserEntity>

export type UserActionEntity = Record<
  'action_type' | 'happen_day' | 'happen_time' | 'monitor_id' | 'session_id' | 'user_id',
  string
> & {
  action_detail: string
}

export interface UserActionListEntity {
  total: number
  user_actions_list: Array<UserActionEntity>
}

export interface UserActionStatisticEntity {
  action_type: string
  total: number
}

export type UserActionStatisticModel = UserActionStatisticEntity

export type UserActionStatisticListEntity = Array<UserActionStatisticModel>

export type PAGE_LOAD = 'load_type'
export type HTTP_LOG = 'http_url' | 'request_text' | 'response_text'
export type RESOURCE = 'element_type' | 'source_url'
export type OPERATION = 'tag_name' | 'inner_text' | 'class_name'
