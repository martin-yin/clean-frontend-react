import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { TeamRepository } from '../model/team.entity'
import { TeamModel } from '../model/team.model'
import { TeamWebRepository } from '../repositories/team-web-repository'

@Injectable([TeamWebRepository])
export class GetTeamListUseCase implements UseCase<void, Array<TeamModel>> {
  constructor(private teamRepository: TeamRepository) {}

  async execute(): Promise<Array<TeamModel>> {
    return await this.teamRepository.getTeamList()
  }
}
