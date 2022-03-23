import { AdminModel, LoginParam, RegisterParam } from './admin.model'

export abstract class AdminRepository {
  abstract login(param: LoginParam): Promise<AdminModel>
  abstract register(param: RegisterParam): Promise<AdminModel>
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
