import { IResponse } from '@/utils/request'
import { CreateTeamParams, TeamModel } from './team.model'

export abstract class TeamRepository {
  abstract getTeamList(): Promise<IResponse<TeamModel[]>>
  abstract createTeam(param: CreateTeamParams): Promise<IResponse<TeamModel>>
}

export interface TeamEntity {
  created_at: string
  updated_at: string
  id: number
  name: string
  nick_name: string
  admin_id: number
}
