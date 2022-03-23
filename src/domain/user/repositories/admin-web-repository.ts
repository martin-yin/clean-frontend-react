import { request } from '../../../utils/request'
import { AdminRepository } from '../model/admin.entity'
import { AdminModel, LoginParam, RegisterParam } from '../model/admin.model'

export class AdminWebRepository extends AdminRepository {
  async login(param: LoginParam): Promise<AdminModel> {
    const { data } = await request<AdminModel>('post', '/admin/adminLogin', param)
    return data
  }

  async register(param: RegisterParam): Promise<AdminModel> {
    const { data } = await request<AdminModel>('post', '/admin/adminRegister', param)
    return data
  }
}
