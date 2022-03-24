import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { ProjectRepository } from '../model/project.entity'
import { ProjectStatusModel } from '../model/project.model'
import { ProjectWebRepository } from '../repositories/project-web-repository'

@Injectable([ProjectWebRepository])
export class GetProjectStatusListUseCase implements UseCase<void, Array<ProjectStatusModel>> {
  constructor(private projectRepository: ProjectRepository) {}
  async execute(): Promise<Array<ProjectStatusModel>> {
    const projectStatusList = await this.projectRepository.getProjectStatusList()
    return projectStatusList
  }
}
