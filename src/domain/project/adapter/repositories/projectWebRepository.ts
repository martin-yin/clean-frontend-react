import { HttpService } from '@/infrastructure/interface/http'
import { IResponse } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'
import { ProjectEntity, ProjectListEntity, ProjectRepository, ProjectStatusListEntity } from '../../model/projectEntity'
import { CreateProjectParams } from '../../model/projectModel'

@injectable()
export class ProjectWebRepository implements ProjectRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}
  async getProject(): Promise<IResponse<ProjectEntity>> {
    return await this.webHttpService.get<ProjectEntity, any>('/admin/project')
  }
  async getProjects(): Promise<IResponse<ProjectListEntity>> {
    return await this.webHttpService.get<ProjectListEntity, any>('/admin/projects')
  }
  async createProject(param: CreateProjectParams): Promise<IResponse<ProjectEntity>> {
    return await this.webHttpService.get('/admin/createProject', param)
  }
  async getProjectStatusList(): Promise<IResponse<ProjectStatusListEntity>> {
    return await this.webHttpService.get('/communal/getHealthStatus')
  }
  async deleteProject(id: number): Promise<IResponse<string>> {
    return await this.webHttpService.get(`/admin/delProject?id=${id}`)
  }
}
