import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { ProjectRepositoryMapper } from '../adapter/repositories/mapper/projectWebRepositoryMapper'
import { ProjectRepository } from '../model/projectEntity'
import { CreateProjectParams, ProjectModel } from '../model/projectModel'

@injectable()
export class CreateProjectUseCase implements UseCase<CreateProjectParams, ProjectModel> {
  constructor(
    @inject('ProjectRepository') private projectRepository: ProjectRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('ProjectRepositoryMapper') private projectRepositoryMapper: ProjectRepositoryMapper
  ) {}
  async execute(params: CreateProjectParams): Promise<ProjectModel> {
    const { data, code, msg } = await this.projectRepository.createProject(params)
    if (code === 200) {
      return this.projectRepositoryMapper.mapFromProjectModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
