import { IResponse } from '../../../utils/request'
import { GetUserListParams } from './user.model'

export interface UserRepository {
  getUserList(params: GetUserListParams): Promise<IResponse<UserListEntity>>
  getUserActions(params: { session_id: string; page: number; limit: number }): Promise<IResponse<UserActionListEntity>>
  getUser(id: string): Promise<IResponse<UserEntity>>
  getUserActionStatistics(params: { session_id: string }): Promise<IResponse<UserActionStatisticListEntity>>
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

export interface UserActionListEntity {
  total: number
  user_actions_list: UserListEntity
}

export interface UserActionStatisticEntity {
  action_type: string
  total: number
}

export type UserActionStatisticListEntity = Array<UserActionStatisticEntity>
