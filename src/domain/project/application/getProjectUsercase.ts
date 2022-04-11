import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { ProjectRepositoryMapper } from '../adapter/repositories/mapper/projectWebRepositoryMapper'
import { ProjectEntity, ProjectRepository } from '../model/projectEntity'
import { ProjectModel } from '../model/projectModel'

@injectable()
export class GetProjectUseCase implements UseCase<ProjectEntity, ProjectModel> {
  constructor(
    @inject('ProjectRepository') private projectRepository: ProjectRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('ProjectRepositoryMapper') private projectRepositoryMapper: ProjectRepositoryMapper
  ) {}
  async execute(): Promise<ProjectModel> {
    const { data, code, msg } = await this.projectRepository.getProject()
    if (code === 200) {
      return this.projectRepositoryMapper.mapFromProjectModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
