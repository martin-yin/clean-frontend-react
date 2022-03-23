import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { AdminModel, LoginParam } from '../model/admin.model'
import { AdminWebRepository } from '../repositories/admin-web-repository'

@Injectable([AdminWebRepository])
export class AdminLoginUseCase implements UseCase<LoginParam, AdminModel> {
  constructor(private adminRepository: AdminWebRepository) {}
  async execute(params: LoginParam): Promise<AdminModel> {
    return await this.adminRepository.login(params)
  }
}
