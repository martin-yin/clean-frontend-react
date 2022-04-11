import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { HttpRepositoryMapper } from '../adapter/repositories/mapper/httpWebRepositoryMapper'
import { HttpRepository } from '../model/httpEntity'
import { HttpQuotaModel } from '../model/httpModel'

@injectable()
export class GetHttpQuotaUseCase implements UseCase<FilterHeaderParams, HttpQuotaModel> {
  constructor(
    @inject('HttpRepository') private httpRepository: HttpRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('HttpRepositoryMapper') private httpRepositoryMapper: HttpRepositoryMapper
  ) {}

  async execute(params: FilterHeaderParams): Promise<HttpQuotaModel> {
    const { data, code, msg } = await this.httpRepository.getHttpQuota(params)
    if (code == 200) {
      return this.httpRepositoryMapper.mapFromtHttpQuotaModel(data)
    } else {
      this.messageService.warning(msg)
      return null
    }
  }
}
