import { request } from '../../../utils/request'
import { ProjectEntity, ProjectRepository, ProjectStatusEntity } from '../model/project.entity'
import { CreateProjectParams, ProjectModel, ProjectStatusModel } from '../model/project.model'
import { ProjectWebRepositoryMapper } from './mapper/project-web-repository.mapper'

export class ProjectWebRepository extends ProjectRepository {
  mapper = new ProjectWebRepositoryMapper()

  async getProject(): Promise<ProjectModel> {
    const { data } = await request<ProjectEntity>('get', '/admin/project')
    return this.mapper.mapFrom(data)
  }

  async getProjects(): Promise<ProjectModel[]> {
    const { data } = await request<Array<ProjectEntity>>('get', '/admin/projects')
    return data.map(this.mapper.mapFrom)
  }

  delProject(id: number): Promise<string> {
    throw new Error('Method not implemented.')
  }

  async createProject(param: CreateProjectParams): Promise<ProjectModel> {
    const { data, code } = await request<ProjectEntity>('post', '/admin/createProject', param)
    return this.mapper.mapFrom(data)
  }

  async getProjectStatusList(): Promise<Array<ProjectStatusModel>> {
    const { data, code } = await request<Array<ProjectStatusEntity>>('get', '/communal/getHealthStatus')
    return data.map(this.mapper.mapFromProjectHealthyModel)
  }
}
