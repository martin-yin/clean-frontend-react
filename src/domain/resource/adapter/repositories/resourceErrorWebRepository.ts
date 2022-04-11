import { FilterHeaderParams } from '@/features/filterHeader/hook/useFilterHeaderInit'
import { HttpService } from '@/infrastructure/interface/http'
import { IResponse } from '@/infrastructure/lib/request'
import { inject, injectable } from 'tsyringe'
import { ResourceErrorListQuotaEntity, ResourceErrorRepository } from '../../model/resourceErrorEntity'

@injectable()
export class ResourceErrorWebRepository implements ResourceErrorRepository {
  constructor(@inject('HttpService') private webHttpService: HttpService) {}

  getStaticErr(filterHeaderParams: FilterHeaderParams): Promise<IResponse<ResourceErrorListQuotaEntity>> {
    return this.webHttpService.get('/communal/staticErr', filterHeaderParams)
  }
}
