import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { ResourceRepositoryMapper } from '../adapter/repositories/mapper/resourceMapperWebRepositoryMapper'
import { ResourceErrorRepository } from '../model/resourceErrorEntity'
import { ResourceErrorListQuotaModel } from '../model/resourceErrorModel'

@injectable()
export class GetResourceErrorListUseCase implements UseCase<FilterHeaderParams, ResourceErrorListQuotaModel> {
  constructor(
    @inject('ResourceErrorRepository') private resouceRepository: ResourceErrorRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('ResourceRepositoryMapper') private resourceRepositoryMapper: ResourceRepositoryMapper
  ) {}
  async execute(params: FilterHeaderParams): Promise<ResourceErrorListQuotaModel> {
    const { data, code, msg } = await this.resouceRepository.getStaticErr(params)
    if (code === 200) {
      return this.resourceRepositoryMapper.mapFromResourceErrorModel(data)
    } else {
      this.messageService.error(msg)
      return null
    }
  }
}
