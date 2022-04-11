import { HttpService } from '@/infrastructure/interface/http'
import { IResponse } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'
import { TeamEntity, TeamListEntity, TeamRepository } from '../../model/teamEntity'
import { CreateTeamParams } from '../../model/teamModel'

@injectable()
export class TeamWebRepository implements TeamRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}
  async getTeamList(): Promise<IResponse<TeamListEntity>> {
    return await this.webHttpService.get('/admin/teamList')
  }

  async createTeam(params: CreateTeamParams): Promise<IResponse<TeamEntity>> {
    return await this.webHttpService.post('/admin/createTeam', params)
  }
}
