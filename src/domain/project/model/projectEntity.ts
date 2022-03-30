import { IResponse } from '../../../utils/request'
import { CreateProjectParams } from './projectModel'

export interface ProjectRepository {
  getProject(): Promise<IResponse<ProjectEntity>>
  getProjects(): Promise<IResponse<ProjectListEntity>>
  createProject(param: CreateProjectParams): Promise<IResponse<ProjectEntity>>
  getProjectStatusList(): Promise<IResponse<ProjectStatusListEntity>>
  deleteProject(id: number): Promise<IResponse<string>>
}

export interface ProjectEntity {
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

export type ProjectListEntity = Array<ProjectEntity>

export interface ProjectStatusEntity extends Pick<ProjectEntity, 'monitor_id' | 'project_name'> {
  pv: number
  uv: number
  js_error: number
  resource_error: number
  http_error: number
}

export type ProjectStatusListEntity = Array<ProjectStatusEntity>

export interface Data {}

export interface RootObject {
  code: number
  data: Data[]
  msg: string
}
