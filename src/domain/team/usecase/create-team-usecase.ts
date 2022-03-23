import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { TeamRepository } from '../model/team.entity'
import { CreateTeamParams, TeamModel } from '../model/team.model'
import { TeamWebRepository } from '../repositories/team.web.repository'

@Injectable([TeamWebRepository])
export class CreateTeamUseCase implements UseCase<CreateTeamParams, number> {
  constructor(private teamRepository: TeamRepository) {}

  async execute(params: CreateTeamParams): Promise<number> {
    return await this.teamRepository.createTeam(params)
  }
}
