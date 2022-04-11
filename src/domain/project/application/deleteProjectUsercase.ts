import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { ProjectRepository } from '../model/projectEntity'
import { ProjectModel } from '../model/projectModel'

@injectable()
export class DeleteProjectUseCase implements UseCase<number, any> {
  constructor(
    @inject('ProjectRepository') private projectRepository: ProjectRepository,
    @inject('MessageService') private messageService: MessageService
  ) {}
  async execute(id: number): Promise<ProjectModel> {
    const { data, code, msg } = await this.projectRepository.deleteProject(id)
    if (code === 200) {
      this.messageService.success('删除成功!')
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
