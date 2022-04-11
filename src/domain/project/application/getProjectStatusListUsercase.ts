import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { ProjectRepositoryMapper } from '../adapter/repositories/mapper/projectWebRepositoryMapper'
import { ProjectRepository, ProjectStatusListEntity } from '../model/projectEntity'
import { ProjectStatusListModel } from '../model/projectModel'

@injectable()
export class GetProjectStatusListUseCase implements UseCase<ProjectStatusListEntity, ProjectStatusListModel> {
  constructor(
    @inject('ProjectRepository') private projectRepository: ProjectRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('ProjectRepositoryMapper') private projectRepositoryMapper: ProjectRepositoryMapper
  ) {}
  async execute(): Promise<ProjectStatusListModel> {
    const { data, code, msg } = await this.projectRepository.getProjectStatusList()
    if (code === 200) {
      return this.projectRepositoryMapper.mapFromProjectStatusListModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
