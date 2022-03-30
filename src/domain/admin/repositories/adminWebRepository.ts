import { IResponse, request } from '@/code/lib/request'
import { AdminRepository } from '../model/adminEntity'
import { AdminModel, LoginParams, RegisterParams } from '../model/adminModel'

export function adminWebRepository(): AdminRepository {
  const login = async (param: LoginParams): Promise<IResponse<AdminModel>> => {
    const data = await request<AdminModel>('post', '/admin/adminLogin', param)
    return data
  }

  const register = async (param: RegisterParams): Promise<IResponse<AdminModel>> => {
    const data = await request<AdminModel>('post', '/admin/registerAdmin', param)
    return data
  }
  return {
    login,
    register
  }
}
