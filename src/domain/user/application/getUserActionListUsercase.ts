import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject } from 'tsyringe'
import { UserRepositoryMapper } from '../adapter/repositories/mapper/userWebRepository.mapper'
import { UserRepository } from '../model/userEntity'
import { GetUserActionListParams, UserActionListModel } from '../model/userModel'

export class GetUserActionListUseCase implements UseCase<GetUserActionListParams, UserActionListModel> {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('UserRepositoryMapper') private userRepositoryMapper: UserRepositoryMapper
  ) {}

  async execute(params: { session_id: string; page: number; limit: number }): Promise<UserActionListModel> {
    const { data, code, msg } = await this.userRepository.getUserActionList(params)
    if (code == 200) {
      return this.userRepositoryMapper.mapFormUserActionListModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
