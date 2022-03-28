import { CasedProperties } from '@/code/interface'
import { AdminModel } from '@/domain/admin/model/admin.model'
import { ProjectModel } from '@/domain/project/model/project.model'
import { TeamEntity } from './team.entity'

export type TeamModel = CasedProperties<Omit<TeamEntity, 'team_admins' | 'team_projects'>> & {
  adminList: Array<AdminModel>
  teamProjectList: Array<ProjectModel>
}

export type CreateTeamParams = Record<'project_name', string> & Record<'team_id', string>
