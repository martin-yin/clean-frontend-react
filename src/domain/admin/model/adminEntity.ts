import { IResponse } from '@/infrastructure/lib/request'
import { LoginParams, RegisterParams } from './adminModel'

export abstract class AdminRepository {
  abstract login(param: LoginParams): Promise<IResponse<AdminEntity>>
  abstract register(param: RegisterParams): Promise<IResponse<AdminEntity>>
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
