import { message } from 'antd'
import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { ProjectRepository } from '../model/project.entity'
import { CreateProjectParams, ProjectModel } from '../model/project.model'
import { ProjectWebRepository } from '../repositories/project-web-repository'

@Injectable([ProjectWebRepository])
export class CreateProjectUseCase implements UseCase<CreateProjectParams, ProjectModel> {
  constructor(private projectRepository: ProjectRepository) {}
  async execute(param: CreateProjectParams): Promise<ProjectModel> {
    const data = await this.projectRepository.createProject(param)
    if (data) {
      message.success('创建成功!')
      return data
    }
    return {} as ProjectModel
  }
}
