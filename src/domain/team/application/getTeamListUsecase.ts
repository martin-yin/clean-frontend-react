import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { TeamRepositoryMapper } from '../adapter/repositories/mapper/teamWebRepositoryMapper'
import { TeamRepository } from '../model/teamEntity'
import { TeamModelList } from '../model/teamModel'

@injectable()
export class GetTeamListUseCase implements UseCase<void, TeamModelList> {
  constructor(
    @inject('TeamRepository') private teamRepository: TeamRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('TeamRepositoryMapper') private teamRepositoryMapper: TeamRepositoryMapper
  ) {}
  async execute(): Promise<TeamModelList> {
    const { data, code, msg } = await this.teamRepository.getTeamList()
    if (code == 200) {
      return this.teamRepositoryMapper.mapFromTeamListModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
