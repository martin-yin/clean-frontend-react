import { IResponse, request } from '@/utils/request'
import { TeamRepository } from '../model/team.entity'
import { CreateTeamParams, TeamModel } from '../model/team.model'

export const teamWebRepository: TeamRepository = {
  async getTeamList(): Promise<IResponse<TeamModel[]>> {
    const data = await request<TeamModel[]>('get', '/admin/teams')
    return data
  },
  async createTeam(param: CreateTeamParams): Promise<IResponse<TeamModel>> {
    const data = await request<TeamModel>('post', '/admin/createTeam', param)
    return data
  }
}
