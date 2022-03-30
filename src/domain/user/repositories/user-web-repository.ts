import { IResponse, request } from '@/code/lib/request'
import {
  UserActionListEntity,
  UserActionStatisticListEntity,
  UserEntity,
  UserListEntity,
  UserRepository
} from '../model/user.entity'
import { GetUserListParams } from '../model/user.model'

export const useWebRepository: UserRepository = {
  async getUserList(params: GetUserListParams): Promise<IResponse<UserListEntity>> {
    const data = await request<UserListEntity>('get', '/communal/users', params)
    return data
  },
  async getUser(id: string): Promise<IResponse<UserEntity>> {
    const data = await request<UserEntity>('get', `/communal/user?id=${id}`)
    return data
  },
  async getUserActionList(params: {
    session_id: string
    page: number
    limit: number
  }): Promise<IResponse<UserActionListEntity>> {
    const data = await request<UserActionListEntity>('get', '/communal/userActions', params)
    return data
  },
  async getUserActionStatisticList(params: { session_id: string }): Promise<IResponse<UserActionStatisticListEntity>> {
    const data = await request<UserActionStatisticListEntity>('get', '/communal/userActionStatistics', params)
    return data
  }
}
