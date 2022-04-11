import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { JsErrorWebRepositoryMapper } from '../adapter/repositories/mapper/jsErrorWebRepositoryMapper'
import { JsErrorRepository } from '../model/jsErrorEntity'
import { JsErrorListModel } from '../model/jsErrorModel'

@injectable()
export class GetJsErrorListUseCase implements UseCase<FilterHeaderParams, JsErrorListModel> {
  constructor(
    @inject('JsErrorRepository') private jsErrorRepository: JsErrorRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('JsErrorRepositoryMapper') private jsErrorRepositoryMapper: JsErrorWebRepositoryMapper
  ) {}

  async execute(params: FilterHeaderParams): Promise<JsErrorListModel> {
    const { data, code, msg } = await this.jsErrorRepository.getJsErrorList(params)
    if (code == 200) {
      return this.jsErrorRepositoryMapper.mapFromJsErrorListModel(data)
    } else {
      this.messageService.error(msg)
      return []
    }
  }
}
