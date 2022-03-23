import { CreateProjectParams, ProjectModel } from './project.model'

export abstract class ProjectRepository {
  abstract getProject(): Promise<ProjectModel>
  abstract getProjects(): Promise<Array<ProjectModel>>
  abstract createProject(param: CreateProjectParams): Promise<ProjectModel>
  // abstract getHealthStatus(): Promise<TeamIF.ProjectHealthys>
  abstract delProject(id: number): Promise<string>
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
