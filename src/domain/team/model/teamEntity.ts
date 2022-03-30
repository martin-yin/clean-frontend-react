import { AdminEntity } from '@/domain/admin/model/adminEntity'
import { ProjectEntity } from '@/domain/project/model/project.entity'
import { IResponse } from '@/utils/request'
import { CreateTeamParams, TeamModel } from './teamModel'

export interface TeamRepository {
  getTeamList(): Promise<IResponse<TeamEntity[]>>
  createTeam(params: CreateTeamParams): Promise<IResponse<TeamModel>>
}

export interface TeamEntity {
  created_at: string
  updated_at: string
  id: number
  name: string
  nick_name: string
  admin_id: number
  team_admin_list: Array<AdminEntity>
  team_project_list: Array<ProjectEntity>
}

export interface Team_admin {
  id: number
  created_at: string
  updated_at: string
  user_name: string
  password: string
  email: string
  nick_name: string
}

export interface Team_project {
  id: number
  created_at: string
  updated_at: string
  project_name: string
  project_type: string
  logo: string
  monitor_id: string
  admin_id: number
  team_id: number
}

export interface Data {
  id: number
  created_at: string
  updated_at: string
  name: string
  nick_name: string
  admin_id: number
  team_admin_list: Team_admin[]
  team_projects: Team_project[]
}
