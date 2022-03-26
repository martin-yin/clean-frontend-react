import { IResponse } from '../../../utils/request'
import { CreateProjectParams, ProjectModel, ProjectStatusModel } from './project.model'

export abstract class ProjectRepository {
  abstract getProject(): Promise<IResponse<ProjectModel>>
  abstract getProjects(): Promise<IResponse<Array<ProjectEntity>>>
  abstract createProject(param: CreateProjectParams): Promise<IResponse<ProjectEntity>>
  abstract getProjectStatusList(): Promise<IResponse<Array<ProjectStatusEntity>>>
  abstract delProject(id: number): Promise<IResponse<string>>
}

export interface ProjectEntity {
  admin_id: number
  created_at: string
  id: number
  logo: string
  monitor_id: string
  project_name: string
  project_type: string
  team_id: number
  updated_at: string
}

export interface ProjectStatusEntity extends Omit<ProjectEntity, 'updated_at' | 'created_at'> {
  http_error: number
  js_error: number
  pv: number
  resources_error: number
  uv: number
}
