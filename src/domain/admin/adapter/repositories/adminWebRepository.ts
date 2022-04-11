import { HttpService } from '@/infrastructure/interface/http'
import { IResponse } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'
import { AdminEntity, AdminLoginEntity, AdminRepository } from '../../model/adminEntity'
import { LoginParams, RegisterParams } from '../../model/adminModel'

@injectable()
export class AdminWebRepository implements AdminRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}

  async login(param: LoginParams): Promise<IResponse<AdminLoginEntity>> {
    const data = await this.webHttpService.post<LoginParams, AdminLoginEntity>('/admin/adminLogin', param)
    return data
  }
  async register(param: RegisterParams): Promise<IResponse<AdminLoginEntity>> {
    const data = await this.webHttpService.post<RegisterParams, AdminLoginEntity>('/admin/adminLogin', param)
    return data
  }
}
