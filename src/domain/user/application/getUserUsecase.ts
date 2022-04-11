import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { UserRepositoryMapper } from '../adapter/repositories/mapper/userWebRepository.mapper'
import { UserRepository } from '../model/userEntity'
import { UserModel } from '../model/userModel'

@injectable()
export class GetUserUseCase implements UseCase<string, UserModel> {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('UserRepositoryMapper') private userRepositoryMapper: UserRepositoryMapper
  ) {}

  async execute(id: string): Promise<UserModel> {
    const { data, code, msg } = await this.userRepository.getUser(id)
    if (code == 200) {
      return this.userRepositoryMapper.mapFromUser(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
