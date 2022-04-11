import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { MessageService } from '@/infrastructure/interface/message'
import { UseCase } from '@/infrastructure/interface/use.case'
import { inject, injectable } from 'tsyringe'
import { HttpRepositoryMapper } from '../adapter/repositories/mapper/httpWebRepositoryMapper'
import { HttpRepository } from '../model/httpEntity'
import { HttpListModel } from '../model/httpModel'

@injectable()
export class GetHttpListUseCase implements UseCase<FilterHeaderParams, HttpListModel> {
  constructor(
    @inject('AdminRepository') private httpRepository: HttpRepository,
    @inject('MessageService') private messageService: MessageService,
    @inject('HttpRepositoryMapper') private httpRepositoryMapper: HttpRepositoryMapper
  ) {}

  async execute(params: FilterHeaderParams) {
    const { data, code, msg } = await this.httpRepository.getHttpList(params)
    if (code == 200) {
      return this.httpRepositoryMapper.mapFromtHttpListModel(data)
    } else {
      this.messageService.warning(msg)
      return null
    }
  }
}
