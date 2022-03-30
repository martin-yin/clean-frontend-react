import { IResponse, request } from '@/utils/request'
import { TeamEntity, TeamRepository } from '../model/teamEntity'
import { CreateTeamParams, TeamModel } from '../model/teamModel'

export function teamWebRepository(): TeamRepository {
  const getTeamList = async (): Promise<IResponse<TeamEntity[]>> => {
    return await request<TeamEntity[]>('get', '/admin/teamList')
  }
  const createTeam = async (params: CreateTeamParams): Promise<IResponse<TeamModel>> => {
    return await request<TeamModel>('post', '/admin/createTeam', params)
  }

  return { createTeam, getTeamList }
}
