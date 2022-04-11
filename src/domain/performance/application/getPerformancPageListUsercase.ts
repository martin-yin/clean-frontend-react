import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { PerformanceRepositoryMapper } from '../adapter/repositories/mapper/performanceWebRepositoryMapper'
import { PerformanceRepository } from '../model/performanceEntity'

@injectable()
export class GetPerformancPageListUseCase implements UseCase<FilterHeaderParams, any> {
  constructor(
    @inject('PerformanceRepository') private performanceRepository: PerformanceRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('PerformanceRepositoryMapper') private performanceRepositoryMapper: PerformanceRepositoryMapper
  ) {}
  async execute(params: FilterHeaderParams): Promise<any> {
    const { data, code, msg } = await this.performanceRepository.getPerformancePageList(params)
    if (code === 200) {
      return this.performanceRepositoryMapper.mapFromPerformancPageListModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
