import { IResponse } from '@/code/lib/request'
import { AdminModel, LoginParams, RegisterParams } from './adminModel'

export interface AdminRepository {
  login(param: LoginParams): Promise<IResponse<AdminModel>>
  register(param: RegisterParams): Promise<IResponse<AdminModel>>
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
