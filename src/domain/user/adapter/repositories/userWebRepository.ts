import { HttpService } from '@/infrastructure/interface/http'
import { IResponse } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'
import {
  UserActionListEntity,
  UserActionStatisticListEntity,
  UserEntity,
  UserListEntity,
  UserRepository
} from '../../model/userEntity'
import { GetUserListParams } from '../../model/userModel'

@injectable()
export class UserWebRepository implements UserRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}
  async getUserList(params: GetUserListParams): Promise<IResponse<UserListEntity>> {
    return await this.webHttpService.get('/communal/users', params)
  }

  async getUserActionList(params: {
    session_id: string
    page: number
    limit: number
  }): Promise<IResponse<UserActionListEntity>> {
    return await this.webHttpService.get('/communal/userActions', params)
  }
  async getUser(id: string): Promise<IResponse<UserEntity>> {
    return await this.webHttpService.get(`/communal/user?id=${id}`)
  }
  async getUserActionStatisticList(params: { session_id: string }): Promise<IResponse<UserActionStatisticListEntity>> {
    return await this.webHttpService.get<{ session_id: string }, UserActionStatisticListEntity>(
      '/communal/userActionStatistics',
      params
    )
  }
}
