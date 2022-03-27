import { IResponse, request } from '@/utils/request'
import { ProjectEntity, ProjectRepository, ProjectStatusEntity } from '../model/project.entity'
import { CreateProjectParams, ProjectModel } from '../model/project.model'

export const ProjectWebRepository: ProjectRepository = {
  async getProject(): Promise<IResponse<ProjectModel>> {
    const data = await request<ProjectModel>('get', '/admin/project')
    return data
  },
  async getProjects(): Promise<IResponse<ProjectEntity[]>> {
    const data = await request<Array<ProjectEntity>>('get', '/admin/projects')
    return data
  },
  async createProject(param: CreateProjectParams): Promise<IResponse<ProjectEntity>> {
    const data = await request<ProjectEntity>('post', '/admin/createProject', param)
    return data
  },
  async getProjectStatusList(): Promise<IResponse<ProjectStatusEntity[]>> {
    const data = await request<Array<ProjectStatusEntity>>('get', '/communal/getHealthStatus')
    return data
  },
  delProject: function (id: number): Promise<IResponse<string>> {
    throw new Error('Function not implemented.')
  }
}
