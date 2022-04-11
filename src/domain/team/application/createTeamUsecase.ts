import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { TeamRepositoryMapper } from '../adapter/repositories/mapper/teamWebRepositoryMapper'
import { TeamRepository } from '../model/teamEntity'
import { CreateTeamParams, TeamModel } from '../model/teamModel'

@injectable()
export class CreateTeamUseCase implements UseCase<CreateTeamParams, TeamModel> {
  constructor(
    @inject('TeamRepository') private teamRepository: TeamRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('TeamRepositoryMapper') private teamRepositoryMapper: TeamRepositoryMapper
  ) {}
  async execute(params: CreateTeamParams): Promise<TeamModel> {
    const { data, code, msg } = await this.teamRepository.createTeam(params)
    if (code == 200) {
      return this.teamRepositoryMapper.mapFromTeamModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
