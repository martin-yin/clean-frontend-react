import { IResponse, request } from '@/code/lib/request'
import {
  UserActionListEntity,
  UserActionStatisticListEntity,
  UserEntity,
  UserListEntity,
  UserRepository
} from '../model/userEntity'
import { GetUserListParams } from '../model/userModel'

export function userWebRepository() {
  const getUserList = async (params: GetUserListParams): Promise<IResponse<UserListEntity>> => {
    return await request<UserListEntity>('get', '/communal/users', params)
  }

  const getUser = async (id: string): Promise<IResponse<UserEntity>> => {
    return await request<UserEntity>('get', `/communal/user?id=${id}`)
  }
  const getUserActionList = (params: {
    session_id: string
    page: number
    limit: number
  }): Promise<IResponse<UserActionListEntity>> => {
    return request<UserActionListEntity>('get', '/communal/userActions', params)
  }

  const getUserActionStatisticList = async (params: {
    session_id: string
  }): Promise<IResponse<UserActionStatisticListEntity>> => {
    return await request<UserActionStatisticListEntity>('get', '/communal/userActionStatistics', params)
  }

  return {
    getUserList,
    getUser,
    getUserActionList,
    getUserActionStatisticList
  }
}
