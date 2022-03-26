import { ProjectModel } from '../../project/model/project.model'
import { AdminModel } from '../../admin/model/admin.model'

export interface TeamModel {
  admin_id: string
  name: string
  id: string
  nick_name: string
  admin_list: Array<AdminModel>
  team_project_list: Array<ProjectModel>
}

export type CreateTeamParams = Record<'project_name', string> & Record<'team_id', string>
