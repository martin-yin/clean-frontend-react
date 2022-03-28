import { IResponse, request } from '@/utils/request'
import { ProjectEntity, ProjectRepository, ProjectStatusEntity } from '../model/project.entity'
import { CreateProjectParams } from '../model/project.model'

export const ProjectWebRepository: ProjectRepository = {
  async getProject(): Promise<IResponse<ProjectEntity>> {
    const data = await request<ProjectEntity>('get', '/admin/project')
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
  async deleteProject(id: number): Promise<IResponse> {
    return await request('get', `/admin/delProject?id=${id}`)
  }
}
