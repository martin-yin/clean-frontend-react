import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { UserRepository } from '../model/userEntity'
import { UserActionStatisticListModel } from '../model/userModel'

@injectable()
export class GetUserActionStatisticsUseCase implements UseCase<{ session_id: string }, UserActionStatisticListModel> {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
    @inject('MessageService') private messageService: MessageService
  ) {}

  async execute(params: { session_id: string }): Promise<UserActionStatisticListModel> {
    const { data, code, msg } = await this.userRepository.getUserActionStatisticList(params)
    if (code == 200) {
      return data
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
