import { toUpperCaseData } from '@/infrastructure/lib'
import { ResourceErrorListQuotaEntity } from '../../../model/resourceErrorEntity'
import { ResourceErrorListQuotaModel } from '../../../model/resourceErrorModel'

export abstract class ResourceRepositoryMapper {
  abstract mapFromResourceErrorModel(param: ResourceErrorListQuotaEntity): ResourceErrorListQuotaModel
}

export class ResourceWebRepositoryMapper implements ResourceRepositoryMapper {
  mapFromResourceErrorModel(params: ResourceErrorListQuotaEntity): ResourceErrorListQuotaModel {
    return {
      quota: toUpperCaseData(params.quota),
      resourceList: params.resource_list.map(item => toUpperCaseData(item))
    }
  }
}
