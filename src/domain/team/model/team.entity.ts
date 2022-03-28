import { AdminEntity } from '@/domain/admin/model/admin.entity'
import { ProjectEntity } from '@/domain/project/model/project.entity'
import { IResponse } from '@/utils/request'
import { CreateTeamParams, TeamModel } from './team.model'

export abstract class TeamRepository {
  abstract getTeamList(): Promise<IResponse<TeamEntity[]>>
  abstract createTeam(param: CreateTeamParams): Promise<IResponse<TeamModel>>
}

export interface TeamEntity {
  created_at: string
  updated_at: string
  id: number
  name: string
  nick_name: string
  admin_id: number
  team_admins: Array<AdminEntity>
  team_projects: Array<ProjectEntity>
}
