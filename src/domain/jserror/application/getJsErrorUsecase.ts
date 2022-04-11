import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { JsErrorWebRepositoryMapper } from '../adapter/repositories/mapper/jsErrorWebRepositoryMapper'
import { JsErrorRepository } from '../model/jsErrorEntity'
import { GetJsErrorParamModel, JsErrorModel } from '../model/jsErrorModel'

@injectable()
export class GetJsErrorUseCase implements UseCase<GetJsErrorParamModel, JsErrorModel> {
  constructor(
    @inject('JsErrorRepository') private jsErrorRepository: JsErrorRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('JsErrorWebRepositoryMapper') private jsErrorRepositoryMapper: JsErrorWebRepositoryMapper
  ) {}

  async execute(params: GetJsErrorParamModel): Promise<JsErrorModel> {
    const { data, code, msg } = await this.jsErrorRepository.getJsError(params)
    if (code == 200) {
      return this.jsErrorRepositoryMapper.mapFromJsErrorModel(data)
    } else {
      this.messageService.error(msg)
      return {} as JsErrorModel
    }
  }
}
