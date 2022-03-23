import { UseCase } from '../../../code/base/use.case'
import { Injectable } from '../../../code/decorator'
import { ProjectRepository } from '../model/project.entity'
import { ProjectListAndMonitorId } from '../model/project.model'
import { ProjectWebRepository } from '../repositories/project-web-repository'

@Injectable([ProjectWebRepository])
export class GetProjectListUseCase implements UseCase<void, ProjectListAndMonitorId> {
  constructor(private projectRepository: ProjectRepository) {}
  async execute(): Promise<ProjectListAndMonitorId> {
    const projectList = await this.projectRepository.getProjects()
    // Todo: 判断 monitorId 是否存在与 projectList中
    const monitorId = localStorage.getItem('monitorId') ? localStorage.getItem('monitorId') : projectList[0]?.monitorId
    return { monitorId, projectList }
  }
}
