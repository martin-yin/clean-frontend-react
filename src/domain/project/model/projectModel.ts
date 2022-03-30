import { CasedProperties } from '@/code/interface'
import { ProjectEntity, ProjectStatusEntity } from './projectEntity'

export type ProjectModel = CasedProperties<ProjectEntity>

export type CreateProjectParams = Record<'project_name', string> & Record<'team_id', string>

export type ProjectStatusModel = CasedProperties<ProjectStatusEntity> & Record<'rate', number>

export type ProjectStatusListModel = Array<ProjectStatusModel>

export interface ProjectListAndMonitorId {
  monitorId: string
  projectList: ProjectStatusListModel
}
