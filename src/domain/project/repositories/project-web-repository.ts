import { IResponse, request } from '../../../utils/request'
import { ProjectRepository } from '../model/project.entity'
import { CreateProjectParams, ProjectModel, ProjectStatusModel } from '../model/project.model'

export const ProjectWebRepository: ProjectRepository = {
  async getProject(): Promise<IResponse<ProjectModel>> {
    const data = await request<ProjectModel>('get', '/admin/project')
    return data
  },
  async getProjects(): Promise<IResponse<ProjectModel[]>> {
    const data = await request<Array<ProjectModel>>('get', '/admin/projects')
    return data
  },
  async createProject(param: CreateProjectParams): Promise<IResponse<ProjectModel>> {
    const data = await request<ProjectModel>('post', '/admin/createProject', param)
    return data
  },
  async getProjectStatusList(): Promise<IResponse<ProjectStatusModel[]>> {
    const data = await request<Array<ProjectStatusModel>>('get', '/communal/getHealthStatus')
    return data
  },
  delProject: function (id: number): Promise<IResponse<string>> {
    throw new Error('Function not implemented.')
  }
}
