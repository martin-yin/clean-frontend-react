import { WebMessage } from '../../../code/base/message'
import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { AdminModel, LoginParam } from '../model/admin.model'
import { AdminWebRepository } from '../repositories/admin-web-repository'

@Injectable([AdminWebRepository])
export class AdminLoginUseCase implements UseCase<LoginParam, AdminModel> {
  constructor(private adminRepository: AdminWebRepository) {}
  async execute(params: LoginParam): Promise<AdminModel> {
    const message = new WebMessage()
    const data = await this.adminRepository.login(params)
    if (data) {
      message.success('登录成功！')
      return data
    }
    return {} as AdminModel
  }
}
