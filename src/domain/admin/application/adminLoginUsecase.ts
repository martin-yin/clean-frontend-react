import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { AdminRepositoryMapper } from '../adapter/repositories/mapper/adminWebRepositoryMapper'
import { AdminRepository } from '../model/adminEntity'
import { AdminModel, LoginParams } from '../model/adminModel'

@injectable()
export class AdminLoginUseCase implements UseCase<LoginParams, AdminModel> {
  constructor(
    @inject('AdminRepository') private adminRepository: AdminRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('AdminRepositoryMapper') private adminRepositoryMapper: AdminRepositoryMapper
  ) {}

  async execute(params: LoginParams) {
    const { data, code, msg } = await this.adminRepository.login(params)
    if (code == 200) {
      return this.adminRepositoryMapper.mapFromAdminLoginModel(data)
    } else {
      this.messageService.warning(msg)
      return null
    }
  }
}
