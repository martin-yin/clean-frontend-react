import { IResponse, request } from '../../../utils/request'
import { AdminRepository } from '../model/admin.entity'
import { AdminModel, LoginParam, RegisterParam } from '../model/admin.model'

export const AdminWebRepositorys: AdminRepository = {
  async login(param: LoginParam): Promise<IResponse<AdminModel>> {
    const data = await request<AdminModel>('post', '/admin/adminLogin', param)
    return data
  },
  async register(param: RegisterParam): Promise<IResponse<AdminModel>> {
    const data = await request<AdminModel>('post', '/admin/registerAdmin', param)
    return data
  }
}
