import { request } from '../../../utils/request'
import { TeamRepository } from '../model/team.entity'
import { CreateTeamParams, TeamModel } from '../model/team.model'

export class TeamWebRepository extends TeamRepository {
  async getTeamList(): Promise<TeamModel[]> {
    const { data } = await request<TeamModel[]>('get', '/admin/teams')
    return data
  }
  async createTeam(param: CreateTeamParams): Promise<number> {
    const { code, msg } = await request('post', '/admin/createTeam', param)
    return 1
  }
}
