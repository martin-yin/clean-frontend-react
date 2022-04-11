import { AdminModel } from '@/domain/admin/model/adminModel'
import { ProjectModel } from '@/domain/project/model/projectModel'
import { CasedProperties } from '@/infrastructure/interface'
import { TeamEntity } from './teamEntity'

export type TeamModel = CasedProperties<Omit<TeamEntity, 'team_admin_list' | 'team_project_list'>> & {
  adminList: Array<AdminModel>
  teamProjectList: Array<ProjectModel>
}

export type TeamModelList = Array<TeamModel>

export type CreateTeamParams = Record<'project_name', string> & Record<'team_id', string>
