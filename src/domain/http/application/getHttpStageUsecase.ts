import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { HttpRepositoryMapper } from '../adapter/repositories/mapper/httpWebRepositoryMapper'
import { HttpRepository } from '../model/httpEntity'
import { HttpStageTimeListModel } from '../model/httpModel'

@injectable()
export class GetHttpStageUseCase implements UseCase<FilterHeaderParams, HttpStageTimeListModel> {
  constructor(
    @inject('AdminRepository') private httpRepository: HttpRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('HttpRepositoryMapper') private httpRepositoryMapper: HttpRepositoryMapper
  ) {}

  async execute(params: FilterHeaderParams): Promise<HttpStageTimeListModel> {
    const { data, code, msg } = await this.httpRepository.getHttpStageTimeList(params)
    if (code == 200) {
      return this.httpRepositoryMapper.mapFromHttpStageTimeListModel(data)
    } else {
      this.messageService.warning(msg)
      return null
    }
  }
}
