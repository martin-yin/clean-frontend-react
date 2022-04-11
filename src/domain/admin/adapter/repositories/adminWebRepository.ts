import { HttpService } from '@/infrastructure/interface/http'
import { IResponse } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'
import { AdminEntity, AdminRepository } from '../../model/adminEntity'
import { LoginParams, RegisterParams } from '../../model/adminModel'

@injectable()
export class AdminWebRepository implements AdminRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}

  async login(param: LoginParams): Promise<IResponse<AdminEntity>> {
    const data = await this.webHttpService.post<AdminEntity, LoginParams>('/admin/adminLogin', param)
    return data
  }
  async register(param: RegisterParams): Promise<IResponse<AdminEntity>> {
    const data = await this.webHttpService.post<AdminEntity, RegisterParams>('/admin/adminLogin', param)
    return data
  }
}
