import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { AdminModel, RegisterParam } from '../model/admin.model'
import { AdminWebRepository } from '../repositories/admin-web-repository'

@Injectable([AdminWebRepository])
export class AdminRegisterUseCase implements UseCase<RegisterParam, AdminModel> {
  constructor(private adminRepository: AdminWebRepository) {}

  async execute(params: RegisterParam): Promise<AdminModel> {
    return await this.adminRepository.register(params)
  }
}
