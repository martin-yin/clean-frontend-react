import { request } from '../../../utils/request'
import { ProjectEntity, ProjectRepository } from '../model/project.entity'
import { ProjectModel } from '../model/project.model'
import { ProjectWebRepositoryMapper } from './mapper/project-web-repository.mapper'

export class ProjectWebRepository extends ProjectRepository {
  mapper = new ProjectWebRepositoryMapper()

  async getProject(): Promise<ProjectModel> {
    const { data } = await request<ProjectEntity>('get', '/admin/project')
    return this.mapper.mapFrom(data)
  }

  async getProjects(): Promise<ProjectModel[]> {
    const { data } = await request<Array<ProjectEntity>>('get', '/admin/projects')
    return data.map(item => this.mapper.mapFrom(item))
  }

  delProject(id: number): Promise<string> {
    throw new Error('Method not implemented.')
  }
}
