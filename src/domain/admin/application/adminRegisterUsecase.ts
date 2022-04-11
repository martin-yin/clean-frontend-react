import { RegisterParams } from '../model/adminModel'
import { AdminRepository } from '../model/adminEntity'
import { MessageService } from '@/infrastructure/interface/message'
import { inject, injectable } from 'tsyringe'
import { AdminRepositoryMapper } from '../adapter/repositories/mapper/adminWebRepositoryMapper'

@injectable()
export class AdminRegisterUseCase {
  constructor(
    @inject('AdminRepository') private adminRepository: AdminRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('AdminRepositoryMapper') private adminRepositoryMapper: AdminRepositoryMapper
  ) {}

  async execute(params: RegisterParams) {
    const { data, code, msg } = await this.adminRepository.register(params)
    if (code == 200) {
      return this.adminRepositoryMapper.mapFromAdminModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
