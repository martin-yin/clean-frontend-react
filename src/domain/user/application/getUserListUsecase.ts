import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { UserRepositoryMapper } from '../adapter/repositories/mapper/userWebRepository.mapper'
import { UserRepository } from '../model/userEntity'
import { GetUserListParams, UserListModel } from '../model/userModel'

@injectable()
export class GetUserListUseCase implements UseCase<GetUserListParams, UserListModel> {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('UserRepositoryMapper') private userRepositoryMapper: UserRepositoryMapper
  ) {}

  async execute(params: GetUserListParams): Promise<UserListModel> {
    const { data, code, msg } = await this.userRepository.getUserList(params)
    if (code == 200) {
      return this.userRepositoryMapper.mapFromUserListModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
