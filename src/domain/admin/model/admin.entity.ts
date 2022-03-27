import { IResponse } from '@/utils/request'
import { AdminModel, LoginParam, RegisterParam } from './admin.model'

export interface AdminRepository {
  login(param: LoginParam): Promise<IResponse<AdminModel>>
  register(param: RegisterParam): Promise<IResponse<AdminModel>>
}

export interface AdminEntity {
  created_at: string
  email: string
  id: number
  nick_name: string
  password: string
  updated_at: string
  user_name: string
}
