import WebStorage from '../../../code/base/storage '
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
    const storage: WebStorage = new WebStorage()
    // Todo: 1.判断 monitorId 是否存在与 projectList中
    // 2. 如果当前业务需要整合多个 usecase, 那么是不是可以向上提一层application ?
    const monitorId = storage.getItem('monitorId') ? storage.getItem('monitorId') : projectList[0]?.monitorId
    return { monitorId, projectList }
  }
}
