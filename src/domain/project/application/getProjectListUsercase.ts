import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { useWebMessageServicec } from '@/infrastructure/service/webMessageService'
import { injectable, inject } from 'tsyringe'
import { ProjectRepositoryMapper } from '../adapter/repositories/mapper/projectWebRepositoryMapper'
import { ProjectRepository } from '../model/projectEntity'
import { ProjectListModel, ProjectModel } from '../model/projectModel'

@injectable()
export class GetProjectListUseCase implements UseCase<any, ProjectListModel> {
  constructor(
    @inject('ProjectRepository') private projectRepository: ProjectRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('ProjectRepositoryMapper') private projectRepositoryMapper: ProjectRepositoryMapper
  ) {}
  async execute(): Promise<ProjectListModel> {
    const { data, code, msg } = await this.projectRepository.getProjects()
    if (code === 200) {
      return this.projectRepositoryMapper.mapFromProjectModelList(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
