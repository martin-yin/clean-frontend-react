import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { ProjectRepository } from '../model/project.entity'
import { CreateProjectParams, ProjectModel } from '../model/project.model'
import { ProjectWebRepository } from '../repositories/project-web-repository'

@Injectable([ProjectWebRepository])
export class CreateProjectUseCase implements UseCase<CreateProjectParams, ProjectModel> {
  constructor(private projectRepository: ProjectRepository) {}
  async execute(param: CreateProjectParams): Promise<ProjectModel> {
    return this.projectRepository.createProject(param)
  }
}
