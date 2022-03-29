import { toUpperCaseData } from '@/utils/request'
import { ResourceErrorListQuotaEntity } from '../../model/resource.error.entity'
import { ResourceErrorListQuotaModel } from '../../model/resource.error.model'

export const ResourceWebRepositoryMapper = () => {
  return {
    mapFromResourceErrorModel(param: ResourceErrorListQuotaEntity): ResourceErrorListQuotaModel {
      return {
        quota: toUpperCaseData(param.quota),
        resourceList: param.resource_list.map(item => toUpperCaseData(item))
      }
    }
  }
}
